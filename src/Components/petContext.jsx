// src/context/PetContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { petAPI } from '../services/api';

const PetContext = createContext();

export const PetProvider = ({ children }) => {
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPet = async () => {
      try {
        if (localStorage.getItem('token')) {
          const pets = await petAPI.getPets();
          setPet(pets.length > 0 ? pets[0] : null);
        }
      } catch (err) {
        console.error('Failed to load pet:', err);
      } finally {
        setLoading(false);
      }
    };
    loadPet();
  }, []);

  const savePet = async (petData) => {
    const newPet = await petAPI.savePet(petData);
    const pets = await petAPI.getPets();
    setPet(pets[0]);
    return newPet;
  };

  // ✅ Expose setPet so PetHeader can update the pet directly
  return (
    <PetContext.Provider value={{ pet, setPet, savePet, loading }}>
      {children}
    </PetContext.Provider>
  );
};

export const usePet = () => {
  const context = useContext(PetContext);
  if (!context) {
    throw new Error('usePet must be used within a PetProvider');
  }
  return context;
};