// src/context/PetContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { petAPI } from '../services/api';

const PetContext = createContext();

export const PetProvider = ({ children }) => {
  const [pet, setPet] = useState(null); // latest pet only
  const [loading, setLoading] = useState(true);

  // Load latest pet on mount
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
    // Refresh and set latest pet
    const pets = await petAPI.getPets();
    setPet(pets[0]);
    return newPet;
  };

  return (
    <PetContext.Provider value={{ pet, savePet, loading }}>
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