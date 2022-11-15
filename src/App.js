import "./App.css";
import React from "react";
import NavbarMenu from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import "./Responsive/Responsive.css";
function App() {
  return (
    <>
      <NavbarMenu />
      <Routes>
        <Route path="" element={<Header />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
