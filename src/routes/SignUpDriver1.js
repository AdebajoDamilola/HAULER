import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import { TbUser } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

function SignUpDriver1() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    // 👇️ navigate to /login
    navigate("/login");
  };
  const navigateToDriverSignUp = () => {
    // 👇️ navigate to /driver-sign-up
    navigate("/driver-sign-up");
  };


  return (
    <div className="flex">
      <div className="basis-[8%] bg-[#315D95]"></div>
      <div className="basis-[83%] bg-[#FFFFFF] ">
        <div className="flex mt-[16px] justify-between mb-[72px]">
          <img className="lg:w-[213px] h-[48px] " src={logo} alt="logo" />
          <button
            className="bg-[#315D95] w-[180px] h-[44px] rounded-[4px] mr-[8px] font-lato font-bold text-[20px] leading-[24px] text-[#FFFFFF]"
            onClick={navigateToLogin}
          >
            Login
          </button>
        </div>
        <div className="ml-[50px] mr-[50px] w-[1100px] h-[849px] mb-[77px] ">
          <div className="flex justify-between ml-[35px] mt-[23px] mr-[47px] mb-[10px]">
            <Link>
              <p className="font-lato font-normal text-[31px] leading-[37px] text-[#000000] ">
                Bio Data
              </p>
            </Link>
            <Link>
              <p className="font-lato font-normal text-[31px] leading-[37px] text-[#000000] ">
                Vehicle Details
              </p>
            </Link>
            <Link>
              <p className="font-lato font-normal text-[31px] leading-[37px] text-[#000000] ">
                Documents
              </p>
            </Link>
            <Link>
              <p className="font-lato font-normal text-[31px] leading-[37px] text-[#000000] ">
                Summary
              </p>
            </Link>
          </div>
          <div className=" w-[1081px] h-[14px] mb-[48px]">
            <progress value="65" max="100" />
          </div>
          <p className=" text-[20px] font-normal leading-[24px] font-lato text-[#000000] mb-[64px] ml-[47px] mr-[250px]">
            Only your first name, number, and vehicle details are visible to
            hauler users during bookings
          </p>
          <form>
            <div className="grid grid-cols-2 gap-x-12 gap-y-14  ml-[58px] mr-[58px] w-[984px] h-[418px] mb-[96px]">
              <label className="block text-[#000000] text-[25px] leading-[30px] font-lato  ">
                Vehicle Manufacturer
                <div className="relative flex items-center ">
                  <TbUser
                    size={"24"}
                    color={"#94A3BB"}
                    className="absolute pointer-events-none mt-5 ml-[15px] "
                  />
                  <input
                    className=" pl-[55px]  rounded-[6px] w-[456px] h-[56px]  ring-1 ring-[#94A3BB] text-[20px] text-[#000000] mt-[19px] focus:outline-none "
                    type="text"
                    placeholder="Vehicle Manufacturer"
                  />
                </div>
              </label>
              <label className="block text-[#000000] font-lato  text-[25px] leading-[30px] ">
                Vehicle Model
                <div className="relative flex items-center ">
                  <TbUser
                    size={"24"}
                    color={"#94A3BB"}
                    className="absolute pointer-events-none mt-5 ml-[15px] "
                  />
                  <input
                    className=" pl-[55px] rounded-[6px] w-[456px] h-[56px]  ring-1 ring-[#94A3BB] text-[20px] text-[#000000] mt-[19px] focus:outline-none "
                    type="text"
                    placeholder="Vehicle Model"
                  />
                </div>
              </label>
              <label className="block text-[#000000] text-[25px] leading-[30px] font-lato ">
                Vehicle Year
                <div className="relative flex items-center ">
                  <BsTelephone
                    size={"24"}
                    color={"#94A3BB"}
                    className="absolute pointer-events-none mt-5 ml-[15px] "
                  />
                  <input
                    className=" pl-[55px] rounded-[6px] w-[456px] h-[56px]  ring-1 ring-[#94A3BB] text-[20px] text-[#94A3BB] mt-[19px] focus:outline-none "
                    type="date"
                    placeholder=""
                  />
                </div>
              </label>
              <label className="block text-[#000000] font-lato mb-[13px] text-[25px] leading-[30px] ">
                Vehicle Color
                <div className="relative flex items-center ">
                  <FiMail
                    size={"24"}
                    color={"#94A3BB"}
                    className="absolute pointer-events-none mt-5 ml-[15px] "
                  />
                  <input
                    className=" pl-[55px] rounded-[6px] w-[456px] h-[56px]  ring-1 ring-[#94A3BB] text-[20px] text-[#000000] mt-[19px] focus:outline-none "
                    type="text"
                    placeholder="Vehicle Color"
                  />
                </div>
              </label>
              <label className="block text-[#000000] font-lato mb-[13px] text-[25px] leading-[30px] ">
                Licence Plate
                <div className="relative flex items-center ">
                  <FiEyeOff
                    size={"24"}
                    color={"#94A3BB"}
                    className="absolute pointer-events-none mt-5 ml-[15px] "
                  />
                  <input
                    className=" pl-[55px] rounded-[6px] w-[456px] h-[56px]  ring-1 ring-[#94A3BB] text-[20px] text-[#0000000] mt-[19px] focus:outline-none "
                    type="text"
                    placeholder="Enter Password"
                  />
                </div>
              </label>
              <label className="block text-[#000000] font-lato mb-[13px] text-[25px] leading-[30px] ">
                Confirm Password
                <div className="relative flex items-center ">
                  <FiEyeOff
                    size={"24"}
                    color={"#94A3BB"}
                    className="absolute pointer-events-none mt-5 ml-[15px] "
                  />
                  <input
                    className=" pl-[55px] rounded-[6px] w-[456px] h-[56px]  ring-1 ring-[#94A3BB] text-[20px] text-[#000000] mt-[19px] focus:outline-none "
                    type="password"
                    placeholder="Confirm Password"
                  />
                </div>
              </label>
            </div>
          </form>

          <div className="ml-[258px] w-[584px] mr-[308px] flex justify-between mb-[71px]">
            <button
              onClick={navigateToDriverSignUp}
              className="bg-[#636D7D] w-[280px] h-[44px] rounded-[4px] font-lato font-bold text-[20px] leading-[24px] text-[#FFFFFF]"
            >
              Previous
            </button>
            <button className="bg-[#315D95] w-[280px] h-[44px] rounded-[4px] font-lato font-bold text-[20px] leading-[24px] text-[#FFFFFF]">
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="basis-[8%] bg-[#315D95]"></div>
    </div>
  );
}
export default SignUpDriver1;
