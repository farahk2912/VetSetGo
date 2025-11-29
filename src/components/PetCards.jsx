import React from "react";
import "./PetCards.css";

export default function PetCards() {
  const cards = [
    {
      icon: "bi-cake2",
      smalltext: "Age",
      bigtext: "3 years !",
      bg: "#C9A6FF"
    },
    {
      icon: "bi-person",
      smalltext: "Gender",
      bigtext: "Female",
      bg: "#D9A6FF"
    },

    {
      icon: "bi-brush",
      smalltext: "Breed",
      bigtext: "Golden Retriever",
      bg: "#F5A6CF"
    }
  ];

  return (
    <div className="container py-4 d-flex justify-content-evenly gap-3 flex-wrap ">
      {cards.map((card,i) => (
        <div key={i} className="card shadow-xxl">
          <div
            className="icon-circle "
            style={{ backgroundColor: card.bg }}
          >
            <i className={`bi ${card.icon} icon-size`}></i>
          </div>

          <p className="smallertext">{card.smalltext}</p>
          <p className="biggertext">{card.bigtext}</p>
        </div>
      ))}
    </div>
  );
}
