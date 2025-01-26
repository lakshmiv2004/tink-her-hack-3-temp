import React, { useState, useContext } from "react";
import { FoodContext } from "./FoodContext.jsx";
import { useNavigate } from "react-router-dom";

const FoodDetailsPage = () => {
  const { setFoodDetails } = useContext(FoodContext); // Access context
  const [foodData, setFoodData] = useState({
    foodType: "",
    quantity: "",
    expirationDate: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(foodData)
    // setFoodDetails(foodData); // Save details to context

    try {
        const response = await fetch("http://localhost:5000/api/food", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(foodData)
        })
        console.log(response)

        if(!response.ok){
            throw new Error(response.statusText)
            
        }
        navigate("/address");

    } catch(error){
        console.error(error)
    }
    // Navigate to Receiver page
  };

  return (
    <div style={styles.container}>
      <h2>Food Donation Details</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="foodType">Food Type:</label>
          <input
            type="text"
            id="foodType"
            name="foodType"
            value={foodData.foodType}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={foodData.quantity}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="date"
            id="expirationDate"
            name="expirationDate"
            value={foodData.expirationDate}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.submitButton}>
          Submit Food Details
        </button>
      </form>
    </div>
  );
};

const styles = { /* same styling as before */ };

export default FoodDetailsPage;
