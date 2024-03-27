import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { RiAttachment2 } from "react-icons/ri";
import { SiMicrosoftoutlook } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Main from "./Main";
import { profile, socialLinks } from "../constants";
import Header from "./Header";
const Body = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="px-4 pt-4 my-8 mx-auto lg:max-w-screen-xl md:max-w-screen-sm lg:grid lg:grid-cols-12">
        <div className="lg:col-span-4 w-full lg:border-r lg:border-gray-300 border-line lg:px-6 xl:px-12  flex justify-center items-center">
          <div className="side-card min-h-screen">
            <h1 className="lg:text-2xl font-light mb-4 leading-none">
              {profile.typeOfDeveloper}
            </h1>
            <h1 className="font-extrabold text-front lg:text-5xl text-3xl leading-none mb-6 flex">
              {profile.firstName}&nbsp;
              <span className="font-light"> {profile.lastName}</span>
            </h1>

            <div className="realtive inline-block leading-none mb-6">
              <img
                src={`${profile.pic}`}
                alt="Profile Pic"
                className="rounded-full relative z-10 lg:w-40 w-32"
              />
              <div className="absolute  rounded-full bg-cyan-500 z-0 transform translate-x-12">
                {" "}
              </div>
            </div>
            <div>
              <div className="lg:text-xl text-xs p-1 lg:p-2 bg-black text-white font-bold inline-flex w-auto  mb-6 rounded-xl">
                <FaLocationDot
                  className="mt-1 mr-2"
                  style={{ color: "yellow" }}
                />{" "}
                <h1>|&nbsp; {profile.location}</h1>
              </div>
              <br />
              <a
                href={`${profile.resumeLink}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="w-auto lg:p-2 p-1 text-xs bg-black text-white lg:text-xl font-bold inline-flex cursor-pointer mb-6 rounded-xl">
                  <RiAttachment2
                    className="mt-1 mr-2"
                    style={{ color: "yellow" }}
                  />
                  <h1>|&nbsp; View Resume</h1>
                </div>
              </a>
            </div>
            <div>
              <h5 className="font-semibold text-sm mb-3">CONNECT</h5>

              <div className="w-4/5 flex mb-4">
                <a
                  href={`mailto:${socialLinks.mail}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div className="bg-black rounded-full w-16 h-16 flex justify-center items-center hover:animate-bounce cursor-pointer">
                    <SiMicrosoftoutlook
                      className=""
                      style={{ fontSize: 40, color: "white" }}
                    />
                  </div>
                </a>
                <a
                  href={`${socialLinks.linkedin}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div className="bg-white rounded-full w-16 h-16 flex justify-center items-center border-2 border-black hover:animate-spin cursor-pointer">
                    <FaLinkedinIn style={{ fontSize: 40, color: "black" }} />
                  </div>
                </a>
                <a
                  href={`${socialLinks.github}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div className="bg-black rounded-full w-16 h-16 flex justify-center items-center hover:animate-bounce cursor-pointer">
                    <FaGithub style={{ fontSize: 40, color: "white" }} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Main />
      </div>
    </div>
  );
};

export default Body;
