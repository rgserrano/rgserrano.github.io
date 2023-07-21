import email from "../images/email.svg";
import linkedIn from "../images/linkedin.svg";
import github from "../images/github.svg";
import resume from "../images/resume.svg";
import resumeDoc from "../Regina_Resume.pdf"
import InfoIcon from "../images/InfoIcon.jsx";
import { useState } from "react";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="fixed top-20 right-8 overflow-hidden flex flex-col items-center z-50"
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
    >
      <div className="fixed top-8 z-50 rounded-lg mb-4 w-16 h-16 cursor-pointer">
        <InfoIcon fill={isVisible ? "#6366F1" : "#1f232b"} />
      </div>
      <nav className={`relative z-0 mt-8 flex flex-col items-center gap-4 transform transition duration-500 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-96"}`}>
        <a href="mailto:rg.serrano.03@gmail.com" target="_blank" rel="noreferrer" className="hover:bg-indigo-500 bg-gray-800 w-14 px-3 py-4 rounded-full">
          <img src={email} alt="An email icon" className="" />
        </a>
        <a href="https://www.linkedin.com/in/rg-serrano/" target="_blank" rel="noreferrer" className="hover:bg-indigo-500 bg-gray-800 w-14 p-1 rounded-full">
          <img src={linkedIn} alt="The Linkedin icon" className="" />
        </a>
        <a href="https://github.com/rgserrano" target="_blank" rel="noreferrer" className="hover:bg-indigo-500 bg-gray-800 w-14 p-1 rounded-full">
          <img src={github} alt="The github icon" className="" />
        </a>
        <a href={resumeDoc} target="_blank" rel="noreferrer" className="hover:bg-indigo-500 bg-gray-800 w-14 p-1 rounded-full">
          <img src={resume} alt="A resume icon" />
        </a>
      </nav>
    </div>
  )
}

export default Nav;