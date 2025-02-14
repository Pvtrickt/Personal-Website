import React, { useRef, useEffect } from "react";

const BlobFollowingCursor: React.FC = () => {
  const blobRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const blobElement = blobRef.current;

    if (!blobElement) return;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      blobElement.animate(
        [
          {
            top: `${clientY}px`,
            left: `${clientX}px`,
          },
        ],
        {
          duration: 3000,
          fill: "forwards",
        }
      );
    };

    // Add event listener when the component mounts
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className="fixed top-0 left-0 z-10 w-full h-full backdrop-blur-[12vmax]"></div>

      {/* blob component */}
      <div
        id="blob"
        ref={blobRef}
        style={{
          position: "absolute",
          width: "30vw",
          height: "34vmax",
          backgroundColor: "white", // Set your desired background color
          borderRadius: "50%", // Make it round
          top: "50%",
          left: "50%",
          translate: "-50% -50%",
          backgroundImage:
            "linear-gradient(to right, aquamarine, mediumpurple)", // Add your linear gradient
          animation: "rotate 5s linear infinite",
        }}
      ></div>
    </div>
  );
};

export default BlobFollowingCursor;
