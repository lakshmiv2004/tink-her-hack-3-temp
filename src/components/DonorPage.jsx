import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const DonorPage = () => {
  // State to manage form selection
  const [formType, setFormType] = useState("signUp");

  // State to handle form input values
  const [formData, setFormData] = useState({
    name: "",
    authorityName: "",
    contactNumber: "",
    address: "",
    email: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log form data to console for testing
    // Navigate to FoodDetailsPage after submission
    navigate("/food"); // Update with the correct route for FoodDetailsPage
  };

  // Handling form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to toggle between Sign up and Sign in
  const toggleFormType = () => {
    setFormType(formType === "signUp" ? "signIn" : "signUp");
  };

  return (
    <div style={styles.container}>
      <h2>Welcome Donor!</h2>
      <p>This is where donors can donate food.</p>

      <div style={styles.formContainer}>
        <h3>{formType === "signUp" ? "Sign Up" : "Sign In"} as a Donor</h3>

        <form onSubmit={handleSubmit} style={styles.form}>
          {formType === "signUp" && (
            <>
              <div style={styles.formGroup}>
                <label htmlFor="name">Name of Donor:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="authorityName">Authority/Institution Name:</label>
                <input
                  type="text"
                  id="authorityName"
                  name="authorityName"
                  value={formData.authorityName}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="contactNumber">Contact Number:</label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
            </>
          )}

          <div style={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.submitButton}>
            {formType === "signUp" ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <button onClick={toggleFormType} style={styles.toggleButton}>
          {formType === "signUp"
            ? "Already a donor? Sign In"
            : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
};

// Basic styling for the component
const styles = {
  container: {
    display: "flex", // Use flexbox to center content
    justifyContent: "center", // Horizontally center
    alignItems: "center", // Vertically center
    flexDirection: "column", // Stack elements vertically
    height: "100vh", // Full screen height
    textAlign: "center",
    padding: "20px",
    marginTop: "50px",
    backgroundColor: "#FFB6C1", // Light rose background
    color: "#003366", // Dark blue text color
    fontFamily: "'Dancing Script', cursive", // Creative font
  },
  formContainer: {
    marginTop: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    width: "100%", // Full width to make the form responsive
    maxWidth: "500px", // Optional: Max width to make form more compact on larger screens
  },
  formGroup: {
    width: "100%",
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
    marginTop: "20px",
  },
  toggleButton: {
    marginTop: "10px",
    padding: "10px",
    fontSize: "14px",
    cursor: "pointer",
    backgroundColor: "#f1f1f1",
    color: "#333",
    border: "1px solid #ccc",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
};

export default DonorPage;
