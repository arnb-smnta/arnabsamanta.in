import React from "react";
import {
  about,
  blogItems,
  certificates,
  projects,
  socialLinks,
  toolsAPlatforms,
  topSkills,
} from "../constants";

const Main = () => {
  return (
    <div className="lg:col-span-8 lg:pl-10 lg:overflow-y-auto lg:max-h-screen">
      <div className="pb-8">
        <div className="lg:w-full pr-4 lg:pr-12 border-r-2 border-gray-200">
          <h1 className="font-semibold text-xl">CURRENT POSITION</h1>
          <h2 className="text-2xl loading-tight">Student at IGNOU</h2>
          <div className="font-semibold text-sm uppercase pt-2">
            <span className="inline-block w-3 h-3 rounded-full mr-1 bg-green-500"></span>
            Available for Internship
          </div>
        </div>
      </div>
      <h1 id="skills" className="uppercase font-semibold text-xs text-gray-700">
        Top Skills
      </h1>
      <div className="md:grid md:grid-cols-12 mb-8">
        <div className="md:col-span-9 flex flex-wrap">
          {topSkills.map((item, index) => (
            <div
              key={index}
              className="bg-blue-500 sm:h-28 sm:w-28 w-14 h-14 rounded-full flex justify-center items-center m-2"
            >
              <p className="text-white text-center text-xs">{item}</p>
            </div>
          ))}
        </div>
        <div className="md:col-span-3">
          <h5 className="font-semibold mb-3 text-gray-700">
            TOOLS & PLATFORMS
          </h5>
          <ul>
            {toolsAPlatforms.map((item, index) => (
              <li
                key={index}
                className="inline-block md:block mb-1 mr-1 md:mr-0"
              >
                <span className="inline-block subpixel-antialiased bg-yellow-300 px-3 py-1 text-xs md:text-2xl">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="About-section mb-8 text-xs">
        <h5 className="pb-8 whitespace-pre-line">ABOUT</h5>
        <div className="subpixel-antialiased">{about}</div>
      </div>
      <div className="projects-section mb-8" id="projects">
        <div>
          <h4 className="font-semibold uppercase mb-3 text-xs" id="projects">
            Projects
          </h4>
        </div>
        {projects.map((item) => (
          <div
            className="flex-1 project-items bg-white border border-solid shadow-lg mb-6 p-6 rounded-lg"
            key={item._id}
          >
            <div className="flex justify-start items-center gap-2">
              <div className="border border-solid border-gray-200 aspect-square shadow-xl p-1 rounded-sm sm:w-16 sm:h-16 h-12 w-12 flex-shrink-0 justify-center overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={`${item.pic}`}
                  alt=""
                />
              </div>
              <div className="w-full">
                <h4 className="font-bold text-xs">{item.name}</h4>
                <a
                  className="italic font-bold underline break-all hover:opacity-75 transition-opacity duration-150 text-xs"
                  href={`${item.sourceCode}`}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Source Code
                </a>
                <br />
                <a
                  className="underline break-all hover:opacity-75 transition-opacity duration-150 text-xs"
                  href={`${item.projectLink}`}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Project Link
                </a>
              </div>
            </div>
            <div>
              <p className="w-full py-4 whitespace-pre-line text-[10px]">
                {item.overview}
              </p>
            </div>
            <div>
              <ul className="pr-2">
                <li className="inline-block px-3 sm:py-1 py-0.5 mr-1 mt-1 font-medium rounded-lg border border-black text-[10px]">
                  <span className="inline-block w-2 h-2 rounded-full mr-2 bg-green-500"></span>
                  Status:Live
                </li>
                {item.techsUsed.map((tech) => (
                  <li
                    key={tech}
                    className="inline-block px-3 sm:py-1 py-0.5 mr-1 mt-1 font-medium rounded-lg border border-black text-[10px]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <small className="italic underline text-gray-700 font-semibold w-full inline-flex justify-end items-end gap-1">
          View more of my work on my{" "}
          <a
            href={`${socialLinks.github}`}
            className="text-blue-500"
            target="_blank"
          >
            github
          </a>{" "}
          profile .
        </small>
      </div>

      <div className="Certificates" id="Certificates">
        <div>
          <h5 className="font-semibold text-front text-sm uppercase my-3">
            Certificates
          </h5>
        </div>
        <div className="certificates-list">
          {certificates.map((cert) => (
            <div
              key={cert._id}
              className="border-t-4 border-line relative flex flex-wrap bg-white p-4 lg:p-8 bg-no-repeat text-sm mb-6 shadow-xl"
            >
              <div className="w-full pb-4 lg:w-2/5 lg:pr-8 lg:pb-0">
                <img
                  src={`${cert.pic}`}
                  alt=""
                  className="border border-spacing-1 border-gray-300"
                />
              </div>
              <div className="lg:flex-1">
                <h4 className="font-bold">{cert.certficateName} </h4>
                <a
                  className="underline break-all hover:opacity-75 transition-opacity duration-150"
                  rel="noreferrer noopener"
                  href={`${cert.certificateUrl}`}
                  target="_blank"
                >
                  Credential URL{" "}
                </a>
                <p className="w-full whitespace-pre-line">{cert.issuerName}</p>
                <p className="w-full whitespace-pre-line">{cert.validity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="Articles mb-3 mt-1" id="Articles">
        <h1 className=" font-semibold text-black text-sm uppercase">
          Articles
        </h1>
        <div>
          {blogItems.map((article) => (
            <div
              key={article._id}
              className="border-t-4 border-line relative flex flex-wrap bg-white p-4 lg:p-8 bg-no-repeat text-sm mb-6 shadow-xl"
            >
              <div className="w-full lg:w-3/6 lg:pr-8 lg:pb-0">
                <img
                  className="border-white p-1 border-2"
                  src={article.img}
                  alt={article.name}
                />
              </div>

              <div className="lg:flex-1">
                <h4 className="font-bold mt-2 lg:mt-0"> {article.name}</h4>
                <a
                  className="underline break-all hover:opacity-75 transition-opacity duration-150"
                  href={article.articleLink}
                  target="_blank"
                >
                  Read the Article
                </a>
                <p className="w-full my-3">{article.description}</p>
                <ul className="pr-2">
                  {article.techs.map((items) => (
                    <li
                      key={items}
                      className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-gray-200"
                    >
                      {items}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
