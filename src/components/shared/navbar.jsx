import { useEffect, useState } from 'react'
import { FiBookOpen } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  const toggleNavbat = () => {
    setIsOpen(!isOpen)
  };

  const closerNavbar = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    if(window.scrollY > 0){
        setIsScrolled(true);
    }else{
        setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return() => {
        window.removeEventListener("scroll", handleScroll);
    };
  },[])
  return (
    <div id="navbar" className={`w-full h-[8ch] backdrop-blur-sm flex item-ceter justify-betwwn md:px-10 sm:px-10 px-4 fixed top-0 transiton-all ease-in-out duration-300 z-50 border-b border-natural-200 ${isScrolled ? 'bg-sky-50/30':'bg-transparent'}`}>
       <div className="flex items-center gap-2 md:pr-16 pr-0">
        <Link to="/" className='text-lg font-semibold text-sky-700 flex items-center gap-x-2'><FiBookOpen size={24}/><span>LearnEngine</span></Link>
       </div>
    </div>
  )
}

export default Navbar