import React from "react";
import logo from "../assets/Logo.png";
import client from "../assets/client-icon.png";
import driver from "../assets/driver-icon.png";
import icon1 from "../assets/blue-icon1.png";
import icon2 from "../assets/blue-icon2.png";
import { Link } from "react-router-dom";

function SignUpUser() {
  return (
    <div className=" bg-gradient-to-l from-[#C3D8F4] to-[#315D95] lg:ml-[120px] lg:mr-[120px] md:ml-[40px] md:mr-[40px] sm:ml-[10px] sm:mr-[10px] lg:pt-[141px] lg:pb-[52px] lg:pl-[204px] md:pl-[50px] md:pr-[50px] sm:pl-[10px] sm:pr-[10px] lg:pr-[202px] ">
      <div className="relative mb-[48px] bg-[#FFFFFF] lg:w-[794px] lg:h-[865px] md:w-[500px] md:h-[865px] sm:w-[400px] sm:h-[865px]  rounded-[10px]">
        <div className="absolute ml-[654px]  ">
          <img
            className="w-[200px] h-[256px] rounded-tr-lg"
            src={icon1}
            alt="logo"
          />
        </div>
        <img
          className="w-[213px] h-[48px] ml-[24px] pt-[15px]"
          src={logo}
          alt="logo"
        />
        <div className=" ">
          <p className=" text-center mb-[43px] font-lato font-normal lg:text-[39px] md:text-[25px] sm:text-[25px]  leading-[47px] text-[#000000] ">
            Sign Up As:
          </p>
          <Link to="/user-sign-up">
            <img
              className="w-[131px] h-[179px] lg:ml-[331px] lg:mr-[332px] md:ml-[185px] md:mr-[100px] sm:ml-[140px] sm:mr-[100px]"
              src={client}
            />
            <p className=" text-center font-lato font-normal lg:text-[31px] md:text-[20px] sm:text-[20px] leading-[37px] text-[#000000] lg:mb-[56px] md:mb-[30px] sm:mb-[20px]">
              Hauler Client
            </p>
          </Link>

          <p className="text-center font-lato font-normal lg:text-[25px] md:text-[20px] sm:text-[20px] leading-[30px] text-[#000000] lg:mb-[44px] md:mb-[20px] sm:mb-[20px] ">
            Or
          </p>
          <Link to="/driver-sign-up">
            <img
              className="w-[171px] h-[171px] lg:ml-[311px] lg:mr-[312px] md:ml-[165px] md:mr-[140px] sm:ml-[120px] sm:mr-[100px] rounded-[50%] mb-[10px]"
              src={driver}
            />
          </Link>
          <div className="absolute inline">
            <img
              className="lg:w-[150px] md:hidden sm:hidden h-[200px] rounded-bl-lg"
              src={icon2}
              alt="logo"
            />
          </div>
          <Link to="/driver-sign-up">
            <p className="text-center font-lato font-normal lg:text-[31px] md:text-[20px] sm:text-[20px] leading-[37px] text-[#000000] lg:mb-[88px] md:mb-[40px] sm:mb-[30px] ">
              Hauler Driver
            </p>
          </Link>
        </div>

        <p className="lg:ml-[360px] lg:mr-[85px] md:ml-[100px] md:mr-[30px] sm:ml-[50px] sm:mr-[30px] font-lato font-bold lg:text-[20px] md:text-[15px] sm:text-[15px] leading-[24px] text-[#2C2626] pb-[10px]">
          Already have an account?
          <Link to="/login">
            <span className="ml-[12px] text-[#315D95] lg:text-[20px] md:text-[17px] sm:text-[17px] leading-[24px] font-lato font-bold leading-[24px]">
              Log in here!
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpUser;
