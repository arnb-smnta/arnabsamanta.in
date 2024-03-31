import React, { useEffect, useRef, useState } from "react";
import { headerItems } from "../constants";

const Header = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const menuButtonClicked = (e) => {
    e.stopPropagation();
    setmenuOpen(!menuOpen);
  };
  let menuref = useRef();

  useEffect(() => {
    function handler(e) {
      if (!menuref.current.contains(e.target)) {
        setmenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  return (
    <div className="flex justify-between p-4 lg:px-8" id="main-header">
      <span className="inline-flex w-14 h-14 font-bold text-xl justify-center items-center text-center text-front border-2 border-solid border-front rounded-full  ">
        AS
      </span>

      <div className="ml-auto flex-row hidden lg:flex">
        {headerItems.map((item) => (
          <a href={`#${item.cred}`} key={item._id} id="scroll-link">
            <button className="flex w-14 cursor-pointer h-14 ml-4 font-semibold px-2 bg-yellow-400 rounded-full justify-center items-center leading-tight lg:w-auto lg:h-auto lg:px-6 lg:py-2 lg:rounded-lg lg:self-start lg:mt-4 hover:opacity-75 transition-opacity duration-150">
              <span className="hidden lg:block">{item.name} </span>{" "}
            </button>
          </a>
        ))}
      </div>

      <div className="ml-auto flex-row lg:hidden flex">
        <div className="h-14 w-14">
          <img src="/public/menu.png" onClick={menuButtonClicked} alt="" />
        </div>
      </div>

      {menuOpen ? (
        <div className="w-full flex absolute justify-end mt-14 pr-14">
          <div
            className="menu shadow-md bg-white  w-[150px] absolute p-4 rounded-xl"
            id="side_cart"
            ref={menuref}
          >
            <ul>
              {headerItems.map((item) => (
                <a
                  href={`#${item.cred}`}
                  key={item._id}
                  id="scroll-link"
                  onClick={menuButtonClicked}
                >
                  <li
                    aria-hidden="true"
                    className="hover:bg-blue-400 rounded-xl"
                  >
                    <span className="uppercase mt-0 text-xs">{item.name}</span>
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
