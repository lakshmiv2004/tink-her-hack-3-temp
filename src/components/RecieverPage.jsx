import React, { useState, useEffect } from "react";

const ReceiverPage = () => {
  const [foodDetails, setFoodDetails] = useState({});

  const fetchFoodDetails = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/food");
      const data = await response.json();
      setFoodDetails(data[0]);
      localStorage.setItem("foodID", data[0]._id);
      return data;
    } catch (error) {
      console.error("Error fetching food details:", error);
      return [];
    }
  };

  useEffect(() => {
    fetchFoodDetails();
  }, []);

  return (
    <div style={styles.container}>
      <h2>Welcome Receiver!</h2>
      <p>Here is where you can see the food donations available for you.</p>
      <h3>Food Available for Donation</h3>
      {foodDetails ? (
        <div style={styles.foodDetails}>
          <p><strong>Food Type:</strong> {foodDetails.foodType}</p>
          <p><strong>Quantity:</strong> {foodDetails.quantity}</p>
          <p><strong>Expiration Date:</strong> {foodDetails.expirationDate}</p>
        </div>
      ) : (
        <p>No food details are available at the moment.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#FFB6C1", // Light rose background color
    color: "#003366", // Dark blue text color
    fontFamily: "Cursive", // Cursive font style
  },
  foodDetails: {
    marginTop: "20px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    display: "inline-block",
    textAlign: "left",
  },
};

export default ReceiverPage;
