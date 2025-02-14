import React, { useContext } from "react";
import HeaderContainer from "./HeaderContainer";
import AboutMe from "./AboutMe";
import Experiences from "./Experience";
import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";
import { sectionInfo } from "../App";
import { AnimatePresence, motion } from "framer-motion";

const DisplayContent: React.FC = () => {
  const { selectedSection }: any = useContext(sectionInfo);

  const renderSection = () => {
    switch (selectedSection) {
      case "headerContainer":
        return <HeaderContainer />;
      case "aboutMe":
        return <AboutMe />;
      case "experience":
        return <Experiences />;
      case "projects":
        return <MyProjects />;
      case "contactMe":
        return <ContactMe />;
      default:
        return null;
    }
  };
  return (
    <div className="z-50">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          className="z-50 flex"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DisplayContent;
