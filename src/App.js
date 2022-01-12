import Nav from "./components/Nav";
import LetsConnect from "./components/LetsConnect";
import Intro from "./components/Intro";
import Lodge from "./components/Lodge";
import OtherProjects from "./components/OtherProjects";

function App() {
  return (
    <div className="flex flex-col justify-center items-center text-3xl text-gray-800">
      {<Nav />}
      {<Intro />}
      {<Lodge />}
      {<OtherProjects />}
      {<LetsConnect />}
    </div >
  );
}

export default App;
