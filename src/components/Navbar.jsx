import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex justify-between items-center p-1 md:p-1">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-20 cursor-pointer" />
        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial ml-4">
          {["Home", "My Files", "Shared", "Tutorials"].map((item, index) => (
            <NavBarItem key={item + index} title={item} />
          ))}
        </ul>
      </div>
      <div className="flex items-center"> {/* Added div wrapper */}
        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial ml-4">
          <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"> {/* Added login button */}
            Login
          </li>
        </ul>
        <div className="relative">
          {!toggleMenu && (
            <HiMenuAlt4
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <AiOutlineClose
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          )}
          {toggleMenu && (
            <ul
              className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
            >
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;