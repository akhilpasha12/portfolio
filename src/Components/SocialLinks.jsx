import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";
function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      href: "https://www.linkedin.com/in/akhil-pasha-mohammed-8b1b93201",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/akhilpasha12",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:mohammedakhilpasha12@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsPersonLinesFill size={25} />
        </>
      ),
      href: "Akhilpasharesume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="lg:contents md:contents hidden">
      <div className="flex flex-col top-[35%] left-0 fixed">
        <ul>
          {links.map(({ id, child, download, href, style }) => (
            <li
              key={id}
              className={`flex justify-between items-center w-48 h-12 px-3 bg-gray-500 ml-[-145px] lg:hover:ml-[-60px] duration-500 hover:rounded-md 
                 ${style}
                `}
            >
              <a
                href={href}
                download={download}
                target="_blank"
                rel="noreferrer"
                className="flex justify-between items-center w-full text-white ml-16 lg:text-base md:text-base text-base "
              >
                <>{child}</>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SocialLinks;
