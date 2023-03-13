import React from "react";
import App from "../assets/app.png";
import { Link } from "react-router-dom";

const HaulerApp = () => {
  return (
    <div className="lg:flex bg-[#3E74BA] w-[80%] m-auto lg:h-[444.15px] relative p-5 lg:p-[5rem] sm:mb-5 lg:my-[16rem] rounded-2xl">
      <div className="lg:w-[50%] sm:mb-8 text-center pr-[3rem]">
        <p className="text-[36px] text-white mb-5">
          Did you know that you can earn points when you use our site?
        </p>
        <p className="text-white">
          This is our way of rewarding you for choosing us to haul your goods.
          The more you use our services, the more you earn!
        </p>
        <Link to="/select-sign-up">
          <div className="text-center mt-8">
            <a href="/" className="bg-[#FC7B30] py-2 rounded px-5 text-white">
              Register
            </a>
          </div>
        </Link>
      </div>
      <div>
        <img
          className="lg:absolute bottom-[-7rem] m-auto  right-[5rem]"
          src={App}
          alt="rentalIcon"
        />
      </div>
    </div>
  );
};

export default HaulerApp;
