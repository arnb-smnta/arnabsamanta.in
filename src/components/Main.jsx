import React from "react";
import {
  about,
  blogItems,
  certificates,
  profile,
  projects,
  socialLinks,
  toolsAPlatforms,
  topSkills,
} from "../constants";

const Main = () => {
  return (
    <div className="lg:col-span-8 lg:pl-10 lg:overflow-y-auto lg:max-h-screen p-4">
      {/* Current Position Section */}
      <section className="pb-8 border-b border-gray-200">
        <h1 className="text-xl font-semibold">CURRENT POSITION</h1>
        <h2 className="text-2xl font-bold mt-2">{profile.currentPosition}</h2>
        <div className="flex items-center text-sm font-semibold uppercase pt-2">
          <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
          Available for Internship
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-8">
        <h1
          id="skills"
          className="uppercase font-semibold text-xs text-gray-700"
        >
          Top Skills
        </h1>
        <div className="md:grid md:grid-cols-12 gap-4 mt-4">
          <div className="md:col-span-9 flex flex-wrap gap-3">
            {topSkills.map((item, index) => (
              <div
                key={index}
                className="bg-blue-500 h-20 w-20 md:h-28 md:w-28 rounded-full flex justify-center items-center"
              >
                <p className="text-white text-center text-xs md:text-sm">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <div className="md:col-span-3">
            <h5 className="font-semibold mb-3 text-gray-700">
              Tools & Platforms
            </h5>
            <ul className="flex flex-wrap gap-2">
              {toolsAPlatforms.map((item, index) => (
                <li
                  key={index}
                  className="bg-yellow-300 px-3 py-1 rounded text-xs md:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mt-8">
        <h5 className="font-semibold text-gray-700 uppercase text-sm mb-4">
          About
        </h5>
        <p className="text-sm text-gray-600 leading-relaxed">{about}</p>
      </section>

      {/* Projects Section */}
      <section className="mt-8" id="projects">
        <h4 className="font-semibold uppercase text-xs text-gray-700 mb-4">
          Projects
        </h4>
        {projects.map((item) => (
          <div
            key={item._id}
            className="bg-white border shadow-md rounded-lg p-4 mb-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 border border-gray-200 rounded-sm overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={item.pic}
                  alt={item.name}
                />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm">{item.name}</h4>
                <div className="flex flex-col gap-1 mt-1 text-xs text-gray-700">
                  <a
                    href={item.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline hover:text-blue-500"
                  >
                    Source Code
                  </a>
                  <a
                    href={item.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-500"
                  >
                    Project Link
                  </a>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-4">{item.overview}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 text-xs font-medium border rounded border-black">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                Status: Live
              </span>
              {item.techsUsed.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium border rounded border-black"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
        <small className="italic underline text-gray-700 font-semibold block mt-4">
          View more of my work on my{" "}
          <a
            href={socialLinks.github}
            className="text-blue-500"
            target="_blank"
          >
            GitHub
          </a>{" "}
          profile.
        </small>
      </section>

      {/* Certificates Section */}
      <section className="mt-8" id="certificates">
        <h5 className="font-semibold text-sm uppercase text-gray-700 mb-4">
          Certificates
        </h5>
        <div className="grid md:grid-cols-2 gap-4">
          {certificates.map((cert) => (
            <div
              key={cert._id}
              className="bg-white border shadow-md rounded-lg p-4"
            >
              <img
                src={cert.pic}
                alt={cert.certficateName}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h4 className="font-bold text-sm">{cert.certficateName}</h4>
              <a
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-sm text-blue-500 hover:text-blue-700"
              >
                Credential URL
              </a>
              <p className="text-xs text-gray-600 mt-1">{cert.issuerName}</p>
              <p className="text-xs text-gray-600">{cert.validity}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Articles Section */}
      <section className="mt-8">
        <h1 className="font-semibold uppercase text-sm text-gray-700 mb-4">
          Articles
        </h1>
        {blogItems.map((article) => (
          <div
            key={article._id}
            className="bg-white border shadow-md rounded-lg p-4 mb-6"
          >
            <img
              src={article.img}
              alt={article.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h4 className="font-bold text-sm">{article.name}</h4>
            <a
              href={article.articleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-sm text-blue-500 hover:text-blue-700"
            >
              Read the Article
            </a>
            <p className="text-xs text-gray-600 mt-2">{article.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {article.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium border rounded border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Main;
