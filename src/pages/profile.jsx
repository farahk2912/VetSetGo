// src/components/Profile.jsx
import React from 'react';
import { usePet } from '../Components/petContext';
import PetHeader from './../Components/PetHeader';
import PetCards from './../Components/PetCards';

function Profile() {
  const { pet, loading } = usePet();

  if (loading) {
    return <div className="text-center mt-5">Loading pet...</div>;
  }

  if (!pet) {
    return (
      <div className="text-center mt-5">
        <h3>No pet added yet!</h3>
        <a href="/Pet-Form" className="btn btn-primary mt-3">Add Your Pet</a>
      </div>
    );
  }

  return (
    <div className="profile">
      <PetHeader />
      <PetCards />
    </div>
  );
}

export default Profile;