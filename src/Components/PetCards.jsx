import React from "react";
import "./PetCards.css";
import { usePet } from "./petContext";

export default function PetCards() {
  const { pet } = usePet();

  const cards = [
    {
      icon: "bi-cake2",
      smalltext: "Age",
      bigtext: pet.age,
      bg: "#C9A6FF"
    },
    {
      icon: "bi-person",
      smalltext: "Gender",
      bigtext: pet.gender,
      bg: "#D9A6FF"
    },
    {
      icon: "bi-brush",
      smalltext: "Breed",
      bigtext: pet.breed,
      bg: "#F5A6CF"
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
