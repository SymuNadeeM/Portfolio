import React from "react";

const Contact = () => {
  return (
    <>
      {/* bg-[#ECECEC] bg-opacity-50  */}
      <div>
        <div className=" flex items-center">
          <h1 className=" text-3xl md:text-5xl  font-jose font-semibold">
            Contact
          </h1>

          <div className=" ml-4 bg-btnbg w-1/4 p-[1px]"></div>
          <div className="bg-btnbg  rounded-full w-[8px] h-[8px] p-[2px]"></div>
        </div>
        <div className="mt-[30px] mb-[40px]">
          <h3 className=" text-2xl font-abc font-medium   capitalize">
            GET IN TOUCH.
          </h3>
          <div className="flex  items-center">
            <div className=" bg-green2 w-[80px] h-[1px] p-[1px]"></div>
            <div className="bg-green2  rounded-full w-[6px] h-[6px] p-[2px]"></div>
          </div>
        </div>
        <div className=" grid md:grid-cols-5 gap-2 ">
          <div className=" grid md:col-span-2 ">
            <div className="p-6">
              <p className="tracking-wide text-sm  font-bold  font-Robbi">
                Always available for freelancing if the right project comes
                along, Feel free to contact me.
              </p>

              <div className="mt-[30px] space-y-3">
                <div className=" flex  items-baseline gap-3">
                  <i class="fa-solid fa-location-dot  text-green2"></i>
                  <p className=" font-jose font-semibold text-sm">
                    23 Stree New York City , United States Of America 750065
                  </p>
                </div>
                <div className=" flex items-center   gap-3">
                  <i class="fa-solid fa-envelope-open-text text-green2"></i>
                  <p className=" font-jose font-semibold text-sm">
                    msymunnadeem@gmail.com
                  </p>
                </div>
                <div className=" flex items-center   gap-3">
                  <i class="fa-solid fa-mobile-screen text-green2"></i>
                  <p className=" font-jose font-semibold text-sm">
                    +88 0153 751 5034
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" grid col-span-3 p-4">
            <form action="" className="p-2 space-y-5">
              <div className=" flex items-center justify-center gap-4">
                <input
                  type="text"
                  className=" w-1/2 border-green2 border px-[10px] py-[7px] outline-none"
                  placeholder="Name *"
                />
                <input
                  type="email"
                  className=" w-1/2 border-green2 border px-[10px] py-[7px] outline-none"
                  placeholder="email *"
                />
              </div>
              <div>
                <input
                  type="text"
                  className=" w-full border-green2 border px-[10px] py-[7px] outline-none"
                  placeholder="Subject *"
                />
              </div>
              <div>
                <textarea
                  name=""
                  id=""
                  cols=""
                  rows="5"
                  className="w-full border-green2 border px-[10px] py-[7px] outline-none"
                ></textarea>
              </div>
              <button className=" bg-green2 text-sm font-Robbi text-[#fff] py-2 px-5 hover:bg-btnbg  duration-200">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
