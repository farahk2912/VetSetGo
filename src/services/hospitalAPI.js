// src/services/hospitalAPI.js
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';;
// const API_URL =  'http://localhost:5000';

export const hospitalAPI = {
  // Get all hospitals (with optional search/specialty)
  getHospitals: async (params = {}) => {
    const query = new URLSearchParams(params).toString();
    const url = query ? `${API_URL}/api/hospitals?${query}` : `${API_URL}/api/hospitals`;
    
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch hospitals');
    return response.json();
  },

  // Get doctors for a hospital
  getDoctorsByHospital: async (hospitalId) => {
    const response = await fetch(`${API_URL}/api/hospitals/${hospitalId}/doctors`);
    if (!response.ok) throw new Error('Failed to fetch doctors');
    return response.json();
  },

  // Get available time slots for a doctor
  getAvailableSlots: async (doctorId, date) => {
    const response = await fetch(
      `${API_URL}/api/appointments/doctor/${doctorId}/available-slots?date=${date}`
    );
    if (!response.ok) throw new Error('Failed to fetch time slots');
    return response.json();
  },

  // Create appointment
  bookAppointment: async (appointmentData, token) => {
    const response = await fetch(`${API_URL}/api/appointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
      },
      body: JSON.stringify(appointmentData)
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.msg || 'Booking failed');
    }
    return response.json();
  }
};