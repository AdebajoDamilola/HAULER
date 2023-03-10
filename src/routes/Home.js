import React from "react";
import Benefits from "../components/Benefits.js";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import Rental from "../components/Rental.js";


function Home() {
  return (
    <>
      <Navbar />
      <Rental />
      <Footer />
    </>
  );
}

export default Home;
