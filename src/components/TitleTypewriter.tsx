import TypeWriterEffect from "./TypewriterEffect";
import { useTypewriter } from "react-simple-typewriter";

const TitleTypeWriter = () => {
  const [text] = useTypewriter({
    words: [
      "software engineer",
      "web developer",
      "problem solver",
      "lifetime student",
    ],
    loop: 0,
  });

  return (
    <span>
      <TypeWriterEffect staticText={"I'm a"} text={text} ifCursor={true} />
    </span>
  );
};

export default TitleTypeWriter;
