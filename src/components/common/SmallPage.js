import React, { useState } from "react";
import User from "../ForPages/User";
import Resume from "../ForPages/Resume";
import Works from "../ForPages/Works";
import Blogs from "../ForPages/Blogs";
import Contact from "../ForPages/Contact";

function SmallPage() {
  const [tabs, setTabs] = useState({ name: "home" });
  return (
    <>
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
      <div className="mt-[50px] bg-[#fff] dark:bg-blackbg p-[30px] md:p-[50px] rounded-2xl shadow-md">
        <div>
          {tabs.name === "home" && <User />}
          {tabs.name === "resume" && <Resume />}
          {tabs.name === "works" && <Works />}
          {tabs.name === "blog" && <Blogs />}
          {tabs.name === "contact" && <Contact />}
        </div>
      </div>
    </>
  );
}

export default SmallPage;
