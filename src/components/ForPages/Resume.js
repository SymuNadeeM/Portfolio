import React from "react";

const Resume = () => {
  return (
    <>
      <div>
        <div className=" flex items-center">
          <h1 className=" text-3xl md:text-5xl dark:text-[#fff]  font-jose font-semibold">
            Resume
          </h1>

          <div className=" ml-4 bg-btnbg w-1/4 p-[1px]"></div>
          <div className="bg-btnbg  rounded-full w-[8px] h-[8px] p-[2px]"></div>
        </div>
        <div className="mt-[30px] mb-[40px]">
          <h3 className=" text-2xl md:text-3xl font-abc dark:text-[#fff] font-medium tracking-widest">
            EDUCATION & SKILLS
          </h3>
          <div className="flex  items-center">
            <div className=" bg-green2 w-[100px] h-[1px] p-[1px]"></div>
            <div className="bg-green2  rounded-full w-[6px] h-[6px] p-[2px]"></div>
          </div>
        </div>
        <div className=" grid md:grid-cols-3 gap-8">
          <div className=" grid md:col-span-1 space-y-2">
            <div className=" flex items-center mb-4 gap-2 ">
              <i class="fa-solid fa-school text-xl text-btnbg"></i>
              <h3 className=" font-Robbi  dark:text-dtext1 font-semibold text-xl">
                Education
              </h3>
            </div>
            <div className=" space-y-4">
              <div className=" bg-[#ECECEC]  dark:bg-blackbg border-[#EFA3C8] border-[1.8px] dark:border-btnbg  bg-opacity-50 px-4 py-5 rounded-lg space-y-2">
                <div className=" w-1/2 rounded flex items-center justify-center bg-green2 text-[#fff]">
                  <p className=" font-jose ">2017-2018</p>
                </div>
                <div className=" space-y-1">
                  <p className=" font-Robbi font-bold dark:text-[#fff] ">
                    B.Sc in Computer Science & Engineering
                  </p>
                  <p className=" text-text1  text-xs font-normal  font-Robbi">
                    National University, Bangladesh
                  </p>
                </div>
              </div>
              <div className=" bg-[#ECECEC]  dark:bg-blackbg border-[#EFA3C8] border-[1.8px] dark:border-btnbg  bg-opacity-50 px-4 py-5 rounded-lg space-y-2">
                <div className=" w-1/2 rounded flex items-center justify-center bg-green2 text-[#fff]">
                  <p className=" font-jose ">2015-2016</p>
                </div>
                <div className=" space-y-1">
                  <p className=" font-Robbi font-bold dark:text-[#fff] ">
                    Higher Secondary School Certificate
                  </p>
                  <p className=" text-text1  text-xs font-normal  font-Robbi">
                    Hajigonj Degree College
                  </p>
                </div>
              </div>
              <div className=" bg-[#ECECEC]  dark:bg-blackbg border-[#EFA3C8] border-[1.8px] dark:border-btnbg  bg-opacity-50 px-4 py-5 rounded-lg space-y-2">
                <div className=" w-1/2 rounded flex items-center justify-center bg-green2 text-[#fff]">
                  <p className=" font-jose ">2013-2014</p>
                </div>
                <div className=" space-y-1">
                  <p className=" font-Robbi font-bold dark:text-[#fff] ">
                    Secondary School Certificate
                  </p>
                  <p className=" text-text1  text-xs font-normal  font-Robbi">
                    Rampur High School,Hajigonj
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" grid md:col-span-2">
            <div>
              <div className="flex items-center mb-4 gap-2">
                <i class="fa-solid fa-user-graduate text-xl text-btnbg"></i>
                <h3 className=" font-Robbi dark:text-dtext1 font-semibold text-xl">
                  My skills
                </h3>
              </div>
              <p className=" font-jose  text-base dark:text-dtext1 text-text1">
                I'm a Freelancer Front-end Developer with over 3 years of
                experience. I code and create web elements for amazing people
                around the world. I like work with new people. New people new
                Experiences.
              </p>
              <div className="mt-5 space-y-1 dark:text-dtext1 ">
                <div>
                  <div class="mb-1 text-base font-medium  font-abc">HTML5</div>
                  <div class="w-full  bg-[#EEEEEE] rounded-full h-1.5 mb-4 ">
                    <div class=" bg-green2 h-1.5 rounded-full  w-11/12"></div>
                  </div>
                </div>
                <div>
                  <div class="mb-1 text-base font-medium  font-abc">CSS</div>
                  <div class="w-full  bg-[#EEEEEE] rounded-full h-1.5 mb-4 ">
                    <div class=" bg-green2 h-1.5 rounded-full  w-10/12"></div>
                  </div>
                </div>
                <div>
                  <div class="mb-1 text-base font-medium  font-abc">
                    Bootstrap
                  </div>
                  <div class="w-full  bg-[#EEEEEE] rounded-full h-1.5 mb-4 ">
                    <div class=" bg-green2 h-1.5 rounded-full  w-8/12"></div>
                  </div>
                </div>
                <div>
                  <div class="mb-1 text-base font-medium  font-abc">
                    Tailwindcss
                  </div>
                  <div class="w-full  bg-[#EEEEEE] rounded-full h-1.5 mb-4 ">
                    <div class=" bg-green2 h-1.5 rounded-full  w-10/12"></div>
                  </div>
                </div>
                <div>
                  <div class="mb-1 text-base font-medium  font-abc">JS</div>
                  <div class="w-full  bg-[#EEEEEE] rounded-full h-1.5 mb-4 ">
                    <div class=" bg-green2 h-1.5 rounded-full  w-7/12"></div>
                  </div>
                </div>
                <div>
                  <div class="mb-1 text-base font-medium  font-abc">
                    React Js
                  </div>
                  <div class="w-full  bg-[#EEEEEE] rounded-full h-1.5 mb-4 ">
                    <div class=" bg-green2 h-1.5 rounded-full  w-8/12"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
