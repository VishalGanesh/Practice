import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ModeToggle } from '../mode-toggle'
import { Button } from '../ui/button'

const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Login",
      path: "/login"
    },
    {
      title: "Register",
      path: "/register"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Contact us",
      path: "/contact"
    }
  ]
  return (
    <div className="absolute top-0 left-0 w-full h-[8vh] flex flex-row justify-center items-center shadow-sm shadow-primary/50">
      {/* <div className='h-full w-1/4 flex flex-row justify-center items-center '></div> */}
      <div className="w-1/4 h-full text-primary font-bold flex justify-start items-center text-lg from-neutral-600 absolute left-14">Gymate</div>
      <div className='w-2/4 h-full font-bold flex flex-row justify-center items-center gap-8 absolute '>
        {/* <Link to='/'>Home </Link>
        <Link to='/login'>Login </Link>
        <Link to='/register'>Register </Link> */}
        {
          NavLinks.map((links, index) => (
            <li key={index} className='list-none'>
              <NavLink to={links.path}>
                {links.title}
              </NavLink>
            </li>
          ))
        }
        {/* <ModeToggle /> */}
      </div>
        <Button className=" flex-row absolute right-6 align-top items-center rounded-es-3xl ">Join Us</Button>  
            
    </div>
  )
}

export default Navbar