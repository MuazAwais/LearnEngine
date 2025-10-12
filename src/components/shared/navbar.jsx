import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closerNavbar = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`mx-auto sticky top-0 z-[99999] bg-white/80  ${
          isScrolled 
            ? 'top-5 w-[80%] rounded-2xl backdrop-blur-2xl bg-white/80' 
            : 'top-0 w-full rounded-none border-l-0 border-r-0 border-t-0'
        }`}>
      <div className="container mx-auto">
      <div
        id="navbar"
        className={`h-[8ch] flex items-center justify-between transition-all ease-in-out duration-50 `}
      >
        <div className="flex items-center gap-2 md:pr-16 pr-0">
          <Link
            to="home"
            smooth={true}
            duration={600}
            className="text-lg font-semibold flex items-center gap-x-2 text-[#319D8E] hover:cursor-pointer"
          >
            <FiBookOpen size={24} />
            <span>
              Learn<span className="text-[#FE7558]">Engine</span>
            </span>
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-neutral-600 focus:outline-none hover:cursor-pointer"
          >
            <FaBars size={24} />
          </button>
        </div>
        <div
          className={`fixed md:static top-0 right-0 h-screen md:h-auto bg-sky-50 border md:border-none border-neutral-300 md:bg-transparent shadow-lg md:shadow-none ease-in-out duration-300 transition-transform flex-1 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0 z-60`}
        >
          <div className="w-full md:hidden flex items-center justify-between px-4">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-lg font-semibold flex items-center gap-x-2 text-[#319D8E] hover:cursor-pointer"
            >
              <FiBookOpen size={24} />
              <span>
                Learn<span className="text-[#FE7558]">Engine</span>
              </span>
            </Link>
            <div className="md:hidden flex justify-end py-6">
              <button
                onClick={closerNavbar}
                className="text-neutral-600 focus:outline-none"
              >
                <IoMdClose size={24} />
              </button>
            </div>
          </div>

          <div className="border-b border-neutral-300 md:hidden"></div>

          <div className="flex flex-1 flex-col justify-center gap-[70px] items-center md:justify-end md:flex-row p-6 md:p-0">
            <ul className="flex flex-col md:flex-row gap-6 text-neutral-600 font-medium">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  onClick={closerNavbar}
                  className={`hover:cursor-pointer hover:text-[#319D8E] ${
                    location.pathname === "/" ? "text-[#319D8E]" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="courses"
                  smooth={true}
                  duration={500}
                  onClick={closerNavbar}
                  className={`hover:cursor-pointer hover:text-[#319D8E] ${
                    location.pathname === "/courses" ? "text-[#319D8E]" : ""
                  }`}
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  onClick={closerNavbar}
                  className={`hover:cursor-pointer hover:text-[#319D8E] ${
                    location.pathname === "/about" ? "text-[#319D8E]" : ""
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  onClick={closerNavbar}
                  className={`hover:cursor-pointer hover:text-[#319D8E] ${
                    location.pathname === "/contact" ? "text-[#319D8E]" : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <Link
                to="/login"
                onClick={closerNavbar}
                className="px-4 hover:cursor-pointer py-2 border border-[#319D8E] text-[#319D8E] rounded hover:bg-[#319D8E] hover:text-white transition-all duration-300 ease-in-out"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
               
  );
};

export default Navbar;
