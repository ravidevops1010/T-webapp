import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [userType, setUserType] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send registration request to backend
      const response = await axios.post('/api/register', { email, password, mobile, userType });
      // Handle successful registration, e.g., redirect to login page
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="text" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="">Select User Type</option>
          <option value="normal">Normal</option>
          <option value="seller">Seller</option>
        </select>
        <button type="submit">Register</button>
      </form>
      <Link to="/">Login</Link>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Register;
