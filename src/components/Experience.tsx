import React, { useState } from "react";
import Reveal from "./Reveal";
import HackerTextEffect from "./HackerTextEffect";

const Experience: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  const handleMouseEnter = (iconName: string) => {
    setHovered(iconName);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="containerLayout">
      <div className="flex flex-col gap-y-5">
        <Reveal>
          <h1 className="text-white text-7xl font-Anton">
            <HackerTextEffect>Experience</HackerTextEffect>
          </h1>
        </Reveal>
        <ul className="text-[#f4d98e] flex">
          <li
            onMouseEnter={() => handleMouseEnter("planet")}
            onMouseLeave={handleMouseLeave}
            className="absolute top-96"
          >
            <img src="/planet1.gif" className="w-48 h-48" />
            {hovered === "planet" && (
              <span className="absolute p-1 text-center">
                Self-taught web development before starting comsci at unsw
              </span>
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter("ufo")}
            onMouseLeave={handleMouseLeave}
            className="absolute top-48 right-48 "
          >
            <img src="/ufo.gif" className="w-32 h-32" />
            {hovered === "ufo" && (
              <span className="absolute p-1 text-center rounded-lg">
                6 month software engineering internship at a startup @
                <a
                  href="https://www.linkedin.com/in/patrick-tang-truong-274042207/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="underline"> more info on my linkedin!</span>
                </a>
              </span>
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter("meteor")}
            onMouseLeave={handleMouseLeave}
            className="absolute bottom-24 left-96"
          >
            <img src="/metero.gif" className="h-36 w-36" />
            {hovered === "meteor" && (
              <span className="absolute p-1 text-center ">
                Competed in the 2024 Blueprint hackathon
              </span>
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter("milkyway")}
            onMouseLeave={handleMouseLeave}
            className="absolute bottom-20 right-48"
          >
            <img src="/milkway.gif" className="w-64 h-64" />
            {hovered === "milkyway" && (
              <span className="absolute flex flex-col p-1 text-center rounded-lg">
                <span className="font-bold">Comp subjects completed:</span>
                comp1511, comp2521, comp1531
              </span>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
