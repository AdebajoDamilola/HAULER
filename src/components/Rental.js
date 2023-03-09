import React from "react";
import Truck2 from "../assets/Truck2.png";
import rentalIcon1 from "../assets/rental-icon1.png";
import rentalIcon2 from "../assets/rental-icon2.png";
import rentalIcon3 from "../assets/rental-icon3.png";

function Rental() {
  return (
    <div>
      <div className="relative w-[1512px] h-[791px]">
        <img
          className="absolute -z-10 w-[1512px] h-[791px]"
          src={Truck2}
          alt="Truck"
        />
        <h1 className="w-[803px] h-[192px] absolute -z-10 mt-[215px] mb-[154px] ml-[369px] mr-[339px] font-lato font-extrabold text-[79px] text-center leading-[95px] text-[#FFFFFF]">
          Rent a perfect Truck for any occasion
        </h1>
        <p className="absolute -z-10 text-[#FFFFFF] font-lato font-normal text-[32px] leading-[39px] ml-[588px] mr-[589px] mt-[560px] w-[335px] h-[39px]">
          Urban Transit redefined
        </p>
      </div>

      <div className="">
        <div className="w-[1210px] h-[686px] ml-[150px] mr-[151px] mb-[154px] mt-[188px]">
          <p className="font-lato text-[32px] font-normal leading-[39px] text-center text-[#636D7D] mb-[33px] ">
            Our Services
          </p>
          <h2 className="font-lato text-[64px] font-semibold leading-[76px] text-center text-[#000000] mb-[33px] ">
            Rental Solutions
          </h2>
          <div className="flex">
            <div className="w-[420px] h-[238px]">
              <img
                className=" w-[105px] h-[105px] ml-[157px] mr-[157px] mb-[8px]  "
                src={rentalIcon1}
                alt="rentalIcon"
              />
              <h6 className="font-lato font-bold text-[33px] leading-[40px] text-center mb-[10px]  ">
                Quick Reservations
              </h6>
              <p className="font-lato font-normal text-[21px] leading-[25px] text-center">
                Hauler connects you to the closest riders helps you customise
                your trip fast easy and stressfree
              </p>
            </div>
            <div className="w-[420px] h-[238px] mt-[170px]">
              <img
                className=" w-[105px] h-[105px] ml-[157px] mr-[157px] mb-[8px]  "
                src={rentalIcon2}
                alt="rentalIcon"
              />
              <h6 className="font-lato font-bold text-[33px] leading-[40px] text-center mb-[10px]  ">
                Secure Rides
              </h6>
              <p className="font-lato font-normal text-[21px] leading-[25px] text-center">
                Hauler comes with a GPS that helps you track the driver and a
                ensures a thorough screening process of the drivers
              </p>
            </div>
            <div className="w-[420px] h-[238px]">
              <img
                className=" w-[105px] h-[105px] ml-[157px] mr-[157px] mb-[8px]  "
                src={rentalIcon3}
                alt="rentalIcon"
              />
              <h6 className="font-lato font-bold text-[33px] leading-[40px] text-center mb-[10px]  ">
                Save time and money
              </h6>
              <p className="font-lato font-normal text-[21px] leading-[25px] text-center">
                Automatically transport your goods without being there and
                access your reservations while saving time on multiple trips
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rental;
