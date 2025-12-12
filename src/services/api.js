// services/api.js

// Get API base URL — use VITE_API_URL in production, localhost in dev
const API_URL = "https://vetsetgoback-production-4383.up.railway.app" || 'http://localhost:5000';
// const API_URL =  'http://localhost:5000';

// Helper to get auth token
const getAuthToken = () => {
  return localStorage.getItem('token');
};

// Helper to make authenticated requests
const authHeaders = () => {
  const token = getAuthToken();
  return token ? { 'x-auth-token': token } : {};
};

// ======================
// AUTH API (existing)
// ======================
export const authAPI = {
  // Register new user
  register: async (name, email, password) => {
    try {
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || 'Registration failed');
      }

      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  // Login user
  login: async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || 'Login failed');
      }

      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  // Logout
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  // Get current user
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },

  // Get token
  getToken: () => {
    return localStorage.getItem('token');
  },
};

// ======================
// PET API (new)
// ======================
export const petAPI = {
  // Save a new pet
  savePet: async (petData) => {
    const token = getAuthToken();
    if (!token) throw new Error('You must be logged in to add a pet');

    const response = await fetch(`${API_URL}/api/pets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeaders(),
      },
      body: JSON.stringify(petData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.msg || 'Failed to save pet');
    }

    return response.json();
  },

  // Get all pets
  getPets: async () => {
    const token = getAuthToken();
    if (!token) return [];

    const response = await fetch(`${API_URL}/api/pets`, {
      headers: { ...authHeaders() },
    });

    // Handle HTTP status
    if (!response.ok) {
      throw new Error('Failed to fetch pets');
    }

    // 204 No Content → return empty array
    if (response.status === 204) return [];

    // 304 Not Modified → return empty array (or use cached logic)
    if (response.status === 304) return [];

    // Normal 200 response
    return response.json();
  },
};