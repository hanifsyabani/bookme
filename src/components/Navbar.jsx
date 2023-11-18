import React, { useState } from "react";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineAppstore,
  AiOutlineMenuFold,
} from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="">
        <div className="lg:hidden flex justify-between items-center p-3 bg-primary">
          <div className="lg:hidden flex">
            <BsFillJournalBookmarkFill size={25} color="white" />
            <p className="text-xl text-white font-bold ">bookMe</p>
          </div>
          <AiOutlineMenuFold
            size={25}
            color="white"
            onClick={handleNav}
            className="lg:hidden z-[99] cursor-pointer fixed top-2 right-4 "
          />
        </div>

        {nav ? (
          <nav className="bg-secondary w-1/2 h-full fixed top-0 right-0 z-10 ">
            <div className="mt-10 flex flex-col gap-6 p-3">
              <div className="flex items-center gap-2 cursor-pointer">
                <AiOutlineHome size={25} color="white" />
                <p className="text-white">Home</p>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <AiOutlineSearch size={25} color="white" />
                <a href="#search">
                  <p className="text-white">Search</p>
                </a>
              </div>
              <a href="#recomendation">
                <div className="flex items-center gap-2 cursor-pointer">
                  <AiOutlineAppstore size={25} color="white" />
                  <p className="text-white">Recomendation</p>
                </div>
              </a>
              <a href="#wishlist">
                <div className="flex items-center gap-2 cursor-pointer">
                  <BsBookmark size={25} color="white" />
                  <p className="text-white">Wishlist</p>
                </div>
              </a>
            </div>
          </nav>
        ) : (
          <></>
        )}
      </div>

      <nav className="justify-between items-center bg-secondary px-[7%] py-4 hidden lg:flex">
        <div className="flex">
          <BsFillJournalBookmarkFill size={25} color="white" />
          <p className="text-2xl text-white font-bold ">bookMe</p>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2 cursor-pointer">
            <AiOutlineHome size={25} color="white" />
            <p className="text-white">Home</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <AiOutlineSearch size={25} color="white" />
            <a href="#search">
              <p className="text-white">Search</p>
            </a>
          </div>
          <a href="#recomendation">
            <div className="flex items-center gap-2 cursor-pointer">
              <AiOutlineAppstore size={25} color="white" />
              <p className="text-white">Recomendation</p>
            </div>
          </a>
          <a href="#wishlist">
            <div className="flex items-center gap-2 cursor-pointer">
              <BsBookmark size={25} color="white" />
              <p className="text-white">Wishlist</p>
            </div>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
