import { useTypewriter, Cursor } from "react-simple-typewriter";

const TitleTypeWriter = (children: any) => {
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
    <div>
      <span>
        {children} {text}
      </span>
      <Cursor />
    </div>
  );
};

export default TitleTypeWriter;
