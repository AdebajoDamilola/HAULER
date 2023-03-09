import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { TbUser } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";
import twitter from "../assets/twitter.png";

const SignUpUser = () => {
  return (
    <div className="flex">
      <div className="basis-[22%] bg-[#4A8BDF]">
        <h1></h1>
      </div>
      <div className=" basis-[78%] mb-[4px] ">
        <div>
          <p className="ml-[678px] pt-[24px] mr-[118px]  w-[343px] font-lato font-normal text-[20px] leading-[24px] text-[#000000] ">
            Already have an account?
            <Link to="/login">
              <span className="ml-[12px] text-[#FB6107] text-[20px] leading-[24px] font-lato font-bold leading-[24px]">
                Log in here!
              </span>
            </Link>
          </p>
          <div className="mb-[56px] mr-[131px]  ">
            <img className="lg:w-[147px] h-[89px] " src={logo} alt="logo" />
          </div>
        </div>

        <p className="ml-[292px] mb-[48px] font-lato font-normal text-[31px] leading-[37px] text-[#000000] ">
          Create An Account
        </p>
        <div>
          <form>
            <div className="grid grid-cols-2 gap-x-12 gap-y-0  ml-[23px] mr-[150px] w-[966px] h-[418px] mb-[37px]">
              <label className="block text-[#000000] text-[25px] leading-[30px] font-lato  ">
                First Name
                <div className="relative flex items-center ">
                  <TbUser
                    size={"24"}
                    color={"#94A3BB"}
                    className="absolute pointer-events-none mt-5 ml-[15px] "
                  />
                  <input
                    className=" pl-[55px]  rounded-[6px] w-[456px] h-[56px]  ring-1 ring-[#94A3BB] text-[20px] text-[#000000] mt-[19px] focus:outline-none "
                    type="text"
                    placeholder="Enter Name"
                  />
                </div>
              </label>
              <label className="block text-[#000000] font-lato  text-[25px] leading-[30px] ">
                Last Name
                <div className="relative flex items-center ">
                  <TbUser
                    size={"24"}
                    color={"#94A3BB"}
                    className="absolute pointer-events-none mt-5 ml-[15px] "
                  />
                  <input
                    className=" pl-[55px] rounded-[6px] w-[456px] h-[56px]  ring-1 ring-[#94A3BB] text-[20px] text-[#000000] mt-[19px] focus:outline-none "
                    type="text"
                    placeholder="Enter Name"
                  />
                </div>
              </label>
              <label className="block text-[#000000] text-[25px] leading-[30px] font-lato ">
                Phone Number
                <div className="relative flex items-center ">
                  <BsTelephone
                    size={"24"}
                    color={"#94A3BB"}
                    className="absolute pointer-events-none mt-5 ml-[15px] "
                  />
                  <input
                    className=" pl-[55px] rounded-[6px] w-[456px] h-[56px]  ring-1 ring-[#94A3BB] text-[20px] text-[#000000] mt-[19px] focus:outline-none "
                    type="number"
                    placeholder="+234"
                  />
                </div>
              </label>
              <label className="block text-[#000000] font-lato mb-[13px] text-[25px] leading-[30px] ">
                Email
                <div className="relative flex items-center ">
                  <FiMail
                    size={"24"}
                    color={"#94A3BB"}
                    className="absolute pointer-events-none mt-5 ml-[15px] "
                  />
                  <input
                    className=" pl-[55px] rounded-[6px] w-[456px] h-[56px]  ring-1 ring-[#94A3BB] text-[20px] text-[#000000] mt-[19px] focus:outline-none "
                    type="email"
                    placeholder="Enter Email"
                  />
                </div>
              </label>
              <label className="block text-[#000000] font-lato mb-[13px] text-[25px] leading-[30px] ">
                Create Password
                <div className="relative flex items-center ">
                  <FiEyeOff
                    size={"24"}
                    color={"#94A3BB"}
                    className="absolute pointer-events-none mt-5 ml-[15px] "
                  />
                  <input
                    className=" pl-[55px] rounded-[6px] w-[456px] h-[56px]  ring-1 ring-[#94A3BB] text-[20px] text-[#000000] mt-[19px] focus:outline-none "
                    type="password"
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
                    placeholder="Enter Password"
                  />
                </div>
              </label>
            </div>
          </form>
          <div className="mb-[64px]  ">
            <lable className=" font-lato font-normal text-[#000000] ml-[23px]  text-[20px] leading-[24px]">
              <input
                className="w-[30px] h-[30px] bg-[#94A3BB] checked:bg-[#94A3BB] font-lato font-normal mr-[42px] "
                type="checkbox"
              />
              By creating an account, you agree to the
              <Link>
                <span className="ml-[12px] mr-[12px] text-[#3E74BA] text-[20px] leading-[24px] font-lato font-bold underline underline-offset-4">
                  terms of use
                </span>
              </Link>
              and our
              <Link>
                <span className="ml-[12px] text-[#3E74BA] text-[20px] leading-[24px] font-lato font-bold  underline underline-offset-4">
                  privacy policy
                </span>
              </Link>
            </lable>
          </div>
          <button className="bg-[#315D95] w-[486px] h-[44px] rounded-[4px] ml-[176px] mr-[477px] mb-[40px] font-lato font-bold text-[20px] leading-[24px] text-[#FFFFFF]">
            Ceate Account
          </button>
          <div class="inline-flex items-center ml-[173px] w-full flex  mb-[32px]">
            <hr class="w-[173px] h-px my-8 bg-[#000000] border-0" />
            <p className="font-inter font-medium text-[24px] leading-[29px] text-[#1E2125]">
              Or sign up with
            </p>
            <hr class="w-[173px] h-px my-8 bg-[#000000] border-0" />
          </div>
          <div className="flex ml-[245px] mr-[546px] space-x-[48px] pb-[33px] ">
            <img className="w-[84px] h-[84px]" src={google} />
            <img className="w-[84px] h-[84px]" src={twitter} />
            <img className="w-[84px] h-[84px]" src={facebook} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpUser;
