import React from "react";
import heroImg from "../../../src/static/header-img.png";
import hero from "../../../src/static/herosec.png";
import "./hero.css";
const Hero = () => {
  return (
    <section className="flex bg-white justify-between gap-3 max-md:gap-0 px-20 mt-16 max-md:mt-28">
      <div className=" hero-description gap-10 flex flex-col justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-[#d80286] to-indigo-500">
        <p className="name-intro font-bold text-4xl text-center">
          HEY, I'M RAJ PRAKASH
          <br /> MAURYA
        </p>
        <p className="intro-description text-center font-semibold text-2xl leading-8 ">
          A MERN Stack Developer Passionate <br /> About Coding. Always ready to
          try <br /> Hands-on New and Emerging <br /> Technologies.
        </p>

        <div className="buttons font-semibold text-xl mt-10">
          <button className="btn-resume  mr-3 px-6 py-1 border-2 border-[#d80286]  ">
            Resume
          </button>
          <button className="btn ml-3 px-6 py-1 border border-[#d80286] border-2">
            Hire Me
          </button>
        </div>
      </div>
      <div className="hero-image w-2/4 max-md:hidden">
        <img src={hero} alt="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
