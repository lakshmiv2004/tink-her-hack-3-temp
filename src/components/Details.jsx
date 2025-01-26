import React, { useState } from "react";

const ReceiverArrivalPage = () => {
  // Placeholder receiver ID (you can replace this with dynamic data later)
  const [receiverId] = useState("RCV12345");

  return (
    <div style={styles.container}>
      <h2>Receiver Details</h2>
      <p>
        Receiver ID: <strong>{receiverId}</strong>
      </p>
      <p>The receiver will arrive on time to collect the donation.</p>
    </div>
  );
};

// Basic styling
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    marginTop: "50px",
    backgroundColor: "#FFB6C1", // Light rose background color
    color: "#003366", // Dark blue text color
    fontFamily: "Cursive", // Cursive font style
  },
};

export default ReceiverArrivalPage;
