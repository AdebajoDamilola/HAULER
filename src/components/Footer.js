import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <div>
      <div class="bg-[#3E74BA] py-0 sm:py-0">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto pb-8 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-b border-gray-200 pt-0 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div class="flex max-w-xl items-start justify-between">
              <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                  <span class=" inset-0"></span>
                  Reservations
                </h3>
                <ul class="mt-5 text-sm leading-6 flex flex-col gap-5 text-gray-600 line-clamp-3">
                  <li>
                    <a href="#" className="text-white">
                      View/Modify/Cancel
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Deals and Promotions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Trucks
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Reward Programs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      RMy Trips
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex max-w-xl items-start justify-between">
              <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                  <span class=" inset-0"></span>
                  About Hauler
                </h3>
                <ul class="mt-5 text-sm leading-6 text-gray-600 flex flex-col gap-5 line-clamp-3">
                  <li>
                    <a href="#" className="text-white">
                      History
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Locations
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Reviews
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Sponsors
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex max-w-xl items-start justify-between">
              <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                  <span class=" inset-0"></span>
                  Customer Support
                </h3>
                <ul class="mt-5 flex flex-col gap-5 text-sm leading-6 text-gray-600 line-clamp-3">
                  <li>
                    <a href="#" className="text-white">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Payment Methods
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Age Requirements
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      How to Rent a Truck
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      FAQ’S
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex max-w-xl items-start justify-between">
              <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-600">
                  <span class=" inset-0"></span>
                  Join our Community
                </h3>
                <ul class="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                  <li className="text-white">
                    Get exclusive deals & updates straight to your inbox.
                  </li>
                  <li className="mt-5">
                    <form className="flex">
                      <input
                        placeholder="Enter your email here"
                        className="rounded-lg	 p-2"
                      />
                      <button className="rounded-lg -ml-6 text-white gap-2 p-2 flex bg-[#FC7B30]">
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.71289 5.02012C2.71289 4.63956 3.02139 4.33105 3.40195 4.33105H19.9395C20.32 4.33105 20.6285 4.63956 20.6285 5.02012V16.7342C20.6285 17.0997 20.4833 17.4502 20.2249 17.7087C19.9664 17.9671 19.6159 18.1123 19.2504 18.1123H4.09102C3.72552 18.1123 3.37498 17.9671 3.11653 17.7087C2.85809 17.4502 2.71289 17.0997 2.71289 16.7342V5.02012ZM4.09102 5.70918V16.7342H19.2504V5.70918H4.09102Z"
                            fill="white"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.89401 4.5545C3.15116 4.27397 3.58704 4.25502 3.86757 4.51218L11.6707 11.665L19.4738 4.51218C19.7544 4.25502 20.1902 4.27397 20.4474 4.5545C20.7046 4.83504 20.6856 5.27091 20.4051 5.52807L12.1363 13.1078C11.8729 13.3492 11.4685 13.3492 11.2051 13.1078L2.93634 5.52807C2.65581 5.27091 2.63686 4.83504 2.89401 4.5545Z"
                            fill="white"
                          />
                        </svg>
                        Subscribe
                      </button>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="mx-auto pb-5 grid max-w-2xl grid-cols-1 lg:grid-cols-[400px_minmax(100px,_1fr)_200px] gap-y-16 gap-x-8 pt-0 sm:mt-0 sm:pt-16 lg:mx-0 lg:max-w-none">
            <div class="flex  items-start justify-between">
              <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href="/">
                    <img
                      className="w-[214px] h-[48px] mr-[117px]"
                      src={logo}
                      alt="logo"
                    />
                  </a>
                </h3>
              </div>
            </div>
            <div class="flex  items-start justify-between">
              <div class="group relative">
                <ul class="mt-5 text-sm leading-6 text-gray-600 lg:flex gap-6 line-clamp-3">
                  <li>
                    <a href="#" className="text-white">
                      Sitemap
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Reviews
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Partners
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Feedback
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex items-start lg:justify-between">
              <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                  <span class=" inset-0"></span>
                  About Hauler
                </h3>
                <ul class="mt-5 text-sm leading-6 text-gray-600 flex gap-5 line-clamp-3">
                  <li>
                    <a href="#" className="text-white">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="24.9474"
                          cy="25.0289"
                          r="24.255"
                          fill="#D9D9D9"
                        />
                        <path
                          d="M30.4594 14.0044H19.4344C16.3899 14.0044 13.9219 16.4724 13.9219 19.5169V30.5419C13.9219 33.5864 16.3899 36.0544 19.4344 36.0544H30.4594C33.5038 36.0544 35.9719 33.5864 35.9719 30.5419V19.5169C35.9719 16.4724 33.5038 14.0044 30.4594 14.0044Z"
                          stroke="#FC7B30"
                          stroke-width="2.205"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M29.3573 24.3349C29.4933 25.2525 29.3366 26.1896 28.9094 27.0129C28.4822 27.8362 27.8062 28.5039 26.9777 28.9209C26.1491 29.338 25.2102 29.4831 24.2943 29.3358C23.3785 29.1884 22.5325 28.756 21.8766 28.1001C21.2207 27.4442 20.7883 26.5982 20.641 25.6824C20.4936 24.7666 20.6388 23.8276 21.0558 22.9991C21.4728 22.1705 22.1405 21.4946 22.9639 21.0674C23.7872 20.6401 24.7243 20.4834 25.6418 20.6195C26.5778 20.7583 27.4443 21.1944 28.1133 21.8634C28.7824 22.5325 29.2185 23.399 29.3573 24.3349Z"
                          stroke="#FC7B30"
                          stroke-width="2.205"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M31.0107 18.9653H31.0218"
                          stroke="#FC7B30"
                          stroke-width="2.205"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="24.9171"
                          cy="25.0289"
                          r="24.255"
                          fill="#D9D9D9"
                        />
                        <g clip-path="url(#clip0_417_2861)">
                          <path
                            d="M37.045 15.1073C35.9893 15.852 34.8203 16.4216 33.5832 16.7941C32.9192 16.0306 32.0367 15.4895 31.0552 15.2439C30.0736 14.9983 29.0403 15.0601 28.095 15.4209C27.1497 15.7817 26.338 16.4241 25.7698 17.2613C25.2015 18.0984 24.904 19.0899 24.9175 20.1016V21.2041C22.98 21.2543 21.0602 20.8246 19.329 19.9533C17.5978 19.0819 16.1089 17.7959 14.995 16.2098C14.995 16.2098 10.585 26.1323 20.5075 30.5423C18.237 32.0835 15.5321 32.8563 12.79 32.7473C22.7125 38.2598 34.84 32.7473 34.84 20.0685C34.839 19.7614 34.8095 19.4551 34.7518 19.1535C35.8771 18.0438 36.6711 16.6427 37.045 15.1073Z"
                            stroke="#FC7B30"
                            stroke-width="2.205"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_417_2861">
                            <rect
                              width="26.46"
                              height="26.46"
                              fill="white"
                              transform="translate(11.6875 11.7993)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="24.8878"
                          cy="25.0289"
                          r="24.255"
                          fill="#D9D9D9"
                        />
                        <path
                          d="M31.5035 14.0044H28.196C26.734 14.0044 25.3318 14.5852 24.2981 15.619C23.2643 16.6528 22.6835 18.0549 22.6835 19.5169V22.8244H19.376V27.2344H22.6835V36.0544H27.0935V27.2344H30.401L31.5035 22.8244H27.0935V19.5169C27.0935 19.2245 27.2096 18.9441 27.4164 18.7373C27.6232 18.5306 27.9036 18.4144 28.196 18.4144H31.5035V14.0044Z"
                          stroke="#FC7B30"
                          stroke-width="2.205"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
