import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const PickupDetailsPage = () => {
  const [pickupTime, setPickupTime] = useState("");
  const [pickupPoint, setPickupPoint] = useState("");
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();

    // Navigate to the ConfirmDonorPage after submission
    navigate("/confirmdonor"); // Update the path to match your route for ConfirmDonorPage
  };

  return (
    <div style={styles.container}>
      <h2>Pick-Up Details</h2>
      <p>Please provide the pick-up time and location for the food.</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="pickupTime">Expected Pick-Up Time:</label>
          <input
            type="time"
            id="pickupTime"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="pickupPoint">Pick-Up Point:</label>
          <input
            type="text"
            id="pickupPoint"
            value={pickupPoint}
            onChange={(e) => setPickupPoint(e.target.value)}
            placeholder="Enter the pick-up address"
            required
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.submitButton}>
          Confirm
        </button>
      </form>
    </div>
  );
};

// Basic styling with cursive font, dark blue text, and light rose background
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    marginTop: "50px",
    backgroundColor: "#FFB6C1", // Light rose background color
    color: "#003366", // Dark blue text color
    fontFamily: "Cursive", // Cursive font style
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  formGroup: {
    width: "300px",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginTop: "5px",
  },
  submitButton: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
};

export default PickupDetailsPage;
