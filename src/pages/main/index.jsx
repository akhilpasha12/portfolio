import Navbar from "../../Components/Navbar";
import SocialLinks from "../../Components/SocialLinks";
import About from "../../Components/About";
import Experience from "../../Components/Experience";
import Home from "../../Components/Home";
import Project from "../../Components/Project";
import blackcloud from "../../assets/blackcloud.svg";
import whitecloud from "../../assets/whitecloud.svg";
import Contact from "../../Components/Contact";
import ScrolltoTop from "../../Components/ScrolltoTop";
function Main() {
  return (
    <>
      <Navbar />
      <Home />

      <div className="relative ">
        <div className="shape absolute right-0 left-0  z-0 overflow-hidden  text-white dark:text-slate-900">
          <img src={blackcloud} alt="cloud" />
        </div>
      </div>
      <About />
      <div className="relative ">
        <div className="shape absolute right-0 left-0 overflow-hidden z-0  text-white dark:text-slate-900">
          <img src={whitecloud} alt="cloud" />
        </div>
      </div>
      <Experience />
      <div className="relative ">
        <div className="shape absolute right-0 left-0 overflow-hidden z-0  text-white dark:text-slate-900">
          <img src={blackcloud} alt="cloud" />
        </div>
      </div>
      <Project />
      <ScrolltoTop/>
      <div className="relative ">
        <div className="shape absolute right-0 left-0 overflow-hidden z-0  text-white dark:text-slate-900">
          <img src={whitecloud} alt="cloud" />
        </div>
      </div>
      <Contact />

      <SocialLinks />
    </>
  );
}

export default Main;
