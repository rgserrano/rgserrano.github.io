import lodgeOverview from "../images/full_diagram.png";
import logo from "../images/Lodge_logo_side.svg";

const Lodge = () => {
  return (
    <div className="shadow-inner bg-indigo-50 w-full flex flex-col items-center">
      <div className="max-w-screen-lg flex flex-col px-10 w-full items-center">
        <img src={logo} alt="The Lodge Logo" className="mt-20 mb-14 w-5/6 px-10 max-w-screen-sm" />
        <a href="https://lodge-logging.github.io/" target="_blank" className="mb-20">
          <img src={lodgeOverview} alt="An overview of Lodge's architecture" className="shadow-lg rounded-lg" />
        </a>
        <p className="text-left font-extralight text-3xl">
          <a href="https://lodge-logging.github.io/" target="_blank" className="text-blue-600 hover:text-blue-800">Lodge</a> is a comprehensive,
          opinionated logging solution for distributed web applications.
          It's based on the Elastic stack, with Kafka brokers for handling bursty traffic, and is deployed across multiple AWS availability zones for reliability.
        </p>
        <button className="xl:mt-20 xl:px-20 shadow-lg bg-gray-800 hover:bg-indigo-600 border-gray-300 border-2 rounded-lg text-2xl py-4 px-14 mt-14 mb-20 text-white">
          <a href="https://lodge-logging.github.io/" target="_blank">Read Case Study</a>
        </button>
      </div>
    </div>
  );
}

export default Lodge;