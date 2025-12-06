// LeftPart.jsx - Updated with backend connection

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../../services/api';

const LeftPart = () => {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  // UI state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    // Clear errors when user types
    setError('');
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await authAPI.login(formData.email, formData.password);
      
      // Optional: Handle "Remember Me" functionality
      if (formData.rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      }

      // Redirect to dashboard after successful login
      navigate('/dashboard');

    } catch (err) {
      setError(err.message || 'Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="w-50 d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderTopLeftRadius: '0.5em',
        borderBottomLeftRadius: '0.5em',
        borderTopRightRadius: '5em',
        borderBottomRightRadius: '5em',
        overflow: 'hidden',
        color: '#7544A6',
        width: '25em',
        height: '100%',
        padding: '20px',
        margin: 'auto',
      }}
    >
      <h2>Welcome Back!</h2>

      {/* Error Message */}
      {error && (
        <div
          className="alert alert-danger mt-3"
          style={{
            width: '25em',
            padding: '10px',
            fontSize: '0.9em',
            textAlign: 'center',
          }}
        >
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="w-100 d-flex flex-column align-items-center">
        <input
          className="rounded-4 p-2 mb-2 mt-4"
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          disabled={loading}
          style={{
            outline: 'none',
            border: 'none',
            width: '25em',
            opacity: loading ? 0.6 : 1,
          }}
        />

        <input
          className="rounded-4 p-2 mb-3"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          disabled={loading}
          style={{
            outline: 'none',
            border: 'none',
            width: '25em',
            opacity: loading ? 0.6 : 1,
          }}
        />

        <div
          className="d-flex gap-1"
          style={{
            width: '25em',
            alignItems: 'center',
            marginTop: '0.5em',
          }}
        >
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            disabled={loading}
            style={{
              width: '1em',
              border: '1.5px solid #7544A6',
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          />
          <label className="fs-5 mt-0 mb-0" style={{ cursor: 'pointer' }}>
            Remember Me!
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="p-2 text-light rounded-4 fs-5 text mt-3"
          style={{
            backgroundColor: loading ? '#9966CC' : '#7544A6',
            outline: 'none',
            border: 'none',
            width: '20em',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? 'Logging in...' : 'Log In'}
        </button>
      </form>

      {/* Optional: Forgot Password Link */}
      <div className="mt-3">
        <a
          href="/forgot-password"
          style={{
            color: '#7544A6',
            textDecoration: 'none',
            fontSize: '0.9em',
          }}
        >
          Forgot Password?
        </a>
      </div>

      {/* Optional: Sign Up Link */}
      <div className="d-flex gap-2 mt-2">
        <p className="fs-6 text-body-secondary mb-0">Don't have an account?</p>
        <a
          href="/signup"
          style={{
            color: '#7544A6',
            textDecoration: 'none',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default LeftPart;