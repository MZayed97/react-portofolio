import "./Home.scss";
import { useEffect, useRef } from "react";
import { init } from "ityped";

export default function Home() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      strings: ["ReactJS", "NodeJS", "NextJS"],
    });
  }, []);

  return (
    <div className="home" id="home">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div> 
      <div className="right">
        <div className="wrapper">
          <h2>Hi There I'm</h2>
          <h1>Mostafa Zayed</h1>
          <h3>
            developer <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#works">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
