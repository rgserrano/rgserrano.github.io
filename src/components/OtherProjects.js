import timehub from "../images/timehub.jpeg";
import trello from "../images/trello.png";
import todos from "../images/todos.jpg";
import { useState } from "react";

const projects = [
  {
    img: timehub,
    title: "Timehub",
    description: "A user-authenticated app that aggregates, normalizes, and dynamically charts data from third-party APIs.",
    tech: "React, TailwindCSS, Rails, MongoDB, PostgreSQL, REST API."
  },
  {
    img: trello,
    title: "Trillo",
    description: "A Trello-like task management app.",
    tech: "React/Redux, Node.js, Express, MongoDB, REST API."
  },
  {
    img: todos,
    title: "Todo Tracker",
    description: "A todo-tracking app with user authentication.",
    tech: "Node.js, Express, Pug, CSS, PostgreSQL."
  }
];

const Project = ({ img, title, description, tech }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`flex flex-col items-left mb-24 rounded-lg border shadow-lg pb-8 cursor-default transform transition duration-300 ease-out ${isActive ? "-translate-y-2" : "translate-y-0"}`}
      onMouseOver={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="bg-gray-200 p-6 flex justify-center items-center h-64">
        <img src={img} alt="the timehub site" className="rounded shadow-md h-52 object-cover" />
      </div>
      <h4 className={`text-center font-bold text-2x mt-8 mb-4`}>{title}</h4>
      <div className="px-4 pb-4 flex-1 flex flex-col text-gray-700">
        <span className="">{description}</span>
        <span className="mt-10 italic">{tech}</span>
      </div>
    </div>
  );
}

const OtherProjects = () => {
  return (
    <div className="flex flex-col leading-9 pt-20 pb-14 w-full justify-center items-center text-left text-2xl max-w-screen-xl">
      <h2 className="text-5xl font-bold mt-8 mb-24">Other Projects</h2>
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-14">
        {projects.map(p => <Project {...p} />)}
      </div>
    </div>
  );
}

export default OtherProjects;