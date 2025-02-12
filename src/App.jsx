
import './App.css'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import About from './About'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <>
     
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App
