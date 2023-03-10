import React from "react";
import Truck2 from "../assets/Truck2.png";
import rentalIcon1 from "../assets/rental-icon1.png";
import rentalIcon2 from "../assets/rental-icon2.png";
import rentalIcon3 from "../assets/rental-icon3.png";
import Ride from "../assets/ride.png";
import Protect from "../assets/icons/Protect.png";
import AveragePrice from "../assets/icons/AveragePrice.png";
import CreditCard from "../assets/icons/CreditCard.png";
import Discount from "../assets/icons/Discount.png";
import Globe from "../assets/icons/globe.png";
import PopularMan from "../assets/icons/PopularMan.png";

function Rental() {
  return (
    <div>
      <div
        className="relative w-full h-[651px] flex flex-col justify-center items-center"
        style={{
          background: `linear-gradient(45deg, rgb(0 0 0 / 55%), transparent), url(${Truck2})`,
          backgroundPosition: "bottom",}}>
        <div className="text-center">
          <h1 className="w-full -z-10 mb-8 font-lato font-extrabold text-[45px] lg:text-[79px] text-center lg:leading-[95px] leading-[95px] text-[#FFFFFF]">
            Rent a perfect Truck <br />
            for any occasion
          </h1>
          <p className="-z-10 text-[#FFFFFF] font-lato font-normal text-[32px] leading-[39px]">
            Urban Transit redefined
          </p>
        </div>

        <div className="lg:flex justify-center gap-8 bg-white p-5 rounded-full items-center absolute hidden md:block bottom-[-48px]">
          <div className="flex gap-8">
            <svg
              width="36"
              height="37"
              viewBox="0 0 36 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_227_888)">
                <path
                  d="M31.4381 15.7742C31.4381 26.1867 18.0506 35.1117 18.0506 35.1117C18.0506 35.1117 4.66309 26.1867 4.66309 15.7742C4.66309 12.2236 6.07355 8.81847 8.58419 6.30783C11.0948 3.79718 14.5 2.38672 18.0506 2.38672C21.6012 2.38672 25.0063 3.79718 27.517 6.30783C30.0276 8.81847 31.4381 12.2236 31.4381 15.7742Z"
                  stroke="black"
                  stroke-width="2.1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.0504 20.2365C20.515 20.2365 22.5129 18.2386 22.5129 15.774C22.5129 13.3095 20.515 11.3115 18.0504 11.3115C15.5858 11.3115 13.5879 13.3095 13.5879 15.774C13.5879 18.2386 15.5858 20.2365 18.0504 20.2365Z"
                  stroke="black"
                  stroke-width="2.1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_227_888">
                  <rect
                    width="35.7"
                    height="35.7"
                    fill="white"
                    transform="translate(0.200195 0.899414)"
                  />
                </clipPath>
              </defs>
            </svg>

            <div>
              <h2>PICK-UP LOCATION</h2>
              <p>Where?</p>
            </div>
          </div>
          <div className="lg:flex justify-center gap-8">
            <div>
              <h2>DROP OFF LOCATION</h2>
              <p>Same as Pick-up</p>
            </div>
            <div className="flex">
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.2131 6.84961H8.38809C6.74504 6.84961 5.41309 8.18156 5.41309 9.82461V30.6496C5.41309 32.2927 6.74504 33.6246 8.38809 33.6246H29.2131C30.8561 33.6246 32.1881 32.2927 32.1881 30.6496V9.82461C32.1881 8.18156 30.8561 6.84961 29.2131 6.84961Z"
                  stroke="black"
                  stroke-width="2.1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M24.75 3.87402V9.82402"
                  stroke="black"
                  stroke-width="2.1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.8506 3.87402V9.82402"
                  stroke="black"
                  stroke-width="2.1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.41309 15.7744H32.1881"
                  stroke="black"
                  stroke-width="2.1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>
                <h2>PICK-UP</h2>
                <p>22/2/23, 12:00AM</p>
              </div>
            </div>
            <div>
              <h2>DROP-OFF</h2>
              <p>24/2/23, 9:00AM</p>
            </div>
          </div>
          <div>
            <svg
              width="85"
              height="85"
              viewBox="0 0 85 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="42.2002" cy="42.75" r="42" fill="#D9D9D9" />
              <path
                d="M40.4502 55C48.1822 55 54.4502 48.732 54.4502 41C54.4502 33.268 48.1822 27 40.4502 27C32.7182 27 26.4502 33.268 26.4502 41C26.4502 48.732 32.7182 55 40.4502 55Z"
                stroke="black"
                stroke-width="2.1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M57.9504 58.5002L50.3379 50.8877"
                stroke="black"
                stroke-width="2.1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="">
        <div className="lg:w-full lg:mb-[19rem] mb-[9rem] lg:mt-[15rem] mt-[5rem]">
          <p className="font-lato text-[32px] font-normal leading-[39px] text-center text-[#636D7D] mb-[33px] ">
            Our Services
          </p>
          <h2 className="font-lato text-[64px] font-semibold leading-[76px] text-center text-[#000000] mb-[33px] ">
            Rental Solutions
          </h2>
          <div className="lg:flex justify-center items-center m-auto lg:w-[80%]">
            <div className=" m-auto">
              <img
                className=" w-[105px] h-[105px] lg:ml-[157px] lg:mr-[157px] mb-[8px]  m-auto"
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
            <div className="lg:mt-[1rem] sm:mt-8 relative lg:top-[8rem]">
              <img
                className=" w-[105px] h-[105px] lg:ml-[157px] lg:mr-[157px] lg:mb-[8px] mx-auto mt-8  m-auto"
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
            <div className="">
              <img
                className=" w-[105px] h-[105px] lg:ml-[157px] lg:mr-[157px] mb-[8px] sm:mt-8 m-auto"
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

      <div className="bg-[#3E74BA] text-white w-[80%] m-auto rounded-2xl mb-[7rem] py-[5rem]">
        <h2 className="text-[37.8px] lg:w-[50%] m-auto text-center">
          We are ensuring the best Customer experience with Hauler drivers
        </h2>
        <div className="m-auto">
          <img
            className="w-[105px] h-[105px] mb-[8px] mt-5 m-auto hidden lg:block"
            src={Ride}
            alt="rentalIcon"
          />
        </div>
        <div className="lg:flex gap-[5rem] justify-center mt-5">
          <div className="ml-8">
            <div className="flex gap-4 lg:justify-end">
              <p>Safety First</p>
              <img
                className=" w-[35.7px] h-[35.7px] mb-[8px]"
                src={Protect}
                alt="rentalIcon"
              />
            </div>
            <div className="flex gap-4 lg:justify-end">
              <p>Professional Service</p>
              <img
                className=" w-[35.7px] h-[35.7px] mb-[8px]"
                src={PopularMan}
                alt="rentalIcon"
              />
            </div>
            <div className="flex gap-4 lg:justify-end">
              <p>Deals and Promotions</p>
              <img
                className=" w-[35.7px] h-[35.7px] mb-[8px]"
                src={Discount}
                alt="rentalIcon"
              />
            </div>
          </div>
          <div className="mr-8 sm:ml-8">
            <div className="flex gap-4 lg:justify-start">
              <img
                className=" w-[35.7px] h-[35.7px] mb-[8px]"
                src={Globe}
                alt="rentalIcon"
              />
              <p>Online Check-In</p>
            </div>
            <div className="flex gap-4 lg:justify-start">
              <img
                className=" w-[35.7px] h-[35.7px] mb-[8px]"
                src={AveragePrice}
                alt="rentalIcon"
              />
              <p>Bargainable prices</p>
            </div>
            <div className="flex gap-4 lg:justify-start">
              <img
                className=" w-[35.7px] h-[35.7px] mb-[8px]"
                src={CreditCard}
                alt="rentalIcon"
              />
              <p>Convenient and Cashless</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rental;
