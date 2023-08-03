
import {navLinks} from "../constants";

const NavListDesktop = () => (
    <ul className=" list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={ `font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10' } ` }
          >
            <a href={` #${nav.id} `}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
  )

const NavListMobile = () => (
  <ul className=" list-none flex flex-col justify-end items-start flex-1">
      {navLinks.map((nav, index) => (
        <li
          key={nav.id}
          className={ `font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4' } ` }
        >
          <a href={` #${nav.id} `}>
            {nav.title}
          </a>
        </li>
      ))}
    </ul>
)

export  {NavListDesktop, NavListMobile}
