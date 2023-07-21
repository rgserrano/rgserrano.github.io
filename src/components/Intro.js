import { useState } from "react";
import selfie from "../images/selfie.png";

const Intro = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [waveAmount, setWaveAmount] = useState('rotate-0');

  const wave = () => {
    setTimeout(() => {
      setWaveAmount("rotate-6 scale-90");
      setTimeout(() => {
        setWaveAmount("-rotate-12 scale-110");
        setTimeout(() => {
          setWaveAmount("rotate-0 scale-110");
        }, 100)
      }, 80);
    }, 20);
  }

  return (
    <div
      className="w-full flex flex-col items-center text-center max-w-screen-sm pb-20 cursor-default"
    >
      <div className="flex flex-col items-center"
        onMouseOver={() => setIsHovering(true)}
        onMouseEnter={wave}
        onMouseOut={() => setIsHovering(false)}
      >
        <img src={selfie} alt="Its me" className={`w-80 rounded-full shadow-2xl mt-20 transform transition delay-100 duration-200 ${isHovering ? "scale-105" : 'scale-1'}`} />
        <h1 className={`text-5xl font-black my-14 transform transition duration-100 delay-100 ${isHovering ? "scale-105" : "scale-1"}`}>
          {"Hi! I'm Regina "}
          <span className={`inline-block transform transition duration-50 ease-in-out ${waveAmount}`}>
            &#128075;
          </span>
        </h1>
      </div>
      <span className="mb-10">
        I'm a full stack engineer and co-author of{' '}
        <a href="https://lodge-logging.github.io/" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800">Lodge</a>,
        an open-source framework based on the Elastic Stack that provides resilient observability for distributed web applications.
      </span>
      <span className="mb-10 px-10">
        I most recently worked at <a className="bombbomb" href="https://bombbomb.com/" target="_blank" rel="noreferrer">BombBomb</a> and am currently open to work!
      </span>
    </div >
  );
}

export default Intro;