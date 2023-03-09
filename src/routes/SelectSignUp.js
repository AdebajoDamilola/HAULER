import React from "react";
import logo from "../assets/Logo.png";
import client from "../assets/client-icon.png";
import driver from "../assets/driver-icon.png";
import icon1 from "../assets/blue-icon1.png";
import icon2 from "../assets/blue-icon2.png";
import { Link } from "react-router-dom";

function SignUpUser() {
  return (
    <div className=" bg-gradient-to-l from-[#C3D8F4] to-[#315D95] ml-[120px] mr-[120px] pt-[141px] pb-[52px] pl-[204px] pr-[202px] ">
      <div className="relative mb-[48px] bg-[#FFFFFF] w-[794px] h-[865px] rounded-[10px]">
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
        <div className="">
          <p className=" text-center mb-[43px] font-lato font-normal text-[39px] leading-[47px] text-[#000000] ">
            Sign Up As:
          </p>
          <Link to="/user-sign-up">
            <img
              className="w-[131px] h-[179px] ml-[331px] mr-[332px]"
              src={client}
            />
            <p className=" text-center font-lato font-normal text-[31px] leading-[37px] text-[#000000] mb-[56px]">
              Hauler Client
            </p>
          </Link>

          <p className="text-center font-lato font-normal text-[25px] leading-[30px] text-[#000000] mb-[44px]">
            Or
          </p>
          <Link to="/driver-sign-up">
            <img
              className="w-[171px] h-[171px] ml-[311px] mr-[312px] rounded-[50%] mb-[10px]"
              src={driver}
            />
          </Link>
          <div className="absolute inline">
            <img
              className="w-[150px] h-[200px] rounded-bl-lg"
              src={icon2}
              alt="logo"
            />
          </div>
          <Link to="/driver-sign-up">
            <p className="text-center font-lato font-normal text-[31px] leading-[37px] text-[#000000] mb-[88px]">
              Hauler Driver
            </p>
          </Link>
        </div>

        <p className="ml-[360px] mr-[85px] font-lato font-bold text-[20px] leading-[24px] text-[#2C2626] pb-[10px]">
          Already have an account?
          <Link to="/login">
            <span className="ml-[12px] text-[#315D95] text-[20px] leading-[24px] font-lato font-bold leading-[24px]">
              Log in here!
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpUser;
