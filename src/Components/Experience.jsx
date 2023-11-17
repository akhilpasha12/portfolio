import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import redux from "../assets/redux.png";
import reacticon from "../assets/reacticon.png";
import nextjs from "../assets/nextjslogo.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import github from "../assets/github.png";
import postman from "../assets/postman.png";
function Experience() {
  const techs = [
    {
      id: 1,
      title: "HTML",
      src: html,
      style: "hover:shadow-orange-600 shadow-gray-800",
    },
    {
      id: 2,
      title: "React JS",
      src: reacticon,
      style: "hover:shadow-[#61DBFB] shadow-gray-800",
    },
    {
      id: 4,
      title: "Next.JS",
      src: nextjs,
      style: "hover:shadow-gray-200 shadow-gray-800",
    },
    {
      id: 3,
      title: "React Native",
      src: reacticon,
      style: "hover:shadow-[#61DBFB] shadow-gray-800",
    },

    {
      id: 5,
      title: "JavaScript",
      src: javascript,
      style: "hover:shadow-yellow-600 shadow-gray-800",
    },
    {
      id: 6,
      title: "Redux toolkit",
      src: redux,
      style: "hover:shadow-[#7449B9] shadow-gray-800",
    },
    {
      id: 12,
      title: "Context",
      src: reacticon,
      style: "hover:shadow-[#61DBFB] shadow-gray-800",
    },
    {
      id: 7,
      title: "CSS",
      src: css,
      style: "hover:shadow-[#214CE5] shadow-gray-800",
    },
    {
      id: 8,
      title: "Tailwind",
      src: tailwind,
      style: "hover:shadow-[#35BEF8] shadow-gray-800",
    },
    {
      id: 9,
      title: "Bootstrap",
      src: bootstrap,
      style: "hover:shadow-[#7511F6] shadow-gray-800",
    },
    {
      id: 10,
      title: "GitHub",
      src: github,
      style: "hover:shadow-gray-200 shadow-gray-800",
    },
    {
      id: 11,
      title: "Postman",
      src: postman,
      style: "hover:shadow-[#FF6C37] shadow-gray-800",
    },
  ];
  return (
    <section>
      <div
        name="experience"
        className="bg-gradient-to-b bg-black w-full lg:py-24 md:py-24 py-12"
      >
        <div className="max-w-screen-lg mx-auto  flex flex-col justify-center w-full h-full ">
          <div className="lg:px-0 md:px-20 px-4">
            <div className="mb-12">
              <p className="capitalize lg:text-4xl md:text-4xl text-2xl logoText text-white ">
                Experience
              </p>
              <div className="w-1/6 h-1 bg-gray-500 mt-2" />
              <p className="pt-3  capitalize lg:text-base md:text-base text-[16px]  text-white overAlltext">
                These are the technologies I've worked with
              </p>
            </div>
            <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-3 gap-6 ">
              {techs.map(({ id, title, src, style }) => (
                <div
                  key={id}
                  className={`shadow-md lg:hover:scale-105 md:hover:scale-105 duration-500 py-2  rounded-lg ${style}`}
                >
                  <img src={src} alt={title} className="lg:w-1/2 md:w-1/2 w-1/2 mx-auto" />
                  <p className="mt-4 lg:text-base md:text-base text-[16px]  text-white overAlltext text-center">
                    {title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
