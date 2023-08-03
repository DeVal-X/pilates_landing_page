import {useState} from 'react'

import { NavListDesktop, NavListMobile } from "./NavList";
import {close, logo, menu  } from "../assets";

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return(
    <nav className=" w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
      <NavListDesktop />

      <div className="sm:hidden flex flex1 justify-end items-center">
        <img
          src={toggle ? close : menu }
          alt="menu de navigation"
          className="w-[28px]  h-[28px] object-contain"
          onClick= { () => setToggle((prev) => !prev )}
        />

        <div className={` ${toggle ? 'flex' : 'hidden'} p-6 bg-green-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <NavListMobile />
        </div>
      </div>

    </nav>
  )
}

export default Navbar
