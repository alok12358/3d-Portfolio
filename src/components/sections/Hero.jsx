import React from "react";

import { words } from "../../constants/index.js";
import Button from "../Button.jsx";
import HeroExperience from "../HeroModels/HeroExperience.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  return (
    <section className="relative overflow-hidden" id="hero">
      <div className="absolute top-0 left-0 z-0">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout">
        {/* Hero content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          {/* 3d model */}
          <figure>
            <div className="hero-3d-layout">
              <HeroExperience />
            </div>
          </figure>

          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shapping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Into Real projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Alok, a react developer with a passion for creating
              stunning web applications. I specialize in building user-friendly
              interfaces and delivering high-quality results. Let's work
              together to bring your ideas to life!
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              text="See My Work"
              id="button"
            />
          </div>
        </header>
      </div>
    </section>
  );
};

export default Hero;
