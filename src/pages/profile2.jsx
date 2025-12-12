// src/components/Profile.jsx
import React from 'react';
import { usePet } from '../Components/petContext';
import PetHeader from './../Components/PetHeader';
import PetCards from './../Components/PetCards';

function profile2() {
  
  return (
    <div className="profile">
      <PetHeader />
      <PetCards />
    </div>
  );
}

export default profile2;