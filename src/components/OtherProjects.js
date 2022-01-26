import timehub from "../images/timehub.jpeg";
import trello from "../images/trello.png";
import todos from "../images/todos.jpg";

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

  return (
    <div className="flex flex-col items-left mb-24 rounded-lg border shadow-lg">
      <div className="bg-gray-200 p-6">
        <img src={img} alt="the timehub site" className="rounded shadow-md" />
      </div>
      <h4 className="text-center font-bold text-2x my-4">{title}</h4>
      <div className="px-4 pb-4 flex-1 flex flex-col justify-between text-gray-700">
        <p className="">{description}</p>
        <p className="mt-10">{tech}</p>
      </div>
    </div>
  );
}

const OtherProjects = () => {
  return (
    <div className="flex flex-col leading-9 py-20 w-full justify-center items-center text-left text-2xl max-w-screen-xl">
      <h2 className="text-5xl font-bold mt-8 mb-24">Other Projects</h2>
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-14">
        {projects.map(p => <Project {...p} />)}
      </div>
    </div>
  );
}

export default OtherProjects;