import React from "react";
import Benefits from "../components/Benefits.js";
import EasyRoute from "../components/EasyRoute.js";
import Footer from "../components/Footer.js";
import HaulerApp from "../components/HaulerApp.js";
import HomeServices from "../components/HomeServices.js";
import Navbar from "../components/Navbar.js";
import Rental from "../components/Rental.js";



function Home() {
  return (
    <>
      <Navbar />
      <Rental />
      <HomeServices />
      <EasyRoute />
      <HaulerApp />
      <Footer />

    </>
  );
}

export default Home;
