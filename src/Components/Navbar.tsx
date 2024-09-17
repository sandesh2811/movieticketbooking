// Need to add some reveal animation when the navbar appears while switching!
//Need to make the ui non-scrollable when the list ui is enabled!

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify, FaX, FaRegUser } from "react-icons/fa6";

const Navbar = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className=" px-4 flex justify-between items-center bg-[#f3f4e5] text-[#282828] h-[10vh]  relative font-EpilogueVar uppercase font-semibold">
      <Link to="/">
        <h1 className="text-2xl tracking-wide">BookMovies</h1>
      </Link>

      <div className="flex gap-5  md:hidden">
        <Link to="/user">
          <FaRegUser size={22} className="cursor-pointer" />
        </Link>
        <FaAlignJustify
          size={22}
          onClick={() => toggleNav()}
          className="cursor-pointer"
        />
      </div>

      <ul className=" hidden md:flex items-center gap-8 text-xl">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/user">
          <FaRegUser size={22} className="cursor-pointer" />
        </Link>
      </ul>

      <div
        className={
          showNav === true
            ? "w-[100%] h-[100vh] bg-[#f3f4e5] text-[#282828] absolute top-0 right-0 flex flex-col items-center font-montserrat duration-500 ease-in-out z-50 px-4 "
            : "w-[100%] h-[100vh]  bg-[#f3f4e5] text-[#282828] absolute top-[-1000%] right-0 flex flex-col items-center font-montserrat  duration-500 ease-in-out z-50 px-4"
        }
      >
        <div className="flex  items-center justify-between h-[10vh]  w-full">
          <Link to="/">
            <h1 className="text-2xl tracking-wide">BookMovies</h1>
          </Link>
          <div className="flex gap-5 ">
            <Link to="/user">
              <FaRegUser size={22} className="cursor-pointer" />
            </Link>
            <FaX
              size={22}
              onClick={() => {
                toggleNav();
              }}
              className="cursor-pointer"
            />
          </div>
        </div>

        <ul className="flex flex-col items-center justify-center  h-full gap-20 text-xl tracking-wide">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
