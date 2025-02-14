import "./App.css";
import DisplayContent from "./components/DisplayContent";
import Navbar from "./components/Navbar";
import { createContext } from "react";
import { useState } from "react";
import WorldGif from "./components/WorldGif";
import useShootingStarCursor from "./components/ShootingStarCursor";
export const sectionInfo = createContext({});

function App() {
  const [selectedSection, setSelectedSection] = useState("headerContainer");

  const handleNavItemClick = (section: any) => {
    setSelectedSection(section);
  };

  useShootingStarCursor();

  return (
    <div className="flex flex-col items-center">
      <sectionInfo.Provider value={{ selectedSection, setSelectedSection }}>
        <div className="flex w-full">
          <Navbar onNavItemClick={handleNavItemClick} />
        </div>
        <DisplayContent />
        <WorldGif />
      </sectionInfo.Provider>
    </div>
  );
}

export default App;
