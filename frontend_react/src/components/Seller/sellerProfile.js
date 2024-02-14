import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SellerProfile = () => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchSellerDetails = async () => {
      try {
        const response = await axios.get('/api/seller/details');
        setDetails(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSellerDetails();
  }, []);

  return (
    <div>
      <h2>Seller Profile</h2>
      {details && (
        <div>
          <h3>{details.name}</h3>
          <p>Email: {details.email}</p>
          <p>Mobile: {details.mobile}</p>
          {/* Display other details */}
        </div>
      )}
    </div>
  );
};

export default SellerProfile;
