import { useState } from "react";
import HoverAnimations from "./HoverAnimation";
import NavItemAnimations from "./NavItemAnimations";
import Reveal from "./Reveal";

const Navbar: React.FC<{ onNavItemClick: (section: string) => void }> = ({
  onNavItemClick,
}) => {
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);
  const handleNavItemClick = (section: string) => {
    setActiveNavItem(section);
    onNavItemClick(section);
  };

  return (
    <nav className="z-30 flex items-center w-full h-20 px-10 text-white">
      <div className="flex">
        <Reveal>
          <NavItemAnimations>
            <HoverAnimations>
              <button
                onClick={() => {
                  handleNavItemClick("headerContainer");
                }}
              >
                <img src={"/Patrick Truong.png"} alt="logo" className="w-12" />
              </button>
            </HoverAnimations>
          </NavItemAnimations>
        </Reveal>
      </div>
      <ul className="flex justify-center w-full gap-20">
        <li className="flex">
          <HoverAnimations>
            <button
              className="text-xl font-Anton"
              onClick={() => {
                handleNavItemClick("aboutMe");
              }}
              style={{
                color: activeNavItem === "aboutMe" ? "#f4d98e" : "white",
              }}
            >
              About me
            </button>
          </HoverAnimations>
        </li>
        <li className="flex">
          <HoverAnimations>
            <button
              className="text-xl font-Anton"
              onClick={() => {
                handleNavItemClick("experience");
              }}
              style={{
                color: activeNavItem === "experience" ? "#f4d98e" : "white",
              }}
            >
              Experience
            </button>
          </HoverAnimations>
        </li>
        <li className="flex">
          <HoverAnimations>
            <button
              className="text-xl font-Anton "
              onClick={() => {
                handleNavItemClick("projects");
              }}
              style={{
                color: activeNavItem === "projects" ? "#f4d98e" : "white",
              }}
            >
              Projects
            </button>
          </HoverAnimations>
        </li>
        <li className="flex">
          <HoverAnimations>
            <button
              className="text-xl font-Anton "
              onClick={() => {
                handleNavItemClick("contactMe");
              }}
              style={{
                color: activeNavItem === "contactMe" ? "#f4d98e" : "white",
              }}
            >
              Contact me
            </button>
          </HoverAnimations>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
