import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage";
import EmployeeManagementPage from "./components/EmployeeManagementPage";
import DriverManagementPage from "./components/DriverManagementPage";
import TripManagementPage from "./components/TripManagementPage";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/employeeManagement" element={<EmployeeManagementPage/>} />
          <Route path="/driverManagement" element={<DriverManagementPage/>} />
          <Route path="/tripManagement" element={<TripManagementPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
