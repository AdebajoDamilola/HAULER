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
    <div className="lg:flex lg:flex-row ">
      <div className="lg:basis-[22%]  ">
        <img
          className="lg:w-[402px] lg:h-[1058px] md:w-[0px] md:h-[0px] sm:w-[0px] sm:h-[0px]"
          src={Truck}
          alt="Truck"
        />
      </div>
      <div className="lg:basis-[78%]  md:w-full sm:w-full bg-gradient-to-b from-[#C3D8F4] to-[#315D95]">
        <img
          className="lg:w-[214px] md:w-[150px] sm:w-[150px] lg:h-[48px] md:h-[48px] sm:h-[48px] lg:ml-[226px] md:ml-[50px] sm:ml-[30px]  mb-[57px] lg:mt-[12px] md:mt-[12px] sm:mt-[12px]"
          src={logo}
          alt="logo"
        />
        <div className="lg:w-[896px] lg:h-[865px] md:w-[600px] md:w-[600px] bg-[#FFFFFF] lg:ml-[24px] md:ml-[40px] sm:ml-[20px] sm:mr-[20px] md:mr-[40px]  rounded-[10px]">
          <div className="lg:pt-[64px] md:pt-[64px] sm:pt-[64px] lg:ml-[163px] md:ml-[50px] md:mr-[50px] sm:ml-[50px] sm:mr-[50px] lg:mr-[163px] lg:pb-[24px] lg:mb-[24px]">
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
                    className="pl-[55px] rounded-[10px] lg:w-[570px] md:w-[400px] sm:w-[260px] h-[70px]  ring-1 ring-[#94A3BB] text-2xl w-[569px] h-[70px] text-[#000000] mt-[19px] focus:outline-none "
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
                    className=" pl-[55px] rounded-[10px]  ring-1 ring-[#94A3BB] lg:w-[569px] md:w-[400px] sm:w-[260px] h-[70px] text-[#000000] text-2xl mt-[19px] focus:outline-none mb-[10px]"
                    type="password"
                    placeholder="Enter Email"
                  />
                </div>
              </label>
            </form>
          </div>
          <div className="lg:ml-[163px] lg:mr-[163px] md:ml-[50px] md:ml-[50px] sm:ml-[50px] sm:ml-[50px] flex lg:space-x-[186px] md:space-x-[70px] sm:space-x-[50px] mb-[64px]">
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
          <div className="flex flex-col items-center">
            <button className=" bg-[#315D95] lg:w-[488px] md:w-[250px] sm:w-[150px] h-[44px] rounded-[4px] mb-[56px] font-lato font-normal text-[20px] leading-[24px] text-[#FFFFFF]">
              Login
            </button>
            <div class="inline-flex items-center justify-center w-full  flex space-x-2 mb-[48px] ">
              <hr class="lg:w-[203px] md:w-[100px] sm:w-[50px] h-px my-8 bg-[#000000] border-0" />
              <p className="font-lato font-normal text-[16px] leading-[19px] text-[#94A3BB]">
                Or log in with
              </p>
              <hr class="lg:w-[203px] md:w-[100px] sm:w-[50px] h-px my-8 bg-[#000000] border-0" />
            </div>
            <div className="inline-flex items-center justify-center w-full  flex space-x-6">
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
              <p className="inline-flex items-center justify-center w-full  flex space-x-2 font-lato font-normal text-[20px] leading-[24px] text-[#2C2626] pb-[10px]">
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
    </div>
  );
}

export default Login;
