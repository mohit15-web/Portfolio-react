import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Skills", path: "#skills" },
    { id: 2, text: "Projects", path: "#projects" },
    { id: 3, text: "Contact", path: "#footer" },
  ];

  return (
    <div className="bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      {/* Logo */}
      <h1 className="w-full text-2xl  font-extrabold text-white">
        Mohit Chaudhary
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:text-gray-400 hover:underline m-2 cursor-pointer duration-300 text-xl font-bold"
          >
            <a href={item.path}>{item.text}</a> {/* Use Link for navigation */}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden top-9 right-6 fixed z-50">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={24} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-2 top-8 rounded-md shadow-2xl  w-[50%] border-r border-r-gray-900 bg-[#000300] h-32 ease-in-out duration-500 z-50"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] h-28 rounded-md shadow-2xl"
        }
      >

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
       <li
       key={item.id}
       className="text-center py-3 px-4 flex flex-col justify-center rounded-md 
                  bg-gradient-to-r from-gray-800 via-gray-900 to-black 
                  hover:bg-gradient-to-br hover:from-gray-700 hover:via-gray-800 hover:to-black 
                  transform transition-all duration-300 ease-out
                  hover:scale-105 active:scale-95 shadow-lg my-1"
     >
            <a
              href={item.path}
              onClick={() => {
                setNav(!nav);
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
