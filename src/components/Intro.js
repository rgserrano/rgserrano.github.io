import selfie from "../images/selfie.png";
import resumeDoc from "../Regina_Resume.pdf";

const Intro = () => {
  return (
    <div className="w-full flex flex-col items-center text-center max-w-screen-sm pb-20">
      <img src={selfie} alt="A picture of myself" className="w-80 rounded-full mt-20" />
      <h1 className="text-5xl font-black my-14">Hi! I'm Regina &#128075;</h1>
      <p className="px-10">
        I'm a software engineer based in Atlanta, GA,
        with experience in JavaScript, React/Redux, AWS, PostgreSQL, and MongoDB.
      </p>
      <p className="my-10 px-12">
        I recently built <a href="https://lodge-logging.github.io/" target="_blank" className="text-blue-600 hover:text-blue-800">Lodge</a>,
        an open-source framework that provides a resilient
        observability solution for distributed web applications.
      </p>
      {/* <div className="flex justify-center w-full my-10">
        <a href={resumeDoc} target=" _blank">
          <button className="hover:bg-indigo-600 shadow-lg bg-gray-800 rounded-lg py-4 px-6 text-white mr-8">
            Resume
          </button>
        </a>
        <a href="https://lodge-logging.github.io/" target="_blank">
          <button className="hover:bg-indigo-600 shadow-lg bg-indigo-500 rounded-lg py-4 px-6 text-white">
            Read Lodge Case Study
          </button>
        </a>
      </div> */}
    </div>
  );
}

export default Intro;