import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      navigate('/signup');
    } else if (storedUser) {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    navigate('/signup');
  };

  return (
    <div className="containers">
      {user ? (
        <>
          <h1 className='head'>Profile</h1>
          <p className="pro">Full Name: {user.fullName}</p>
          <p className="pro">Email: {user.email}</p>
          <p className="pro">Password:{user.password}</p>
          <button className='btn' onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;