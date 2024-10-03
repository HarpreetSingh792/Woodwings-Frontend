import React from 'react'
import { Link } from 'react-scroll'
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="bg-[#4A4032] text-white font-lato">
            <div className="flex lg:flex-row min-[320px]:flex-col lg:justify-evenly lg:items-start min-[320px]:justify-center min-[320px]:items-center lg:gap-0  min-[320px]:gap-8 py-8 px-8">
                <Link to={"home"}
                    className='nav-links hover:cursor-pointer hover:text-white  hover:underline transition text-white/70'
                    // onClick={closeMobileMenu}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}> <img src="/logo.png" className="w-28 h-28 rounded-full" alt="logo" /></Link>

                {/* Quick Links */}
                <ul className="flex flex-col lg:text-base min-[320px]:text-xl lg:gap-0 min-[320px]:gap-2">
                    <p className='text-2xl min-[320px]:opacity-50 lg:opacity-100 lg:text-base'>Quick Links</p>
                    <Link to={"home"}
                        className='min-[320px]:text-center lg:text-start nav-links hover:cursor-pointer hover:text-white  hover:underline transition text-white/70'
                        // onClick={closeMobileMenu}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}>Home</Link>
                    <Link to={"projects"}
                        className='min-[320px]:text-center lg:text-start nav-links hover:cursor-pointer hover:text-white  hover:underline transition text-white/70'
                        // onClick={closeMobileMenu}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}>Projects</Link>
                    <Link to={"howWeWork"}
                        className='min-[320px]:text-center lg:text-start nav-links hover:cursor-pointer hover:text-white  hover:underline transition text-white/70'
                        // onClick={closeMobileMenu}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}>How we Work</Link>
                    <Link to={"aboutUs"}
                        className='nav-links min-[320px]:text-center lg:text-start hover:cursor-pointer hover:text-white  hover:underline transition text-white/70'
                        // onClick={closeMobileMenu}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}>About Us</Link>
                    <Link to={"contacts"}
                        className='nav-links min-[320px]:text-center lg:text-start hover:cursor-pointer hover:text-white  hover:underline transition text-white/70'
                        // onClick={closeMobileMenu}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}>Contacts</Link>

                </ul>

                <hr className='lg:hidden min-[320px]:block border-white border w-full opacity-50' />

                {/* Contact Info */}
                <ul className="flex flex-col lg:items-start pl-8 lg:justify-start min-[320px]:items-center min-[320px]:justify-center  gap-2">
                    <p className='text-2xl min-[320px]:opacity-50 lg:opacity-100 lg:text-base'>Contact Information</p>
                    <li className=" text-white/70 hover:text-white cursor-pointer w-full">Phone: <a href="tel:+610403597672">+61 0403-597-672</a></li>
                    <li className=" text-white/70 hover:text-white cursor-pointer w-full">Email: <a href="mailto:woodwings1313@gmail.com">woodwings1313@gmail.com</a></li>
                    <li className='flex gap-2 text-white/70 hover:text-white cursor-pointer'>Address: <address>Unit 2, 33 Meakin Road, Meadowbrook QLD 4131, Australia</address></li>
                </ul>

                <hr className='lg:hidden min-[320px]:block border-white border w-full opacity-50' />

                {/* Social Links */}
                <ul className="flex flex-col items-start justify-start gap-2">
                    <p className='text-2xl min-[320px]:opacity-50 lg:opacity-100 lg:text-base'>Follow Us</p>
                    <li className="flex gap-2 items-center justify-center text-white/70 hover:text-white cursor-pointer">
                        <a className="flex gap-2 items-center justify-center" href="www.facebook.com" target="__blank" rel="noopener noreferrer"><FaFacebook />
                            Facebook</a>
                    </li>
                    <li className="flex gap-2 items-center justify-center text-white/70 hover:text-white cursor-pointer">
                        <a className="flex gap-2 items-center justify-center" href="www.facebook.com" target="__blank" rel="noopener noreferrer"><RiInstagramFill />
                            Instagram</a>
                    </li>

                </ul>
            </div>


            <div className="w-full flex justify-center items-center h-8 bg-[#302824] text-white font-lato">
                <p className="italic text-center">Copyright © 2024 Woodwings. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer