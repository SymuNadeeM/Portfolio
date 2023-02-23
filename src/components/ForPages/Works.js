import React from "react";
import { Link } from "react-router-dom";
import WorkData from "./WorkData";

const Works = () => {
  return (
    <>
      <div>
        <div className=" flex items-center">
          <h1 className=" text-3xl md:text-5xl dark:text-[#fff] font-jose font-semibold">
            MY PORTFOLIO
          </h1>

          <div className=" ml-4 bg-btnbg w-1/4 p-[1px]"></div>
          <div className="bg-btnbg  rounded-full w-[8px] h-[8px] p-[2px]"></div>
        </div>
        <div className="mt-[30px] mb-[40px]">
          <h3 className=" text-2xl md:text-3xl dark:text-[#fff]  font-abc font-medium   capitalize">
            my work
          </h3>
          <div className="flex  items-center">
            <div className=" bg-green2 w-[80px] h-[1px] p-[1px]"></div>
            <div className="bg-green2  rounded-full w-[6px] h-[6px] p-[2px]"></div>
          </div>
        </div>
        <div className="mt-[40px]">
          <div className=" grid md:grid-cols-2 gap-5">
            {WorkData.map((items) => {
              return (
                <div key={items.id}>
                  <div className="bg-[#E3F6FF] dark:bg-blackbg  border-[1.8px] dark:border-btnbg   border-green2 border-opacity-25 bg-opacity-50  p-6 rounded-xl flex flex-col justify-center items-center">
                    <img
                      src={items.image}
                      alt=""
                      className="w-full h-[240px] p-4 rounded-xl"
                    />
                    <p className="text-text1  tracking-wide text-sm font-normal  font-Robbi">
                      {items.desc}
                    </p>
                    <p className=" text-text2 dark:text-[#fff] tracking-wider text-xl font-normal  font-Robbi">
                      {items.name}
                    </p>
                    <Link
                      to="#"
                      className="tracking-wide  text-btnbg  hover:text-green2 duration-200 text-sm font-normal  font-Robbi"
                    >
                      Live Demo
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
