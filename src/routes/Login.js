import React from "react";
import Truck from "../assets/Truck.png";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";
import twitter from "../assets/twitter.png";
import { Link } from "react-router-dom";

import logo from "../assets/Logo.png";
import { FiMail } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

function Login() {
  return (
    <div className="lg:flex flex-row ">
      <div className="lg:basis-[22%]">
        <img className="w-[402px] h-[1058px] " src={Truck} alt="Truck" />
      </div>
      <div className="lg:basis-[78%]  bg-gradient-to-b from-[#C3D8F4] to-[#315D95]">
        <img
          className="lg:w-[214px] h-[48px] ml-[226px] mb-[57px] mt-[12px]"
          src={logo}
          alt="logo"
        />
        <div className="w-[896px] h-[865px] bg-[#FFFFFF] ml-[24px] rounded-[10px]">
          <div className="pt-[64px] ml-[163px] mr-[163px] pb-[24px] mb-[24px]">
            <form>
              <label className="block text-[#000000] text-3xl font-lato mb-[80px] ">
                Email
                <div className="relative flex items-center ">
                  <FiMail
                    size={"30"}
                    color={"#94A3BB"}
                    className="absolute pointer-events-none mt-5 ml-[20px] "
                  />
                  <input
                    className=" pl-[55px] rounded-[10px] w-[570px] h-[70px]  ring-1 ring-[#94A3BB] text-2xl w-[569px] h-[70px] text-[#000000] mt-[19px] focus:outline-none "
                    type="email"
                    placeholder="Enter Email"
                  />
                </div>
              </label>
              <label className="block text-[#000000] font-normal text-3xl font-lato">
                Password
                <div className="relative flex items-center">
                  <FiEyeOff
                    size={"30"}
                    color={"#94A3BB"}
                    className="absolute pointer-events-none mt-5 ml-[20px] "
                  />
                  <input
                    className=" pl-[55px] rounded-[10px]  ring-1 ring-[#94A3BB] w-[569px] h-[70px] text-[#000000] text-2xl mt-[19px] focus:outline-none"
                    type="password"
                    placeholder="Enter Email"
                  />
                </div>
              </label>
            </form>
          </div>
          <div className="ml-[163px] mr-[163px] flex space-x-[186px] mb-[64px]">
            <lable className=" font-lato font-normal text-[#94A3BB] text-[16px] leading-[20px]">
              <input
                className="w-[15px] h-[15px] bg-[#94A3BB] checked:bg-[#94A3BB] font-lato font-normal mr-[8px] "
                type="checkbox"
              />
              Keep me logged in
            </lable>
            <Link>
              <p className="font-lato font-normal text-[16px] leading-[19px] text-[#94A3BB]">
                Forgot Password?
              </p>
            </Link>
          </div>
          <button className="bg-[#315D95] w-[488px] h-[44px] rounded-[4px] ml-[204px] mr-[204px] mb-[56px] font-lato font-normal text-[20px] leading-[24px] text-[#FFFFFF]">
            Login
          </button>
          <div class="inline-flex items-center justify-center w-full flex space-x-2 mb-[48px]">
            <hr class="w-[203px] h-px my-8 bg-[#000000] border-0" />
            <p className="font-lato font-normal text-[16px] leading-[19px] text-[#94A3BB]">
              Or log in with
            </p>
            <hr class="w-[203px] h-px my-8 bg-[#000000] border-0" />
          </div>
          <div className="flex ml-[292px] mr-[292px] space-x-[43px] pb-[23px]">
            <Link>
              <img className="w-[75px] h-[75px]" src={google} />
            </Link>
            <Link>
              <img className="w-[75px] h-[75px]" src={twitter} />
            </Link>
            <Link>
              <img className="w-[75px] h-[75px]" src={facebook} />
            </Link>
          </div>
          <div>
            <p className="ml-[507px] mr-[97px] font-lato font-normal text-[20px] leading-[24px] text-[#2C2626] pb-[10px]">
              Don't have an account?
              <Link to="/select-sign-up">
                <span className="ml-[12px] text-[#FB6107] text-[20px] font-lato font-bold leading-[24px]">
                  Sign up!
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
