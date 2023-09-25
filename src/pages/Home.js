import React, { useState } from "react";
import Navbar from "../components/common/Navbar";

import Contact from "../components/ForPages/Contact";
import Profile from "../components/ForPages/Profile";
import Resume from "../components/ForPages/Resume";
import User from "../components/ForPages/User";
import Works from "../components/ForPages/Works";

const Home = () => {
  const [tabs, setTabs] = useState({ name: "home" });

  return (
    <>
      <div className=" relative bg-[url('/src/Images/bg-4.jpg')] bg-no-repeat bg-cover dark:bg-[url('/src/Images/darkbackground.jpg')] dark:bg-no-repeat  dark:bg-fixed px-[20px] md:px-[35px] mx-auto">
        <Navbar />

        <div className="mt-[35px]">
          <div className=" grid md:grid-cols-4 ">
            <div className=" grid md:col-span-1 row-span-2">
              <Profile />
            </div>

            <div className=" grid md:col-span-3 row-span-4  md:ml-8">
              <div className=" hidden md:flex  justify-end items-center">
                <ul className="shadow-md space-x-3  rounded-lg bg-[#fff] dark:bg-blackbg p-6 flex ">
                  <li
                    onClick={() => {
                      setTabs({ name: "home" });
                    }}
                  >
                    <div
                      className={
                        tabs.name === "home"
                          ? " w-[70px] h-[80px] flex items-center justify-center bg-btnbg text-[#fff]  rounded-lg shadow "
                          : "w-[70px] h-[80px] flex items-center justify-center bg-[#EEEEEE] dark:bg-black3 dark:text-dtext1 text-[#73777B]  hover:bg-btnbg hover:text-[#fff] duration-200 rounded-lg shadow "
                      }
                    >
                      <div className=" py-4 px-3 space-y-2 items-center flex flex-col justify-center">
                        <i class="fa-solid fa-house-chimney"></i>
                        <p className=" font-Robbi  text-sm ">About</p>
                      </div>
                    </div>
                  </li>
                  <li
                    className=""
                    onClick={() => {
                      setTabs({ name: "resume" });
                    }}
                  >
                    <div
                      className={
                        tabs.name === "resume"
                          ? "w-[70px] h-[80px] flex items-center justify-center bg-btnbg text-[#fff]  rounded-lg shadow "
                          : "w-[70px] h-[80px] flex items-center justify-center bg-[#EEEEEE] dark:bg-black3 dark:text-dtext1 text-[#73777B] hover:bg-btnbg dark:hover:bg-btnbg dark:hover:text-[#fff] hover:text-[#fff] duration-200 rounded-lg shadow "
                      }
                    >
                      <div className="py-4 px-3 space-y-2 items-center flex flex-col justify-center">
                        <i class="fa-regular fa-file"></i>
                        <p className=" font-Robbi text-sm ">Resume</p>
                      </div>
                    </div>
                  </li>

                  <li
                    className=""
                    onClick={() => {
                      setTabs({ name: "works" });
                    }}
                  >
                    <div
                      className={
                        tabs.name === "works"
                          ? "w-[70px] h-[80px] flex items-center justify-center bg-btnbg text-[#fff]  rounded-lg shadow "
                          : "w-[70px] h-[80px] flex items-center justify-center bg-[#EEEEEE] dark:bg-black3 dark:text-dtext1 text-[#73777B] hover:bg-btnbg dark:hover:bg-btnbg dark:hover:text-[#fff] hover:text-[#fff] duration-200 rounded-lg shadow "
                      }
                    >
                      <div className="py-4 px-3 space-y-2 items-center flex flex-col justify-center">
                        <i class="fa-solid fa-laptop-file"></i>
                        <p className=" font-Robbi text-sm ">Works</p>
                      </div>
                    </div>
                  </li>
                  <li
                    className=""
                    onClick={() => {
                      setTabs({ name: "contact" });
                    }}
                  >
                    <div
                      className={
                        tabs.name === "contact"
                          ? "w-[70px] h-[80px] flex items-center justify-center bg-btnbg text-[#fff]  rounded-lg shadow "
                          : "w-[70px] h-[80px] flex items-center justify-center bg-[#EEEEEE] dark:bg-black3 dark:text-dtext1 text-[#73777B] hover:bg-btnbg dark:hover:bg-btnbg dark:hover:text-[#fff] hover:text-[#fff] duration-200 rounded-lg shadow "
                      }
                    >
                      <div className="py-4 px-3 space-y-2 items-center flex flex-col justify-center">
                        <i class="fa-regular fa-address-book"></i>
                        <p className=" font-Robbi text-sm ">Contact</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-[50px] bg-[#fff] dark:bg-blackbg p-[30px] md:p-[50px] rounded-2xl shadow-md">
                <div>
                  {tabs.name === "home" && <User />}
                  {tabs.name === "resume" && <Resume />}
                  {tabs.name === "works" && <Works />}
                  {tabs.name === "contact" && <Contact />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Small sidbar  */}

      <div className=" fixed bottom-[40px]  right-[10px] flex  md:hidden justify-center">
        <ul className=" space-y-2 rounded-lg  bg-green2 bg-opacity-25  dark:bg-blackbg dark:bg-opacity-25 p-4 flex  flex-col items-center justify-center ">
          <li
            onClick={() => {
              setTabs({ name: "home" });
            }}
          >
            <div
              className={
                tabs.name === "home"
                  ? " w-[52px] h-[52px] flex items-center justify-center bg-btnbg text-[#fff]  rounded-lg shadow "
                  : " w-[52px] h-[52px] flex items-center justify-center bg-[#EEEEEE] dark:bg-black3 dark:text-dtext1 text-[#73777B] hover:bg-btnbg dark:hover:bg-btnbg dark:hover:text-[#fff] hover:text-[#fff] duration-200 rounded-lg shadow "
              }
            >
              <div className=" p-2 space-y-1 items-center flex flex-col justify-center">
                <i class="fa-solid fa-house-chimney text-xs"></i>
                <p className=" font-Robbi text-[10px] ">Home</p>
              </div>
            </div>
          </li>
          <li
            className=""
            onClick={() => {
              setTabs({ name: "resume" });
            }}
          >
            <div
              className={
                tabs.name === "resume"
                  ? " w-[52px] h-[52px] flex items-center justify-center bg-btnbg text-[#fff]  rounded-lg shadow "
                  : " w-[52px] h-[52px] flex items-center justify-center bg-[#EEEEEE] dark:bg-black3 dark:text-dtext1 text-[#73777B] hover:bg-btnbg dark:hover:bg-btnbg dark:hover:text-[#fff] hover:text-[#fff] duration-200 rounded-lg shadow "
              }
            >
              <div className="p-2 space-y-1 items-center flex flex-col justify-center">
                <i class="fa-regular fa-file text-xs"></i>
                <p className=" font-Robbi text-[10px]">Resume</p>
              </div>
            </div>
          </li>
          <li
            className=""
            onClick={() => {
              setTabs({ name: "blog" });
            }}
          >
            <div
              className={
                tabs.name === "blog"
                  ? "w-[52px] h-[52px] flex items-center justify-center bg-btnbg text-[#fff]  rounded-lg shadow "
                  : "w-[52px] h-[52px] flex items-center justify-center bg-[#EEEEEE] dark:bg-black3 dark:text-dtext1 text-[#73777B] hover:bg-btnbg dark:hover:bg-btnbg dark:hover:text-[#fff] hover:text-[#fff] duration-200 rounded-lg shadow "
              }
            >
              <div className="p-2 space-y-1 items-center flex flex-col justify-center">
                <i class="fa-brands fa-blogger text-xs"></i>
                <p className=" font-Robbi text-[10px] ">blog</p>
              </div>
            </div>
          </li>
          <li
            className=""
            onClick={() => {
              setTabs({ name: "works" });
            }}
          >
            <div
              className={
                tabs.name === "works"
                  ? "w-[52px] h-[52px] flex items-center justify-center bg-btnbg text-[#fff]  rounded-lg shadow "
                  : "w-[52px] h-[52px] flex items-center justify-center bg-[#EEEEEE] dark:bg-black3 dark:text-dtext1 text-[#73777B] hover:bg-btnbg dark:hover:bg-btnbg dark:hover:text-[#fff] hover:text-[#fff] duration-200 rounded-lg shadow "
              }
            >
              <div className="p-2 space-y-1 items-center flex flex-col justify-center">
                <i class="fa-solid fa-laptop-file text-xs"></i>
                <p className=" font-Robbi  text-[10px]">Works</p>
              </div>
            </div>
          </li>
          <li
            className=""
            onClick={() => {
              setTabs({ name: "contact" });
            }}
          >
            <div
              className={
                tabs.name === "contact"
                  ? "w-[52px] h-[52px] flex items-center justify-center bg-btnbg text-[#fff]  rounded-lg shadow "
                  : "w-[52px] h-[52px] flex items-center justify-center bg-[#EEEEEE] dark:bg-black3 dark:text-dtext1 text-[#73777B] hover:bg-btnbg dark:hover:bg-btnbg dark:hover:text-[#fff] hover:text-[#fff] duration-200 rounded-lg shadow "
              }
            >
              <div className=" p-2 space-y-1 items-center flex flex-col justify-center">
                <i class="fa-regular fa-address-book text-xs"></i>
                <p className=" font-Robbi text-[10px] ">Contact</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
