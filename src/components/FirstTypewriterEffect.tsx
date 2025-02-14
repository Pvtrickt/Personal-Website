import TitleTypeWriterEffect from "./TypewriterEffect";
import { useTypewriter } from "react-simple-typewriter";

const FirstTypewriterEffect = () => {
  const [text] = useTypewriter({
    words: ["Hi, my name is"],
  });

  return (
    <div>
      <TitleTypeWriterEffect text={text} />
    </div>
  );
};

export default FirstTypewriterEffect;
