import React from "react";

const SkillCard = ({ image, title }) => {
  return (
    <div className="w-16 px-3 py-1 flex flex-col items-center hover:shadow-xl hover:border-solid  hover:bg-gray-200 hover:border hover:rounded border-white hover:border-slate-800 border-4 hover:cursor-pointer duration-300">
      <img src={image} alt="image" />
      <span className="text-sm">{title}</span>
    </div>
  );
};

export default SkillCard;
