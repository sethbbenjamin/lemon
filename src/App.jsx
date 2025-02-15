
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'


import { Routes, Route } from 'react-router-dom';

import { Home, About, Menu, BookingPage, Order, Login } from './pages'
import ConfirmedBooking from './components/ConfirmedBooking';


function App() {


  const [reservations, setReservations] = useState([]); 

  const addReservation = (newReservation) => {
    setReservations((reservationsList) => [...reservationsList, newReservation]); 
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

export default App
