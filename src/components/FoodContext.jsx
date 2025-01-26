import React, { createContext, useState } from "react";

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [foodDetails, setFoodDetails] = useState(null); // State to hold food details

  return (
    <FoodContext.Provider value={{ foodDetails, setFoodDetails }}>
      {children}
    </FoodContext.Provider>
  );
};

