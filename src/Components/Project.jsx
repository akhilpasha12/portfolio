import Whiprides from "../assets/project/whiprides.png";
import serrano from "../assets/project/serrano.png";
import serranoen from "../assets/project/serranoen.png";
import serranoapp from "../assets/project/serranoApp.jpg";
import admin from "../assets/project/admin.png";
import shop from "../assets/project/shop.png";

function Project() {
  const projs = [
    {
      id: 1,
      title: "Whiprides Website",
      src: Whiprides,
      style: "hover:shadow-orange-600 shadow-gray-800",
    },
    {
      id: 2,
      title: "Serrano Website",
      src: serrano,
      style: "hover:shadow-[#61DBFB] shadow-gray-800",
    },
    {
      id: 4,
      title: "Serrano Entertainment Website",
      src: serranoen ,
      style: "hover:shadow-gray-200 shadow-gray-800",
    },
    {
      id: 3,
      title: "Admin Dashboard",
      src: admin,
      style: "hover:shadow-[#61DBFB] shadow-gray-800",
    },

    {
      id: 5,
      title: "Seller Dashboard",
      src: shop,
      style: "hover:shadow-yellow-600 shadow-gray-800",
    },
    {
      id: 6,
      title: "Serrano Android App",
      src: serranoapp,
      style: "hover:shadow-[#7449B9] shadow-gray-800",
    },
  ];
  return (
    <section>
      <div
        name="projects"
        className="bg-gradient-to-b bg-white w-full  lg:py-24 md:py-24 py-12"
      >
        <div className="max-w-screen-lg mx-auto  flex flex-col justify-center w-full h-full ">
          <div className="lg:px-0 md:px-20 px-4">
            <div className="mb-12">
              <p className="capitalize lg:text-4xl md:text-4xl text-2xl logoText text-black ">
                Projects
              </p>
              <div className="w-1/6 h-1 bg-gray-500 mt-2" />
              <p className="pt-3 capitalize lg:text-base md:text-base text-base font-semibold   text-black overAlltext">
                These are the Projects I've worked with
              </p>
            </div>
            <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              {projs.map(({ id, title, src, style }) => (
                <div
                  key={id}
                  className={`border hover:border-gray-500 lg:scale-100 lg:hover:scale-110 md:hover:scale-105 duration-500 pb-2  rounded-lg ${style}`}
                >
                  <img src={src} alt={title} className=" mx-auto  rounded-tr-lg rounded-tl-lg  w-[100%]" />
                  <p className="mt-4 lg:text-base md:text-base text-base font-semibold  text-black overAlltext text-center">
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

export default Project;
