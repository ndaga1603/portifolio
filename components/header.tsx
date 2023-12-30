import React from "react";
import Image from "next/image";
import profile from "../public/profile.jpg";

function Header() {
  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={profile} className=" rounded-full" alt="Profile Image" width={100} height={100} />
        </a>
       
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <a href="#" className="block py-2 px-3 hover:underline text-white rounded " aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 hover:underline text-white rounded">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 hover:underline text-white rounded">Services</a>
            </li>
            <li><a href="#" className="block py-2 px-3 hover:underline text-white rounded">Pricing</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 hover:underline text-white rounded">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
