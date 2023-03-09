import React from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';
import { BiSearch } from "react-icons/bi";


function Navbar() {

  const navigate = useNavigate();

  const navigateToLogin = () => {
    // 👇️ navigate to /login
    navigate("/login");
  };

  return (

    <div className="sticky top-0 bg-[#FFFFFF]">
      <div className="w-[1171px] h-[56px] mt-[31px] mb-[31px] ml-[168px] mr-[168px] flex">
        <img className="w-[214px] h-[48px] mr-[117px]" src={logo} alt="logo" />
        <div className="flex w-[504px] h-[25px] justify-between mr-[117px] mt-[16px] mb-[16px]">
          <Link to="/">
            <p className="text-[21px] leading-[25px] font-bold font-lato text-[#000000] ">
              Home
            </p>
          </Link>
          <Link to="/">
            <p className="text-[21px] leading-[25px] font-bold font-lato text-[#000000] ">
              About
            </p>
          </Link>
          <Link to="/">
            <p className="text-[21px] leading-[25px] font-bold font-lato text-[#000000] ">
              Contact us
            </p>
          </Link>
          <Link to="/">
            <p className="text-[21px] leading-[25px] font-bold font-lato text-[#000000] ">
              Our Services
            </p>
          </Link>
        </div>
        <Link to="/login">
          <div className="flex w-[222px] h-[58px] justify-between items-center">
            <BiSearch size={25} />
            <button onclick={navigateToLogin} className="w-[153px] h-[58px] bg-[#FC7B30] font-lato font-normal text-[21px] leading-[25px] text-[#FFFFFF]">
              Login
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
