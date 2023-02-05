import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectData";

const Projects = () => {
  return (
    <section className="bg-white py-10">
      <div className="aboutme-title text-slate-800  text-center  mb-10">
        <div className=" text-4xl font-bold tracking-wider">Projects</div>

        <hr className="bg-rose-800 h-1 w-16 border-5 m-auto my-6" />

        <div className="mx-32 text-2xl  ">
          Here you will find some of my personal projects that I created with
          <br /> each project containing its project stack.
        </div>

        <div className="projects flex gap-2 pt-10 justify-between mx-20 flex-wrap">
          {projectsData.map((project) => (
            <ProjectCard image={project.image} title={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
