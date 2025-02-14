import React, { useEffect, useRef } from "react";

const HackerTextEffect: React.FC<{ children: any }> = ({ children }) => {
  const h1Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval: number | null = null;

    const handleMouseOver = () => {
      let iteration = 0;

      if (interval) {
        clearInterval(interval);
      }

      interval = setInterval(() => {
        if (h1Ref.current) {
          h1Ref.current.innerText = h1Ref.current.innerText
            .split("")
            .map((_: any, index) => {
              if (index < iteration) {
                return h1Ref.current?.dataset.value![index];
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= h1Ref.current.dataset.value!.length) {
            clearInterval(interval!);
          }

          iteration += 1 / 3;
        }
      }, 30);
    };

    if (h1Ref.current) {
      h1Ref.current.addEventListener("mouseover", handleMouseOver);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }

      if (h1Ref.current) {
        h1Ref.current.removeEventListener("mouseover", handleMouseOver);
      }
    };
  }, []);

  return (
    <div>
      <span ref={h1Ref} data-value={children}>
        {children}
      </span>
    </div>
  );
};

export default HackerTextEffect;
