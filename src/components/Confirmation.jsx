import React, { useState } from "react";

const FoodDonationConfirmationPage = () => {
  const [isDonated, setIsDonated] = useState(false);

  const handleCheckboxChange = () => {
    setIsDonated(!isDonated);
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    deleteFood();
    if (isDonated) {
      alert("Thank you for confirming .the food has been successfully donated!");
    } else {
      alert("Please confirm the donation before submitting.");
    }
  };
    // Function to delete food by ID
    const deleteFood = async () => {
      const foodId = localStorage.getItem("foodID"); // Get the food ID from localStorage
  
      if (!foodId) {
        alert("No food ID found in local storage");
        return;
      }
  
      try {
        const response = await fetch(`http://localhost:5000/api/food/${foodId}`, {
            method: "DELETE"
        });
        alert("Deleted successfully"); // Show success message
        localStorage.removeItem("foodID"); // Clear foodId from localStorage
      } catch (error) {
        console.error("Error deleting food:", error);
        alert(error.response?.data?.error || "Failed to delete food");
      }
    };


  return (
    <div style={styles.container}>
      <h2>Food Donation Confirmation</h2>
      <p>Thank you for your generous donation. Please confirm the donation status below.</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.checkboxContainer}>
          <label htmlFor="donationCheckbox" style={styles.label}>
            <input
              type="checkbox"
              id="donationCheckbox"
              checked={isDonated}
              onChange={handleCheckboxChange}
              style={styles.checkbox}
            />
            I confirm that the food has been successfully donated.
          </label>
        </div>

        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

// Styling
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    marginTop: "50px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    marginTop: "30px",
  },
  checkboxContainer: {
    textAlign: "left",
  },
  label: {
    fontSize: "16px",
  },
  checkbox: {
    marginRight: "10px",
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

export default FoodDonationConfirmationPage;
