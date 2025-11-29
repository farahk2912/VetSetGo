import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const pawIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/1076/1076928.png",
    iconSize: [35, 35],
    iconAnchor: [17, 35],
    popupAnchor: [0, -35],
});

const RecenterMap = ({ position }) => {
    const map = useMap();
    useEffect(() => {
        if (position) map.setView(position, 13);
    }, [position, map]);
    return null;
};

const MapView = () => {
    const defaultPosition = [30.0444, 31.2357];
    const [userLocation, setUserLocation] = useState(null);
    const [vets, setVets] = useState([]);

    const JAWG_ACCESS_TOKEN =
        "x18KVyPZaeZRp42MM7PWJMHrgjvMBP8aNayfdWVm0VvR6K4jRUntLokpSpTCyEvz";

    const fetchNearbyVets = async (lat, lng) => {
        const query = `
      [out:json][timeout:25];
      node
        ["amenity"="veterinary"]
        (around:250000,${lat},${lng});
      out body;
    `;
        const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(
            query
        )}`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            return data.elements.map((el) => ({
                id: el.id,
                name: el.tags.name || "Vet Clinic",
                address: el.tags["addr:street"] || "",
                lat: el.lat,
                lng: el.lon,
            }));
        } catch (err) {
            console.error("Overpass fetch error:", err);
            return [];
        }
    };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const coords = [
                        position.coords.latitude,
                        position.coords.longitude,
                    ];
                    setUserLocation(coords);

                    const nearbyVets = await fetchNearbyVets(
                        coords[0],
                        coords[1]
                    );
                    setVets(nearbyVets);
                },
                (err) => console.error("Geolocation error:", err)
            );
        }
    }, []);

    return (
        <MapContainer
            center={userLocation || defaultPosition}
            zoom={13}
            style={{
                height: "100%",
                width: "100%",
                borderRadius: "16px",
                backgroundColor: "#E5E1EE",
            }}
        >
            <TileLayer
                url={`https://tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=${JAWG_ACCESS_TOKEN}`}
                attribution='<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                minZoom={0}
                maxZoom={22}
            />
            {userLocation && <RecenterMap position={userLocation} />}
            {vets.map((vet) => (
                <Marker
                    key={vet.id}
                    position={[vet.lat, vet.lng]}
                    icon={pawIcon}
                >
                    <Popup>
                        <div style={{ textAlign: "center", color: "#7472C6" }}>
                            <strong style={{ color: "#7472C6" }}>
                                {vet.name}
                            </strong>
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
