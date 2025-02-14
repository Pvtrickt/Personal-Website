import React from "react";
import { Cursor } from "react-simple-typewriter";

interface TitleTypeWriterEffectProps {
  text: string;
  staticText?: string;
  ifCursor?: boolean;
}

const TypeWriterEffect: React.FC<TitleTypeWriterEffectProps> = ({
  text,
  staticText,
  ifCursor,
}) => {
  return (
    <div>
      <span>
        {staticText} {text}
      </span>
      {ifCursor && <Cursor />}
    </div>
  );
};

export default TypeWriterEffect;
