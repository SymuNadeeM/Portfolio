import React from "react";

const Resume = () => {
  return (
    <>
      <div>
        <div className=" flex  items-center  gap-4">
          <h1 className=" text-3xl md:text-5xl  font-jose font-semibold">
            Resume
          </h1>
          <div className="  bg-btnbg w-1/3 p-[1px]"></div>
        </div>
        <div className="mt-[30px] mb-[40px]">
          <h3 className=" text-2xl font-abc font-medium tracking-widest">
            EDUCATION & SKILLS
          </h3>
          <div className="flex  items-center">
            <div className=" bg-green2 w-[100px] h-[1px] p-[1px]"></div>
            <div className="bg-green2  rounded-full w-[6px] h-[6px] p-[2px]"></div>
          </div>
        </div>
        <div className=" grid md:grid-cols-3 gap-8">
          <div className=" grid md:col-span-1 space-y-2">
            <div className=" bg-[#ECECEC] bg-opacity-50 p-4 rounded-lg space-y-2">
              <div className=" w-1/2 rounded flex items-center justify-center bg-green2 text-[#fff]">
                <p className=" font-jose ">2017-2021</p>
              </div>
              <div>
                <p className=" font-Robbi font-bold ">Ph.D in Horriblensess</p>
                <p className=" text-text1  text-sm font-normal  font-Robbi">
                  ABC University, Los Angeles, CA
                </p>
              </div>
            </div>
            <div className=" bg-[#ECECEC] bg-opacity-50 p-4 rounded-lg space-y-2">
              <div className=" w-1/2 rounded flex items-center justify-center bg-green2 text-[#fff]">
                <p className=" font-jose ">2017-2021</p>
              </div>
              <div>
                <p className=" font-Robbi font-bold ">Ph.D in Horriblensess</p>
                <p className=" text-text1  text-sm font-normal  font-Robbi">
                  ABC University, Los Angeles, CA
                </p>
              </div>
            </div>
            <div className=" bg-[#ECECEC] bg-opacity-50 p-4 rounded-lg space-y-2">
              <div className=" w-1/2 rounded flex items-center justify-center bg-green2 text-[#fff]">
                <p className=" font-jose ">2017-2021</p>
              </div>
              <div>
                <p className=" font-Robbi font-bold ">Ph.D in Horriblensess</p>
                <p className=" text-text1  text-sm font-normal  font-Robbi">
                  ABC University, Los Angeles, CA
                </p>
              </div>
            </div>
          </div>
          <div className=" grid md:col-span-2">
            <div>
              <h3 className="mb-4 font-Robbi font-semibold text-xl">
                My skills
              </h3>
              <p className=" font-jose  text-base text-text1">
                I'm a Freelancer Front-end Developer with over 3 years of
                experience. I code and create web elements for amazing people
                around the world. I like work with new people. New people new
                Experiences.
              </p>
              <div className="mt-5 space-y-1">
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
