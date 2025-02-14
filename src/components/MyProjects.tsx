import React from "react";
import Reveal from "./Reveal";
import HackerTextEffect from "./HackerTextEffect";
import {
  faBookOpen,
  faCode,
  faVolleyball,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";

library.add(faVolleyball, faBookOpen, faCode);

const MyProjects: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  const handleMouseEnter = (iconName: string) => {
    setHovered(iconName);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };
  return (
    <div className="containerLayout">
      <div className="flex flex-col gap-y-6">
        <Reveal>
          <h1 className="text-6xl text-white font-Anton">
            <HackerTextEffect>Projects</HackerTextEffect>
          </h1>
        </Reveal>

        <ul className="text-[#f4d98e] flex">
          <li
            onMouseEnter={() => handleMouseEnter("planet")}
            onMouseLeave={handleMouseLeave}
            className="absolute flex flex-col items-center top-[400px] right-[900px]"
          >
            <img
              src="/dictionary screenshot.png"
              className="w-[55%] h-[55%] rounded-full"
            />
            {hovered === "planet" && (
              <a href="https://dictionary-pvtrickt.vercel.app/" target="_blank">
                <span className="flex flex-row items-center p-1 underline rounded-lg 40 gap-x-2">
                  <FontAwesomeIcon
                    icon={faBookOpen}
                    style={{ color: "#f4d98e" }}
                  />
                  A dictionary web app
                </span>
              </a>
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter("ufo")}
            onMouseLeave={handleMouseLeave}
            className="absolute top-48 right-10 "
          >
            <img src="/schedulaIcon.png" className="w-[50%] h-[50%]" />
            {hovered === "ufo" && (
              <a href="https://devpost.com/software/unitasker">
                <span className="flex items-center underline gap-x-2">
                  <FontAwesomeIcon icon={faCode} style={{ color: "#f4d98e" }} />
                  Schedula (Blueprint Hackathon Project)
                </span>
              </a>
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter("meteor")}
            onMouseLeave={handleMouseLeave}
            className="absolute bottom-[150px] left-[1000px]"
          >
            <img src="/haikyuu.png" className="h-[50%] w-[50%]" />
            {hovered === "meteor" && (
              <span className="absolute flex flex-row items-center p-1 rounded-lg 40 gap-x-2">
                <FontAwesomeIcon
                  icon={faVolleyball}
                  style={{ color: "#f4d98e" }}
                />
                A volleyball tournament stats web app - in progress
              </span>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyProjects;
