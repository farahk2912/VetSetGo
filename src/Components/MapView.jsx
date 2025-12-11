// src/components/MapView.jsx
import React, { useEffect, useState, lazy, Suspense } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default Leaflet icon paths (remove extra spaces!)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const pawIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/1076/1076928.png",
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35],
});

// Recenter map when user location changes
const RecenterMap = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.setView(position, 13);
    }
  }, [position, map]);
  return null;
};

// Main Map Component
const MapView = ({ vets = [] }) => {
  const defaultPosition = [30.0444, 31.2357]; // Cairo, Egypt
  const [userLocation, setUserLocation] = useState(null);
  const [localVets, setLocalVets] = useState([]);

  // Use a real Jawg Maps token (get one at https://www.jawg.io/lab/)
  const JAWG_ACCESS_TOKEN = "x18KVyPZaeZRp42MM7PWJMHrgjvMBP8aNayfdWVm0VvR6K4jRUntLokpSpTCyEvz";

  // Fetch nearby vets from Overpass API (only if no vets prop provided)
  const fetchNearbyVets = async (lat, lng) => {
    const query = `
      [out:json][timeout:25];
      node["amenity"="veterinary"](around:25000,${lat},${lng});
      out body;
    `;

    // ✅ FIXED: No space after "data="
    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Overpass API error: ${res.status}`);
      const data = await res.json();
      return data.elements.map((el) => ({
        id: el.id,
        name: el.tags.name || "Vet Clinic",
        address: el.tags["addr:street"] || "No address",
        lat: el.lat,
        lng: el.lon,
      }));
    } catch (err) {
      console.error("Failed to fetch nearby vets:", err);
      return [];
    }
  };

  useEffect(() => {
    // If vets are passed as prop (from backend), use them
    if (vets && vets.length > 0) {
      setLocalVets(vets);
      return;
    }

    // Otherwise, try geolocation + Overpass
    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const coords = [position.coords.latitude, position.coords.longitude];
          setUserLocation(coords);
          const nearby = await fetchNearbyVets(coords[0], coords[1]);
          setLocalVets(nearby);
        },
        (err) => {
          console.warn("Geolocation denied or unavailable:", err);
          // Fallback: keep default position and empty vets
        }
      );
    }
  }, [vets]);

  // Use user location if available, otherwise default
  const mapCenter = userLocation || defaultPosition;

  return (
    <MapContainer
      center={mapCenter}
      zoom={userLocation ? 13 : 11}
      style={{ height: "100%", width: "100%", borderRadius: "16px" }}
    >
      {/* ✅ FIXED: No space before {z} */}
      <TileLayer
        url={`https://tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=${JAWG_ACCESS_TOKEN}`}
        attribution='&copy; <a href="https://jawg.io">Jawg Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        minZoom={0}
        maxZoom={22}
      />

      {userLocation && <RecenterMap position={userLocation} />}

      {/* Show backend vets OR Overpass vets */}
      {localVets.map((vet) => (
        <Marker
          key={vet.id || vet._id}
          position={[vet.lat, vet.lng]}
          icon={pawIcon}
        >
          <Popup>
            <div style={{ textAlign: "center", color: "#7472C6" }}>
              <strong>{vet.name}</strong>
              <br />
              <span>{vet.address}</span>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;