import React from "react";
import { Link } from "react-router-dom";
import Chat from "../assets/chat.png";
import EasyRouteImg from "../assets/easy-route.png";

const EasyRoute = () => {
  return (
    <div
      className="w-[80%] m-auto lg:p-[9rem] sm:p-[2rem] mb-[5rem] lg:flex"
      style={{
        background: ` url(${EasyRouteImg})`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      <div className="text-center">
        <h3 className="text-[#0F1C2D] text-[33.6px]">TAKE THE EASY ROUTE</h3>
        <p className="my-[4rem]">
          A collection of customer reviews, guides and insights guaranteed to
          inspire your next move and to achieve maximum ease on all things
          logistics.
        </p>
        <Link to="/select-sign-up">
          <div className="text-center">
            <a href="" className="bg-[#FC7B30] py-2 rounded px-5 text-white">
              Register
            </a>
          </div>
       </Link> 
      </div>
      <div>
      <img
          className="lg:w-[100%] h-[429.45px] sm:w-[100%]"
          src={Chat}
          alt="rentalIcon"
        />
      </div>
    </div>
  );
};

export default EasyRoute;
