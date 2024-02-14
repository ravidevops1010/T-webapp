import React, { useState } from 'react';
import axios from 'axios';

const SellerUpload = () => {
  const [details, setDetails] = useState({});
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('photo', photo);
      formData.append('details', JSON.stringify(details));
      const response = await axios.post('/api/seller/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // Handle successful upload
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleInputChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  return (
    <div>
      <h2>Seller Upload</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" onChange={handleInputChange} />
        <input type="text" placeholder="Description" name="description" onChange={handleInputChange} />
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SellerUpload;
