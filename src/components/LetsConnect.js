import email from "../images/email.svg";
import linkedIn from "../images/linkedin.svg";
import github from "../images/github.svg";
import resume from "../images/resume.svg";
import resumeDoc from "../Regina_Resume.pdf"

const LetsConnect = () => {
  return (
    <div className="bg-purple-100 w-full flex flex-col items-center text-center text-2xl">
      <div className="max-w-screen-md xl:max-w-screen-lg py-14 mx-12">
        <h2 className="text-4xl font-black pb-4">Let's Connect!</h2>
        <p className="pb-10">It's always great meeting new people! Feel free to connect if you'd like to talk.</p>
        <div className="grid gap-4 grid-rows-2 grid-cols-2 text-white xl:grid-rows-1 xl:grid-cols-4">
          <a href="mailto:reginadonovan191@gmail.com" target="_blank" className="py-3 hover:bg-indigo-600 bg-indigo-500 flex justify-center items-center rounded-lg shadow-lg">
            <img src={email} alt="email icon" className="inline w-8 mr-2" />
            Email
          </a>
          <a href="https://www.linkedin.com/in/rg-donovan/" target="_blank" className="py-3 hover:bg-indigo-600 bg-indigo-500 flex justify-center items-center rounded-lg shadow-lg ">
            <img src={linkedIn} alt="Linkedin icon" className="inline w-10 mr-1" />
            LinkedIn
          </a>
          <a href={resumeDoc} target="_blank" className="py-3 hover:bg-indigo-600 bg-indigo-500 flex justify-center items-center rounded-lg shadow-lg align-middle">
            <img src={resume} alt="Linkedin icon" className="inline w-10 mr-2" />
            Resume
          </a>
          <a href="https://github.com/rgdonovan" target="_blank" className="py-3 hover:bg-indigo-600 bg-indigo-500 flex justify-center items-center rounded-lg shadow-lg align-middle">
            <img src={github} alt="Linkedin icon" className="inline w-10" />
            Github
          </a>
        </div>
      </div>
    </div >
  );
}

export default LetsConnect;