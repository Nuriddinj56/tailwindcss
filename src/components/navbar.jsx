import React, { useState } from "react";
import { styles } from "../util/style";
import { close, menu } from "../assets";
import { navigationLinks } from "../util/constants";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const [active, setActive] =useState('home')
  const toggleHandler = () => setToggleNav((prev) => !prev);
  const activeHandler =(id)=>setActive(id)
  return (
    <div className={`w-full py-6 ${styles.flexBetween}`}>
      {/* Logo */}
      <div className={`${styles.heading1}`}>Logo</div>
      {/* navigation link */}
      <ul className="list-none sm:flex hidden justify-end items-start flex-1">
        {navigationLinks.map((nav, inx) => (
          <li
            key={nav.id}
            className={`font-montserrat font-normal cursor-pointer text-[16px] text-white ${
              inx === navigationLinks.length - 1 ? "mr-10" : "mr-10"
            }
            ${active === nav.id ? 'text-white' : 'text-lightWhite'}
             hover:text-lightWhite transition-all duration-500 `}
            onClick={()=>activeHandler(nav.id)}
          >
           <a href={nav.id}> {nav.title}</a>
          </li>
        ))}
      </ul>
      {/* navigation btn */}
      <div className={"sm:hidden flex flex-1 justify-end items-center"}>
        <img
          src={toggleNav ? close : menu}
          alt=""
          className="w-[30px] h-[30px] object-contain"
          onClick={toggleHandler}
        />
        <div
          className={`${
            !toggleNav ? "hidden" : "flex"
          } p-6  absolute top-40 right-0 left-0  w-full sidebar bg-black-gradient`}
        >
          <ul className="list-none flex  justify-center items-start flex-1">
        {navigationLinks.map((nav, inx) => (
          <li
            key={nav.id}
            className={` ${
              inx === navigationLinks.length - 1 ? "mr-10" : "mr-10"
            }
            ${active===nav.id ?'text-white' : 'text-lightWhite'}
            font-montserrat font-normal cursor-pointer text-[16px] text-white hover:text-white transition-all duration-500 `}
             onClick={()=>activeHandler(nav.id)}
          >
            {nav.title}
          </li>
        ))}
      </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
