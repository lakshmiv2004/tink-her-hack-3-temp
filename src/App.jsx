import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css'; // Import any styles
import RoleSelection from './components/hello';
import DonorPage from './components/DonorPage';
import ReceiverPage from './components/RecieverPage';
import FoodDetailsPage from './components/food';
import PickupDetailsPage from './components/address';
import ReceiverArrivalPage from './components/details';
import FoodDonationConfirmationPage from './components/confirmation';
import  {FoodProvider}  from "./components/FoodContext";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoleSelection />} /> {/* Role Selection Page */}
        <Route path="/donor" element={<DonorPage />} /> {/* Donor Page */}
        <Route path="/receiver" element={<ReceiverPage />} /> {/* Receiver Page */}
        <Route path="/food" element={<FoodDetailsPage />} /> {/* Food Details Page */}
        <Route path="/address" element={<PickupDetailsPage />} /> {/* Pickup Details Page */}
        <Route path="/details" element={<ReceiverArrivalPage />} /> {/* Receiver Details Page */}
        <Route path="/confirmdonor" element={<FoodDonationConfirmationPage />} /> {/* confirmation of donor */}
        <Route path="/fooddisplay" element={<FoodProvider />} /> {/* display of food */}
      </Routes>
    </Router>
  );
}

export default App;
