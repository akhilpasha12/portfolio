import Profile from "../assets/emp.jpg";
import { MdOutlineFileDownload, MdOutlineArrowForward } from "react-icons/md";
import { Link } from "react-scroll";
function Home() {
  return (
    
    <section>
      <div
        name="home"
        className="w-full h-full lg:pt-20 md:pt-20 bg-black"
      >
        <div className="max-w-screen-lg mx-auto">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-20 md:gap-6 lg:px-0 md:px-20 px-4 items-center h-full ">
            <div className="flex flex-col lg:justify-center md:justify-center  h-full lg:order-1 md:order-1 order-2">
              <h2 className="lg:text-6xl md:text-5xl text-4xl logoText text-white leading-[50px] lg:mb-8 md:mb-8 mb-5 lg:mt-0 md:mt-0 mt-6">
                I'm a Front-End Developer
              </h2>
              <p className="text-white lg:text-base md:text-base text-[16px] overAlltext text-justify">
                Highly motivated and skilled Frontend Developer with one year of
                experience in building web and mobile applications using
                React.js, React Native (Android), Next.js, Tailwind CSS, and
                Bootstrap. Seeking an opportunity to contribute my expertise to
                a dynamic team and continue to grow as a developer.
              </p>
              <div className=" flex justify-between ">
                <Link to="projects" smooth={true} duration={500}>
                  <div className="group lg:mt-6 mt:mb-6 mt-4 text-white w-fit px-4 py-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                    <p className="overAlltext text-base">Projects</p>
                    <span className="group-hover:rotate-90 duration-300">
                      <MdOutlineArrowForward size={18} className="ml-1" />
                    </span>
                  </div>
                </Link>

                <div className="lg:hidden md:hidden contents">
                  <div className="group lg:mt-6 mt:mb-6 mt-4 text-white w-fit px-4 py-2 flex items-center rounded-md bg-gradient-to-r from-gray-300 via-gray-500 to-gray-600 cursor-pointer">
                    <a
                      href="akhilpasharesume.pdf"
                      download={true}
                      className="overAlltext text-base"
                    >
                      Resume
                    </a>
                    <span className="">
                      <MdOutlineFileDownload size={18} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:order-2 md:order-2 order-1  ">
              <img
                src={Profile}
                alt="profile"
                className="rounded-2xl w-full lg:mt-0 md:mt-0 mt-[20%] "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
