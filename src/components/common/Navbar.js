import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, settheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSwitch = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="px-[30px]  mx-auto">
        <div className=" flex justify-between items-center">
          <div className="flex items-center gap-3">
            <i class="fa-brands fa-strava text-4xl text-[#B3005E] "></i>
            <h2 className=" py-5 font-bold  font-logo text-xl dark:text-[#fff]">
              M
              <span>
                <i class="fa-brands  fa-autoprefixer text-[#B3005E] "></i>
              </span>
              JUMDAR
            </h2>
          </div>
          <div
            className="w-[35px] h-[35px] bg-[#fff] flex items-center justify-center rounded-full"
            onClick={handleSwitch}
          >
            <i class="fa-regular fa-moon  text-balck text-lg dark:text-[#FFAE42]"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
