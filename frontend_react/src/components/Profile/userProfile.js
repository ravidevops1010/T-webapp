import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('/api/user/profile');
        setUserDetails(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      {userDetails && (
        <div>
          <p>Email: {userDetails.email}</p>
          <p>Mobile: {userDetails.mobile}</p>
          {/* Display other user details */}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
