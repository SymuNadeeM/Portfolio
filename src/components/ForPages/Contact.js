import React from "react";
import mapPic from "../../Images/map.png";

const Contact = () => {
  return (
    <>
      <div>
        <div className=" flex items-center">
          <h1 className=" text-xl md:text-3xl dark:text-[#fff]  font-jose font-semibold">
            Contact
          </h1>

          <div className=" ml-4 bg-btnbg w-1/4 p-[1px]"></div>
          <div className="bg-btnbg  rounded-full w-[8px] h-[8px] p-[2px]"></div>
        </div>
        <div className="mt-[50px] ">
          <h3 className="text-lg md:text-xl font-abc dark:text-[#fff] font-medium">
            Get In Touch
          </h3>
          <div className="flex  items-center">
            <div className=" bg-green2 w-[40px] h-[1px] p-[1px]"></div>
            <div className="bg-green2  rounded-full w-[6px] h-[6px] p-[2px]"></div>
          </div>
        </div>
        <div className=" mt-[30px] grid md:grid-cols-5 gap-2 ">
          <div className=" grid md:col-span-2 ">
            <div className="p-6 dark:text-dtext1">
              <p className="tracking-wide text-sm  uppercase  font-Robbi">
                Always available for freelancing if the right project comes
                along, Feel free to contact me.
              </p>

              <div className="mt-[35px] space-y-3">
                <div className=" flex  items-baseline gap-3">
                  <i class="fa-solid fa-location-dot  text-green2"></i>
                  <p className=" font-jose  text-sm">
                    23 Stree New York City , United States Of America 750065
                  </p>
                </div>
                <div className=" flex items-center   gap-3">
                  <i class="fa-solid fa-envelope-open-text text-green2"></i>
                  <p className=" font-jose  text-sm">msymunnadeem@gmail.com</p>
                </div>
                <div className=" flex items-center   gap-3">
                  <i class="fa-solid fa-earth-americas text-green2"></i>
                  <p className=" font-jose  text-sm">
                    https://cvproject-324b7.web.app
                  </p>
                </div>
                <div className=" flex items-center   gap-3">
                  <i class="fa-solid fa-mobile-screen text-green2"></i>
                  <p className=" font-jose  text-sm">+88 0153 751 5034</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" grid col-span-3 p-4">
            <form action="" className="p-2 space-y-5">
              <div className=" flex items-center justify-center gap-4">
                <input
                  type="text"
                  className=" w-1/2   dark:bg-[#fff] border-green dark:border-none  border px-[10px] py-[7px] outline-none"
                  placeholder="Name *"
                />
                <input
                  type="email"
                  className=" w-1/2   dark:bg-[#fff] border-green dark:border-none  border px-[10px] py-[7px] outline-none"
                  placeholder="Email *"
                />
              </div>
              <div>
                <input
                  type="text"
                  className=" w-full   dark:bg-[#fff] border-green dark:border-none  border px-[10px] py-[7px] outline-none"
                  placeholder="Subject *"
                />
              </div>
              <div>
                <textarea
                  name=""
                  id=""
                  cols=""
                  rows="5"
                  className="w-full border-green dark:border-none   dark:bg-[#fff] border px-[10px] py-[7px] outline-none"
                ></textarea>
              </div>
              <button className=" bg-green2 text-sm font-Robbi text-[#fff] py-2 px-5 hover:bg-btnbg  duration-200">
                Send message
              </button>
            </form>
          </div>
        </div>
        <div className="mt-[40px]">
          <img src={mapPic} className=" rounded-md w-full h-[300px]" />
        </div>
      </div>
    </>
  );
};

export default Contact;
