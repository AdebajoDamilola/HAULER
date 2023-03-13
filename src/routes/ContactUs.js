import React from "react";
import Navbar from "../components/Navbar";
import Truck2 from "../assets/Truck2.png";

function ContactUs() {
  return (
    <div>
      <Navbar />
      <div
        className="relative lg:w-screen md:w-screen sm:w-screen h-[651px] flex
      flex-col justify-center items-center"
        style={{
          background: `linear-gradient(45deg, rgb(0 0 0 / 55%), transparent), url(${Truck2})`,
          backgroundPosition: "bottom",
        }}
      >
        <div className="text-center">
          <h1 className="w-full -z-10 mb-8 font-lato font-extrabold text-[45px] lg:text-[79px] text-center lg:leading-[95px] leading-[95px] text-[#FFFFFF]">
            Coming Soon <br />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
