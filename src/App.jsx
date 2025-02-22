import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import { Home, About, Menu, BookingPage, Order, Login } from './pages';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  // Load reservations from localStorage
  const [reservations, setReservations] = useState(() => {
    const storedReservations = localStorage.getItem("reservations");
    return storedReservations ? JSON.parse(storedReservations).map(res => ({
      ...res,
      date: new Date(res.date) 
    })) : [];
  });

  // Save reservations to localStorage 
  useEffect(() => {
    localStorage.setItem("reservations", JSON.stringify(reservations));
  }, [reservations]);


  //DEBUG: Clear reservations on startup
  useEffect(() => {
    localStorage.removeItem("reservations"); // Remove stored reservations on startup
  }, []);




  const addReservation = (newReservation) => {
    setReservations((prev) => [...prev, newReservation]);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/bookingpage" element={<BookingPage addReservation={addReservation} reservations={reservations} />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
