import earthNight from "../assets/Rotating_earth_animated_transparent.gif";

const WorldGif = () => {
  return (
    <div className=" fixed flex items-center justify-center top-0 left-0 z-[-1] w-full h-full">
      <img src={earthNight} alt={"Spinning world gif"} />;
    </div>
  );
};

export default WorldGif;
