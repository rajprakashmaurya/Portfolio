import React from "react";
import SkillCard from "../../components/SkillCard";
import { skills } from "./skilldata";
import { tools } from "./toolsdata";

const AboutMe = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="aboutme-title text-slate-800  text-center  mb-10">
        <div className=" text-4xl font-bold tracking-wider">ABOUT ME</div>

        <hr className="bg-rose-800 h-1 w-16 border-5 m-auto my-6" />

        <div className="mx-32 text-2xl  ">
          Here you will find more information about me, what I do, and my
          current <br /> skills mostly in terms of programming and technology
        </div>
      </div>
      <div className="main-about flex max-md:flex-wrap justify-between px-10 gap-10  ">
        <div className="about-me-left bg-white container border  border-black rounded-md shadow-2xl px-3 py-5 shadow-gray-500">
          <h1 className="text-center text-2xl font-semibold">GET TO KNOW ME</h1>
          <hr className="bg-rose-800 h-1 w-16 border-5 m-auto my-3" />
          <div className="text-center">
            <button className="px-10 py-1 border border-gray-500 my-3 rounded ">
              EDUCATION
            </button>
          </div>
        </div>
        <div className="about-me-right bg-white container border  border-black rounded-md shadow-2xl  px-3 py-5 shadow-gray-500">
          <h1 className="text-center text-2xl font-semibold">MY SKILLS</h1>
          <hr className="bg-rose-800 h-1 w-16 border-5 m-auto my-3" />
          <div className="text-center">
            <button className="px-10 py-1 border border-gray-500 my-3 rounded ">
              Web Development
            </button>
            <div className="flex flex-wrap justify-center px-10 gap-5 my-5">
              {skills.map((skill) => (
                <SkillCard title={skill.title} image={skill.image} />
              ))}
            </div>
          </div>
          <div className="text-center">
            <button className="px-10 py-1 border border-gray-500 my-3 rounded ">
              Tools
            </button>
            <div className="flex flex-wrap justify-center px-10 gap-5 my-5">
              {tools.map((tool) => (
                <SkillCard title={tool.title} image={tool.image} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
