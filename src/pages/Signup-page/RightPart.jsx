import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { MdFacebook } from 'react-icons/md';
import { authAPI } from '../../services/api';

const Right = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const data = await authAPI.register(
        formData.name,
        formData.email,
        formData.password
      );

      setSuccess('Account created successfully! Redirecting...');
 
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);

    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="w-100 w-md-50 d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: '5em 0.5em 0.5em 5em',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <h2>Create Your Account</h2>

      {error && (
        <div
          className="alert alert-danger mt-3"
          style={{ width: '58%', textAlign: 'center' }}
        >
          {error}
        </div>
      )}

      {success && (
        <div
          className="alert alert-success mt-3"
          style={{ width: '58%', textAlign: 'center' }}
        >
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="w-100 d-flex flex-column align-items-center">
        <input
          className="rounded-4 mt-4 mb-2 p-2"
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          disabled={loading}
          style={{ outline: 'none', border: 'none', width: '58%' }}
        />

        <input
          className="rounded-4 p-2 mb-2"
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          disabled={loading}
          style={{ outline: 'none', border: 'none', width: '58%' }}
        />

        <input
          className="rounded-4 p-2 mb-3"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          disabled={loading}
          style={{ outline: 'none', border: 'none', width: '58%' }}
        />

        <div className="d-flex flex-column flex-md-row w-100 justify-content-center align-items-center">
          <button
            type="button"
            className="me-md-3 mb-3 mb-md-0 p-2 rounded-4 text-body-secondary fw-bold"
            disabled={loading}
            style={{
              outline: 'none',
              border: 'none',
              width: '100%',
              maxWidth: '12em',
              backgroundColor: 'white',
            }}
          >
            <FcGoogle className="fs-3" /> Google
          </button>

          <button
            type="button"
            className="rounded-4 p-2 text-white fw-bold"
            disabled={loading}
            style={{
              outline: 'none',
              border: 'none',
              width: '100%',
              maxWidth: '12em',
              backgroundColor: '#4267B2',
            }}
          >
            <MdFacebook className="fs-3" /> Facebook
          </button>
        </div>

        <div className="d-flex gap-2 mt-4">
          <p className="fs-5 text-body-secondary">Already have an account?</p>
          <a
            href="/login"
            className="rounded-3 fs-5 fw-bold"
            style={{
              color: '#7544A6',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Log In
          </a>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="p-2 text-light rounded-4 fs-5 text"
          style={{
            backgroundColor: loading ? '#9966CC' : '#7544A6',
            outline: 'none',
            border: 'none',
            width: '45%',
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
        >
          {loading ? 'Creating Account...' : 'Join Us'}
        </button>
      </form>

      <style>
        {`
          @media (max-width: 767px) {
            div.w-100.w-md-50 {
              width: 95% !important;
              max-width: 95%;
              margin: 0 20px;
              border-radius: 2em !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Right;
