import React from "react";

const User = () => {
  return (
    <>
      {/* About me */}
      <div className="space-y-2   md:space-y-4">
        <div className=" flex items-center">
          <h1 className=" text-xl md:text-3xl dark:text-[#fff]  font-jose font-semibold">
            About me
          </h1>

          <div className=" ml-4 bg-btnbg w-1/4 p-[1px]"></div>
          <div className="bg-btnbg  rounded-full w-[8px] h-[8px] p-[2px]"></div>
        </div>
        <div className=" space-y-1 md:space-y-2">
          <p className=" font-jose  text-base text-[#1A120B] dark:text-dtext1">
            I am a hard working individual web developer with deep knowledge and
            proficiency in front-end technology as well as the ability to
            communicate effectively in a team setting, and possessing a strong
            willingness to learn about modern web technologies.
          </p>
        </div>
      </div>
      {/* My Interests */}

      <div className="mt-[30px] mb-[20px]">
        <h3 className=" uppercase text-lg md:text-xl dark:text-[#fff] font-abc font-medium  ">
          My Interests
        </h3>
        <div className="flex  items-center">
          <div className=" bg-green2 w-[45px] h-[1px] p-[1px]"></div>
          <div className="bg-green2  rounded-full w-[6px] h-[6px] p-[2px]"></div>
        </div>
        <div className="mt-[10px] flex justify-between items-center ">
          <div className=" flex items-center justify-center gap-2">
            <i class="fa-solid fa-plane-departure text-[19px] dark:text-[#fff]  text-btnbg"></i>
            <p className=" font-Robbi dark:text-dtext1">Travel</p>
          </div>
          <div className=" flex items-center justify-center gap-2">
            <i class="fa-solid fa-code text-[19px] dark:text-[#fff]  text-btnbg"></i>
            <p className=" font-Robbi dark:text-dtext1">Coding</p>
          </div>
          <div className=" flex items-center justify-center gap-2">
            <i class="fa-solid fa-drumstick-bite text-[19px] dark:text-[#fff]  text-btnbg"></i>
            <p className=" font-Robbi dark:text-dtext1">Eating</p>
          </div>
          <div className=" flex items-center justify-center gap-2">
            <i class="fa-solid fa-baseball-bat-ball text-[19px] dark:text-[#fff]  text-btnbg"></i>
            <p className=" font-Robbi dark:text-dtext1">Playing</p>
          </div>
        </div>
      </div>

      {/* Card Three */}
      <div className="mt-[45px] grid grid-cols-3 gap-3">
        <div className=" bg-[#d3f4ec] rounded-md  p-4 flex flex-col justify-center items-center ">
          <h2 className=" font-Robbi text-[30px] font-semibold "> 3+ </h2>
          <p className=" font-abc text-lg uppercase "> Years of Experience</p>
        </div>
        <div className=" bg-[#fce8d4] rounded-md  p-4 flex flex-col justify-center items-center ">
          <h2 className=" font-Robbi text-[30px] font-semibold "> 30+ </h2>
          <p className=" font-abc text-lg uppercase"> PROJECTS COMPLETED</p>
        </div>
        <div className=" bg-[#e3f9e0] rounded-md  p-4 flex flex-col justify-center items-center ">
          <h2 className=" font-Robbi text-[30px] font-semibold "> 10+ </h2>
          <p className=" font-abc text-lg "> HAPPY CLIENTS </p>
        </div>
      </div>

      {/* Experience */}

      <div className=" mt-[30px] bg-[#f3f9ff] dark:bg-blackbg p-5">
        <h3 className=" text-lg md:text-xl dark:text-[#fff] font-abc font-medium  capitalize">
          EXPERIENCE
        </h3>
        <div className="flex  items-center">
          <div className=" bg-green2 w-[45px] h-[1px] p-[1px]"></div>
          <div className="bg-green2  rounded-full w-[6px] h-[6px] p-[2px]"></div>
        </div>

        <div className=" mt-[20px] grid grid-cols-2 gap-3 ">
          <div className=" space-y-2 dark:bg-tran bg-[#fff] border p-4 border-[#f9fafc]">
            <div className=" flex justify-between text-center">
              <h4 className=" text-[#FF972D] text-[16px] font-semibold">
                2018 - Present
              </h4>
              <p className=" font-medium text-text2">-Envato Market</p>
            </div>
            <h3 className=" text-[19px] text-text2 font-abc">Web Developer</h3>
            <p className=" font-thin text-text1 ">
              Website development is the process of building, programming,
              coding and maintaining websites and web applications.
            </p>
          </div>
          <div className=" space-y-2 bg-[#fff] border p-4 border-[#f9fafc]">
            <div className=" flex justify-between text-center">
              <h4 className=" text-[#FF972D] text-[16px] font-semibold">
                2018 - Present
              </h4>
              <p className=" font-medium text-text2">-Envato Market</p>
            </div>
            <h3 className=" text-[19px] text-text2 font-abc">Web Developer</h3>
            <p className=" font-thin text-text1 ">
              Website development is the process of building, programming,
              coding and maintaining websites and web applications.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
