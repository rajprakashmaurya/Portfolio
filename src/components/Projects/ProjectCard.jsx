import React from "react";

const ProjectCard = ({ title, image, description }) => {
  return (
    <div className="my-3 cursor-pointer shadow-xl shadow-slate-300 hover:shadow-slate-500 duration-500">
      <div className="text-center font-semibold my-2">{title}</div>
      <div className="w-80 border border-slate-300">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default ProjectCard;
