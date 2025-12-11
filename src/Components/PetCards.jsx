// src/components/PetCards.jsx
import React from 'react';
import './PetCards.css';
import { usePet } from './petContext';

export default function PetCards() {
  const { pet } = usePet();

  // Safe defaults
  const age = pet?.age != null ? pet.age : 'N/A';
  const gender = pet?.gender === 'male' ? 'Male' : pet?.gender === 'female' ? 'Female' : 'N/A';
  const breed = pet?.breed || pet?.type || 'N/A';

  const cards = [
    {
      icon: 'bi-cake2',
      smalltext: 'Age',
      bigtext: age,
      bg: '#C9A6FF'
    },
    {
      icon: 'bi-person',
      smalltext: 'Gender',
      bigtext: gender,
      bg: '#D9A6FF'
    },
    {
      icon: 'bi-brush',
      smalltext: 'Breed',
      bigtext: breed,
      bg: '#f295c5ff'
    }
  ];

  return (
    <div className="container py-4 d-flex justify-content-evenly gap-3 flex-wrap">
      {cards.map((card, i) => (
        <div key={i} className="card shadow-xxl">
          <div className="icon-circle" style={{ backgroundColor: card.bg }}>
            <i className={`bi ${card.icon} icon-size`}></i>
          </div>
          <p className="smallertext">{card.smalltext}</p>
          <p className="biggertext">{card.bigtext}</p>
        </div>
      ))}
    </div>
  );
}