import React from "react";

const User = () => {
  return (
    <>
      {/* About me */}
      <div className="space-y-2   md:space-y-4">
        <div className=" flex items-center">
          <h1 className=" text-3xl md:text-5xl dark:text-[#fff]  font-jose font-semibold">
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
      {/* what can i do */}
      <div>
        <div className="my-5">
          <div className="mt-[30px] mb-[40px]">
            <h3 className=" text-2xl md:text-3xl dark:text-[#fff] font-abc font-medium tracking-widest capitalize">
              what i do!
            </h3>
            <div className="flex  items-center">
              <div className=" bg-green2 w-[100px] h-[1px] p-[1px]"></div>
              <div className="bg-green2  rounded-full w-[6px] h-[6px] p-[2px]"></div>
            </div>
          </div>
        </div>
        <div className=" grid md:grid-cols-2 gap-4">
          <div className=" bg-[#EFA3C8] dark:bg-blackbg border-[#EFA3C8] border-[1.8px] dark:border-btnbg  bg-opacity-25 p-5 flex items-baseline gap-3 rounded-lg">
            <i class="fa-solid fa-code text-[#7286D3] text-3xl"></i>
            <div className=" space-y-2">
              <p className=" text-lg dark:text-[#E5E5CB] md:text-xl  font-Robbi font-semibold">
                Web Development
              </p>
              <p className="text-text1 font-Robbi  leading-loose tracking-wide">
                Lorem ipsum dolor sit adipiscing elit, sed diam euismod
                consectetuer volutpat.
              </p>
            </div>
          </div>
          <div className=" bg-[#EFA3C8] dark:bg-blackbg border-[#EFA3C8] border-[1.8px] dark:border-btnbg  bg-opacity-25 p-5 flex items-baseline gap-3 rounded-lg">
            <i class="fa-solid fa-code text-[#7286D3] text-3xl"></i>
            <div className=" space-y-2">
              <p className=" text-lg dark:text-[#E5E5CB] md:text-xl  font-Robbi font-semibold">
                Web Development
              </p>
              <p className="text-text1 font-Robbi  leading-loose tracking-wide">
                Lorem ipsum dolor sit adipiscing elit, sed diam euismod
                consectetuer volutpat.
              </p>
            </div>
          </div>
          <div className=" bg-[#EFA3C8] dark:bg-blackbg border-[#EFA3C8] border-[1.8px] dark:border-btnbg  bg-opacity-25 p-5 flex items-baseline gap-3 rounded-lg">
            <i class="fa-solid fa-code text-[#7286D3] text-3xl"></i>
            <div className=" space-y-2">
              <p className=" text-lg dark:text-[#E5E5CB] md:text-xl  font-Robbi font-semibold">
                Web Development
              </p>
              <p className="text-text1 font-Robbi  leading-loose tracking-wide">
                Lorem ipsum dolor sit adipiscing elit, sed diam euismod
                consectetuer volutpat.
              </p>
            </div>
          </div>
          <div className=" bg-[#EFA3C8] dark:bg-blackbg bg-opacity-25 p-5 flex items-baseline gap-3 border-[#EFA3C8] border-[1.8px] dark:border-btnbg rounded-lg">
            <i class="fa-solid fa-code text-[#7286D3] text-3xl"></i>
            <div className=" space-y-2">
              <p className=" text-lg dark:text-[#E5E5CB] md:text-xl  font-Robbi font-semibold">
                Web Development
              </p>
              <p className="text-text1 font-Robbi  leading-loose tracking-wide">
                Lorem ipsum dolor sit adipiscing elit, sed diam euismod
                consectetuer volutpat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="my-5">
          <h1 className=" text-2xl md:text-4xl dark:text-[#fff] font-jose font-medium ">
            My Client!
          </h1>
        </div>
      </div>
    </>
  );
};

export default User;
