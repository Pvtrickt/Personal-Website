import React from "react";
import Reveal from "./Reveal";
import HackerTextEffect from "./HackerTextEffect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedin, faGithub, faInstagram);

const links = {
  githubURL: "https://github.com/Pvtrickt",
  linkedInUrl: "https://www.linkedin.com/in/patrick-tang-truong-274042207/",
  instagramUrl: "https://www.instagram.com/pvtrick.jpg/",
};
const ContactMe: React.FC = () => {
  return (
    <div className="containerLayout">
      <div className="flex flex-col gap-10 ">
        <Reveal>
          <h1 className="text-white text-7xl font-Anton">
            <HackerTextEffect>My Contacts</HackerTextEffect>
          </h1>
        </Reveal>

        <div className="w-auto h-auto text-white">
          <ul className="text-8xl w-[1000px] fixed">
            <li className="ml-[1000px]">
              <button>
                <a
                  href={links.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    beatFade
                    style={{ color: "#f4d98e" }}
                  />
                </a>
              </button>
            </li>
            <li className="mt-[10px] ml-[100px]">
              <button>
                <a
                  href={links.githubURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    beatFade
                    style={{ color: "#f4d98e" }}
                  />
                </a>
              </button>
            </li>
            <li className="mt-[180px] ml-[500px]">
              <button>
                <a
                  href={links.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    beatFade
                    style={{ color: "#f4d98e" }}
                  />
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
