import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const Header = ({ links }) => {
  const [isNavLinksOpen, setIsNavLinksOpen] = useState(false);

  useEffect(() => {
    if (isNavLinksOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => document.body.style.overflow = "auto"
  }, [isNavLinksOpen])
  return (
    <nav id='home' className='lg:pl-8 lg:pr-8 lg:pt-8  min-[320px]:p-4 flex justify-between w-full lg:bg-transparent min-[320px]:bg-[#302824;]'>
      <Link to={links[0]}
        className='nav-links hover:cursor-pointer  hover:underline transition'
        // onClick={closeMobileMenu}
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}><img src='logo.png' alt='logo' className='min-[320px]:w-14 min-[320px]:h-14 lg:w-24 lg:h-24 rounded-full' /></Link>

      {/* For larger devices  */}
      <ul className='w-4/5 h-24 bg-glassmorphism rounded-md min-[320px]:hidden lg:flex justify-evenly items-center font-lato text-2xl text-textColor '>
        <Link to={links[0]}
          className='nav-links hover:cursor-pointer  hover:underline transition'
          // onClick={closeMobileMenu}
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}>Home</Link>
        <Link to={links[1]}
          className='nav-links hover:cursor-pointer  hover:underline transition'
          // onClick={closeMobileMenu}
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}>Projects</Link>
        <Link to={links[2]}
          className='nav-links hover:cursor-pointer  hover:underline transition'
          // onClick={closeMobileMenu}
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}>How we Work</Link>
        <Link to={links[3]}
          className='nav-links hover:cursor-pointer  hover:underline transition'
          // onClick={closeMobileMenu}
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}>About Us</Link>
        <Link to={links[4]}
          className='nav-links hover:cursor-pointer  hover:underline transition'
          // onClick={closeMobileMenu}
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}>Contacts</Link>

      </ul>

      {/* For smaller devices */}
      <button className='min-[320px]:block lg:hidden outline-none border-none' onClick={() => setIsNavLinksOpen(true)}>
        <GiHamburgerMenu className='text-textColor fill-[#bd9b6d] w-10 h-10' />
      </button>

      {
        isNavLinksOpen && <div className='fixed bg-[#302824] h-[100dvh] z-[99999]  w-full top-0 right-0 transition ease-in-out'>
          <button className='min-[320px]:block lg:hidden outline-none border-none' onClick={() => setIsNavLinksOpen(false)}><RxCross2 className='absolute text-textColor fill-[#bd9b6d] w-10 h-10 right-4 top-4' /></button>
          <ul className='text-textColor fill-[#bd9b6d] text-4xl flex flex-col justify-center items-center gap-8 mt-28 min-[768px]:h-3/4 min-[768px]:justify-evenly'>
            <Link to={links[0]}
              className='nav-links hover:cursor-pointer  hover:underline transition'
              onClick={()=>setIsNavLinksOpen(false)}
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}>Home</Link>
            <Link to={links[1]}
              className='nav-links hover:cursor-pointer  hover:underline transition'
              onClick={()=>setIsNavLinksOpen(false)}
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}>Projects</Link>
            <Link to={links[2]}
              className='nav-links hover:cursor-pointer  hover:underline transition'
              onClick={()=>setIsNavLinksOpen(false)}
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}>How we Work</Link>
            <Link to={links[3]}
              className='nav-links hover:cursor-pointer  hover:underline transition'
              onClick={()=>setIsNavLinksOpen(false)}
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}>About Us</Link>
            <Link to={links[4]}
              className='nav-links hover:cursor-pointer  hover:underline transition'
              onClick={()=>setIsNavLinksOpen(false)}
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}>Contacts</Link>
          </ul>
        </div>
      }


    </nav>
  )
}

export default Header