import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between p-4 lg:px-8" id="main-header">
      <span className="inline-flex w-14 h-14 font-bold text-xl justify-center items-center text-center text-front border-2 border-solid border-front rounded-full  ">
        AS
      </span>

      <div className="ml-auto flex-row hidden lg:flex">
        <button className="flex w-14 cursor-pointer h-14 ml-4 font-semibold px-2 bg-yellow-400 rounded-full justify-center items-center leading-tight lg:w-auto lg:h-auto lg:px-6 lg:py-2 lg:rounded-lg lg:self-start lg:mt-4 hover:opacity-75 transition-opacity duration-150">
          <span className="hidden lg:block">Work History </span>{" "}
        </button>{" "}
        <button className="flex w-14 cursor-pointer h-14 ml-4 font-semibold px-2 bg-yellow-400 rounded-full justify-center items-center leading-tight lg:w-auto lg:h-auto lg:px-6 lg:py-2 lg:rounded-lg lg:self-start lg:mt-4 hover:opacity-75 transition-opacity duration-150">
          <span className="hidden lg:block">Work History </span>{" "}
        </button>
      </div>

      <div className="ml-auto flex-row lg:hidden flex">
        <button className="flex w-14 h-14 ml-4 font-header cursor-pointer font-semibold px-2 bg-lead rounded-full text-lead-text justify-center items-center leading-tight lg:w-auto lg:h-auto lg:px-6 lg:py-2 lg:rounded-lg lg:self-start lg:mt-4 transition-opacity duration-150">
          <div className="" id="nav-icon3">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <div className="menu shadow-md bg-white w-[260px] " id="side_cart">
        <ul>
          <li aria-hidden="true">
            <span className="uppercase mt-0 text-xs">work history</span>
          </li>
          <li aria-hidden="true">work history</li>
          <li aria-hidden="true">work history</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
