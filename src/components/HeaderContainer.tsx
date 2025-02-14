import Reveal from "./Reveal";
import TitleTypeWriter from "./TitleTypewriter";
import FirstTypewriterEffect from "./FirstTypewriterEffect";

const HeaderContainer: React.FC = () => {
  return (
    <div className="headerContainerLayout">
      <div className="flex flex-row justify-between gap-20 ">
        <div className="flex flex-col justify-center h-fit">
          <span className="text-xl text-[#f4d98e] font-CutiveMono">
            <FirstTypewriterEffect />
          </span>
          <Reveal>
            <h1 className="mt-4 text-white text-7xl font-Anton">
              Patrick Tang Truong.
            </h1>
          </Reveal>

          {/* hover animation brings up my middle name */}
          <Reveal>
            <span className="flex text-3xl text-[#f4d98e] font-CutiveMono">
              <TitleTypeWriter />
            </span>
          </Reveal>
          <div className="w-96">
            <Reveal>
              <span className="text-white">
                I'm a software engineer specialising in building and designing
                execeptional digital experiences. I'm currently studying in my
                second year of computer science at UNSW.
              </span>
            </Reveal>
          </div>
        </div>
        {/* <div className="relative h-fit">
          <Reveal>
            <img src={portrait} alt="self portrait" className="h-auto w-96" />
          </Reveal>
        </div> */}
      </div>
    </div>
  );
};

export default HeaderContainer;
