import email from "../images/email.svg";
import linkedIn from "../images/linkedin.svg";
import github from "../images/github.svg";
import resume from "../images/resume.svg";
import resumeDoc from "../Regina_Resume_1.pdf"

const Nav = () => {
  return (
    <nav className="fixed top-8 right-8 flex flex-col gap-4">
      <a href="mailto:reginadonovan191@gmail.com" className="hover:bg-indigo-500 bg-gray-800 w-14 px-3 py-4 rounded-full">
        <img src={email} alt="An email icon" className="" />
      </a>
      <a href="https://www.linkedin.com/in/rg-donovan/" target="_blank" className="hover:bg-indigo-500 bg-gray-800 w-14 p-1 rounded-full">
        <img src={linkedIn} alt="The Linkedin icon" className="" />
      </a>
      <a href="https://github.com/rgdonovan" target="_blank" className="hover:bg-indigo-500 bg-gray-800 w-14 p-1 rounded-full">
        <img src={github} alt="The github icon" className="" />
      </a>
      <a href={resumeDoc} target="_blank" className="hover:bg-indigo-500 bg-gray-800 w-14 p-1 rounded-full">
        <img src={resume} alt="A resume icon" className="" />
      </a>
    </nav>
  )
}

export default Nav;