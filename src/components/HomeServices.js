import React from "react";
import { Link } from "react-router-dom";
import Lorry from "../assets/lorry.png";

const HomeServices = () => {
  return (
    <div className="lg:flex bg-[#DBE0E8] mb-[5rem] pt-[5rem] pr-[5rem]">
      <div>
        <img className=" w-[100%]" src={Lorry} alt="rentalIcon" />
      </div>
      <div>
        <div className="flex gap-8 items-center mb-[4rem]">
          <div className="bg-[#FC7B30] w-[60px] h-[60px] flex text-[24px] p-5 rounded-full items-center justify-center text-white">
            01
          </div>
          <div>
            <h3 className="text-[#254670] text-[33.6px] mb-3">Earn money</h3>
            <p>
              Earn your own money while driving, Be your own boss. Drive with
              Hauler and get extra income.
            </p>
          </div>
        </div>
        <div className="flex gap-8 items-center mb-[4rem]">
          <div className="bg-[#FC7B30] w-[60px] h-[60px] flex text-[24px] p-5 rounded-full items-center justify-center text-white">
            02
          </div>
          <div>
            <h3 className="text-[#254670] text-[33.6px] mb-3">Drive anytime</h3>
            <p>
              Earn your own money while driving, Be your own boss. Drive with
              Hauler and get extra income.
            </p>
          </div>
        </div>
        <div className="flex gap-8 items-center mb-[4rem]">
          <div className="bg-[#FC7B30] w-[60px] h-[60px] flex text-[24px] p-5 rounded-full items-center justify-center text-white">
            03
          </div>
          <div>
            <h3 className="text-[#254670] text-[33.6px] mb-3">
              No monthly fees
            </h3>
            <p>
              Earn your own money while driving, Be your own boss. Drive with
              Hauler and get extra income.
            </p>
          </div>
        </div>
        <div className="flex gap-8 items-center mb-[4rem]">
          <div className="bg-[#FC7B30] w-[60px] h-[60px] flex text-[24px] p-5 rounded-full items-center justify-center text-white">
            04
          </div>
          <div>
            <h3 className="text-[#254670] text-[33.6px] mb-3">Earn rewards</h3>
            <p>
              Earn your own money while driving, Be your own boss. Drive with
              Hauler and get extra income.
            </p>
          </div>
        </div>
        <Link to="/select-sign-up">
          <div className="text-center">
            <a href="/" className="bg-[#FC7B30] py-2 rounded px-5 text-white">
              Register
            </a>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeServices;
