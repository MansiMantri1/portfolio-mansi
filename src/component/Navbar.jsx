// import React from 'react'
import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-1" src={logo} alt="logo" style={{ width: "80px", height: "auto" }} />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a 
          href="https://www.linkedin.com/in/mansi-mantri-43b126216/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        {/* <FaGithub />
        <FaSquareXTwitter />
        <FaInstagram /> */}
      </div>
    </nav>
  )
}

export default Navbar;
