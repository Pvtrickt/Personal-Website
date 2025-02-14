import React from "react";
import Reveal from "./Reveal";
import HackerTextEffect from "./HackerTextEffect";
import { Cursor } from "react-simple-typewriter";

const AboutMe: React.FC = () => {
  return (
    <div className="containerLayout">
      <div className="flex flex-col">
        <Reveal>
          <h1 className="text-white text-7xl font-Anton">
            <HackerTextEffect>About me</HackerTextEffect>
          </h1>
        </Reveal>
        <div className="mt-5 text-white bg-black rounded-lg bg-opacity-40 font-CutiveMono">
          <div>
            <p>
              <span className="text-slate-500">01</span>
              <span className="text-blue-400"> class </span>
              <span className="text-yellow-400">Patrick Tang Truong </span>
              &#123;
            </p>
          </div>
          <div>
            <p>
              <span className="text-slate-500">02&nbsp;</span>
              <span className="text-slate-500">..</span>
              <span className="text-blue-400">constructor</span>() &#123;
            </p>
          </div>
          <div>
            <p>
              <span className="text-slate-500">03&nbsp;</span>
              <span className="text-slate-500">....</span>
              <span className="text-red-400">this</span>.
              <span className="text-green-400 ">name</span>
              <span className="text-red-400"> = </span>
              <span className=" text-lime-500">'Patrick Truong'</span>
            </p>
          </div>
          <div>
            <p>
              <span className="text-slate-500">04&nbsp;</span>
              <span className="text-slate-500">....</span>
              <span className="text-red-400">this</span>.
              <span className="text-green-400 ">dateOfBirth</span>
              <span className="text-red-400"> = </span>
              <span className="text-orange-500 ">17082001</span>
            </p>
          </div>
          <div className="flex flex-row">
            <div>
              <span className="text-slate-500">05&nbsp;</span>
            </div>
            <p>
              <span className="text-slate-500">....</span>
              <span className="text-red-400">this</span>.
              <span className="text-green-400 ">email</span>
              <span className="text-red-400"> = </span>
              <span className="text-lime-500 ">
                'patrick.truong175@gmail.com'
              </span>
            </p>
          </div>
          <div>
            <p>
              <span className="text-slate-500">06&nbsp;</span>
              <span className="text-slate-500">..</span>

              <span>&#125;</span>
            </p>
          </div>
          <div>
            <p>
              <span className="text-slate-500">07&nbsp;</span>
              <span className="text-slate-500">..</span>
              <span className="text-yellow-400">education</span>() &#123;
            </p>
          </div>
          <div>
            <p>
              <span className="text-slate-500">08&nbsp;</span>
              <span className="text-slate-500">....</span>
              <span className="text-purple-400">return&nbsp;</span>&#91;
            </p>
          </div>

          <div className="flex flex-row">
            <div>
              <span className="text-slate-500">09&nbsp;</span>
            </div>
            <p className="">
              <span className="text-slate-500">......</span>&#123;
              <span className="text-lime-400">&nbsp;'2020-2024'&nbsp;</span>:
              <span className="text-lime-400">
                &nbsp;'University of Technology Sydney - Bachelors of
                Management, Majoring in Digital Creative Enterprise'&nbsp;
              </span>
              &#125;,
            </p>
          </div>

          <div className="flex flex-row">
            <div>
              <span className="text-slate-500">10&nbsp;</span>
            </div>
            <p>
              <span className="text-slate-500">......</span>
              &#123;
              <span className="text-lime-400">&nbsp;'2024-2027'&nbsp;</span>:
              <span className="text-lime-400">
                &nbsp;'University of New South Wales - Bachelors of Science,
                Computer Science'&nbsp;
              </span>
              &#125;
            </p>
          </div>

          <div className="flex flex-row">
            <div>
              <span className="text-slate-500">11&nbsp;</span>
            </div>
            <p className="">
              <span className="text-slate-500">....</span>&#93;
            </p>
          </div>

          <div className="flex flex-row">
            <div>
              <span className="text-slate-500">12&nbsp;</span>
            </div>
            <p>
              <span className="text-slate-500">..</span>
              &#125;
            </p>
          </div>

          <div className="flex flex-row">
            <div>
              <span className="text-slate-500">13&nbsp;</span>
            </div>
            <p>
              <span className="text-slate-500">..</span>
              <span className="text-yellow-400">skills</span>() &#123;
            </p>
          </div>

          <div className="flex flex-row">
            <div>
              <span className="text-slate-500">14&nbsp;</span>
            </div>
            <p>
              <span className="text-slate-500">....</span>
              <span className="text-purple-400">return&nbsp;</span>&#91;
              <span className="text-lime-400">
                &nbsp;'HTML/CSS/JS', 'React', 'Typescript', 'Node.js',
                'Tailwind', 'npm', 'Github', 'Vite', 'MongoDB', 'AWS', 'Stripe',{" "}
                <Cursor />
                &nbsp;
              </span>
              &#93;
            </p>
          </div>

          <div className="flex flex-row">
            <div>
              <span className="text-slate-500">15&nbsp;</span>
            </div>
            <p>
              <span className="text-slate-500">..</span>
              &#125;
            </p>
          </div>

          <div className="flex flex-row">
            <div>
              <span className="text-slate-500">16&nbsp;</span>
            </div>
            <p>
              <span className="text-slate-500">..</span>
              <span className="text-yellow-400">hobbies</span>() &#123;
            </p>
          </div>
          <div className="flex flex-row">
            <div>
              <span className="text-slate-500">17&nbsp;</span>
            </div>
            <p>
              <span className="text-slate-500">....</span>
              <span className="text-purple-400">return&nbsp;</span>&#91;
              <span className="text-lime-400">
                &nbsp;'volleyball', 'watching movies', 'reading books', 'side
                projects', 'gym'&nbsp;
              </span>
              &#93;
            </p>
          </div>

          <div className="flex flex-row">
            <div>
              <span className="text-slate-500">18&nbsp;</span>
            </div>
            <p>
              <span className="text-slate-500">..</span>
              &#125;
            </p>
          </div>

          <div className="flex flex-row">
            <div>
              <span className="text-slate-500">19&nbsp;</span>
            </div>
            <p>&#125;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
