import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-scroll";

function Navbar() {
  const [icon, setIcon] = useState(false);
  const [active, setActive] = useState("home");
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  const ActiveClass = (path) => {
    setActive(path);
  };
  console.log(active);
  return (
    <div className="flex z-10 justify-between items-center w-full lg:h-16 md:h-16 h-14 lg:px-16 md:px-16 px-4  bg-[#000] fixed">
      <div className="">
        <h1 className="logoText lg:text-4xl md:text-4xl text-2xl text-[#fff] ">
          AK
        </h1>
      </div>
      <ul className="hidden md:flex lg:flex">
        {links.map(({ link, id }) => (
          <li
            key={id}
            className={` ${active === link ? "text-red-600 " : "text-white"}  cursor-pointer capitalize font-bold lg:text-base md:text-base text-lg overAlltext px-4 hover:text-red-600`}
          >
            <Link
              to={link}
              smooth={true}
              duration={500}
              onClick={() =>ActiveClass(link)}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setIcon(!icon)}
        className="cursor-pointer z-20 text-gray-300 md:hidden lg:hidden"
      >
        {!icon ? (
          <RiMenu3Line size={25} color="white" />
        ) : (
          <MdOutlineClose size={25} color="white" />
        )}
      </div>
      {icon && (
        <ul className="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-b from-black to-gray-400 absolute top-0 left-0  ">
          {links.map(({ link, id }) => (
            <li
              key={id}
              className="text-white cursor-pointer capitalize font-bold text-xl overAlltext px-4 py-4 "
            >
              <Link
                to={link}
                smooth={true}
                duration={500}
                onClick={() => setIcon(!icon)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
