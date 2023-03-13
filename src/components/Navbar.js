import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Routes, Route, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";

function Navbar() {
  const [isShown, setIsShown] = useState(false);
  const handleClickEvent = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  const navigate = useNavigate();

  const navigateToLogin = () => {
    // 👇️ navigate to /login
    navigate("/login");
  };

  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);

  return (
    <div className=" top-0 bg-[#FFFFFF] ">
      <div className=" lg:w-full  lg:pt-[31px] lg:pb-[31px] lg:justify-center lg:flex md:flex sm:flex md:justify-between sm:justify-between md:w-full md:pt-[31px] md:pb-[31px] sm:w-full sm:pt-[31px] sm:pb-[31px] md:pl-[10px] sm:pl-[10px] md:pr-[10px] sm:pr-[10px]">
        <img
          className="lg:w-[214px] lg:h-[48px]  md:w-[150px] md:h-[48px] sm:w-[150px] sm:h-[48px]"
          src={logo}
          alt="logo"
        />
        <div className=" md:hidden sm:hidden lg:flex lg:w-[504px] lg:h-[25px] lg:justify-between lg:mr-[117px] md:mr-[0px] sm:mr-[0px] lg:ml-[117px] lg:mt-[16px] lg:mb-[16px] ">
          <Link to="/">
            <p className="text-[21px] leading-[25px] font-bold font-lato text-[#000000] ">
              Home
            </p>
          </Link>
          <Link to="/about-us">
            <p className="text-[21px] leading-[25px] font-bold font-lato text-[#000000] ">
              About
            </p>
          </Link>
          <Link to="/contact-us">
            <p className="text-[21px] leading-[25px] font-bold font-lato text-[#000000] ">
              Contact us
            </p>
          </Link>
          <Link to="/our-services">
            <p className="text-[21px] leading-[25px] font-bold font-lato text-[#000000] ">
              Our Services
            </p>
          </Link>
        </div>

        
        <div className=" md:hidden sm:hidden lg:flex lg:w-[222px] md:w-[50px] sm:w-[50px] lg:h-[58px] lg:justify-between lg:items-center">
          <BiSearch size={25} />
          <Link to="/login">
            <button
              onclick={navigateToLogin}
              className="w-[153px] h-[58px] bg-[#FC7B30] font-lato font-normal text-[21px] leading-[25px] text-[#FFFFFF]"
            >
              Login
            </button>
          </Link>
        </div>
        
        <div
          className="lg:hidden md:absolute    sm:absolute md:top-8 sm:top-8 md:right-0 sm:right-0 md:z-10 sm:z-10 md:ml-[] sm:ml-[]  "
          onClick={handleClick}
        >
          {click ? (
            <FaTimes size={50} style={{ color: "#000000" }} />
          ) : (
            <FaBars
              size={50}
              style={{
                color: "#000000",
                
              }}
            />
          )}
          {/* 👇️ show elements on click */}
          {click && (
            <div className="pr-[0px] pl-[15px] translate-x-6  bg-black w-[170px] h-[200px] opacity-[.67]">
              <Link to="/">
                <p className="mt-[28px] pb-[19px] text-[21px] leading-[25px] font-extrabold font-lato text-[#FFFFFF] ">
                  Home
                </p>
              </Link>
              <Link to="/about-us">
                <p className="pb-[19px] text-[21px] leading-[25px] font-extrabold font-lato text-[#FFFFFF] ">
                  About
                </p>
              </Link>
              <Link to="/contact-us">
                <p className="pb-[19px] text-[21px] leading-[25px] font-extrabold font-lato text-[#FFFFFF] ">
                  Contact us
                </p>
              </Link>
              <Link to="/our-services">
                <p className="pb-[19px] text-[21px] leading-[25px] font-extrabold font-lato text-[#FFFFFF] ">
                  Our Services
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
