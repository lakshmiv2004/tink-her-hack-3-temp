import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function RoleSelection() {
  const navigate = useNavigate(); // For navigating to different pages

  // Function to navigate to Donor page
  const handleDonorClick = () => {
    navigate('/donor'); // Correct way to navigate in React Router v6
  };

  // Function to navigate to Receiver page
  const handleReceiverClick = () => {
    navigate('/receiver'); // Correct way to navigate in React Router v6
  };

  return (
    <div style={styles.container}>
      {/* Logo */}
      <img src="C:/Users/vinod/OneDrive/Pictures/Screenshots/Screenshot 2025-01-26 035745.png" alt="Food Donation Logo" style={styles.logo} />

      <h1 style={styles.heading}>Welcome to the Food Donation Platform</h1>
      <p style={styles.paragraph}>Are you a Donor or a Receiver?</p>

      <div style={styles.buttonsContainer}>
        <button onClick={handleDonorClick} style={styles.button}>
          Donor
        </button>
        <button onClick={handleReceiverClick} style={styles.button}>
          Receiver
        </button>
      </div>
    </div>
  );
}

// Updated styling for the component
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    marginTop: '50px',
    backgroundColor: '#FFB6C1', // Grey background for the entire page
    minHeight: '100vh', // Full page height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Caslon', serif", // Caslon font
  },
  logo: {
    width: '150px', // Set the desired width of the logo
    height: 'auto', // Maintain aspect ratio
    marginBottom: '20px', // Space below the logo
  },
  heading: {
    fontSize: '2.5rem', // Increased font size
    fontWeight: 'bold',
    color: '#333', // Dark grey for the header text
    textShadow: '2px 2px 4px #000000', // Adding shadow to the text
    fontFamily: "'Caslon', serif", // Caslon font
  },
  paragraph: {
    fontSize: '1.5rem', // Larger font size for the paragraph
    color: '#FF0000', // Medium grey color for the paragraph text
    marginTop: '10px',
    fontFamily: "'Caslon', serif", // Caslon font
  },
  buttonsContainer: {
    marginTop: '30px',
  },
  button: {
    margin: '10px',
    padding: '15px 30px',
    fontSize: '18px', // Slightly larger font for buttons
    cursor: 'pointer',
    backgroundColor: '#4CAF50', // Green background for buttons
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Adding a subtle shadow to buttons
    fontFamily: "'Caslon', serif", // Caslon font
  },
};

export default RoleSelection;
