import { createContext, useContext, useState } from "react";

const PetContext = createContext();

export const PetProvider = ({ children }) => {
  const [pet, setPet] = useState({
    name: "Luna",
    breed: "Golden Retriever",
    age: "3 years",
    gender: "Female",
    img: "/images/max.png",
  });

  return (
    <PetContext.Provider value={{ pet, setPet }}>
      {children}
    </PetContext.Provider>
  );
};

export const usePet = () => useContext(PetContext);
