import React from "react";
import {
  ShoppingCartIcon,
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
} from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <div>
      <div className="flex space-x-4 bg-white h-[4.4rem] shadow-lg text-center justify-between items-center px-4">
        <MenuIcon className="h-6 w-6 md:hidden" />
        <h2 className="text-3xl font-bold">Udemy</h2>
        <h3 className="hidden text-sm md:block">Categories</h3>
        <form className="hidden bg-[#f8fafb] md:flex border border-black rounded-3xl flex-1 h-1/2 items-center">
          <SearchIcon className="h-5 mx-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search for anything"
            className="bg-transparent text-sm outline-none"
          />
        </form>
        <h3 className="hidden text-sm lg:block">Udemy Business</h3>
        <h3 className="hidden text-sm lg:block md:hidden">Teach on Udemy</h3>
        <div className="flex">
          <SearchIcon className="h-6 w-6 mx-4 text-gray-400 md:hidden" />
          <ShoppingCartIcon className="h-6 w-6 mx-4 text-gray-400" />
        </div>
        <div className="hidden md:flex pr-4 space-x-4 justify-end">
          <button className="border border-black text-sm h-10 font-bold w-20 hover:bg-[#F5F5F5]">
            Log In
          </button>
          <button className="border bg-black text-white border-back text-sm h-10 font-bold w-20">
            Sign up
          </button>
          <button className="border border-black w-10 flex items-center justify-center hover:bg-[#F5F5F5]">
            <GlobeAltIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
