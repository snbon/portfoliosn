import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaLink
} from 'react-icons/fa';
import Logo from '../assets/logosn.png';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Dock from './ui/dock';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const dockItems = [
    { 
      icon: <FaLinkedin size={24} />, 
      label: 'LinkedIn', 
      onClick: () => window.open('https://www.linkedin.com/in/baghsnnn/', '_blank')
    },
    { 
      icon: <FaGithub size={24} />, 
      label: 'Github', 
      onClick: () => window.open('https://github.com/snbon', '_blank')
    },
    { 
      icon: <HiOutlineMail size={24} />, 
      label: 'Email', 
      onClick: () => window.open('mailto:sweaniz@icloud.com', '_blank')
    },
    { 
      icon: <FaLink size={24} />, 
      label: 'More Links', 
      onClick: () => window.open('https://linktr.ee/baghsnn', '_blank')
    },
  ];

  return (
    
    <div className='fixed w-full h-[90px] flex justify-between items-center px-12 bg-[#0a192f] text-gray-300'>
      <div>
      <img src={Logo} alt='Logo' style={{ width: '25px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Dock - replaces the old social icons */}
      <div className='hidden lg:flex fixed bottom-4 left-1/2 transform -translate-x-1/2 z-[99999]'>
        <Dock 
          items={dockItems}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
          className="bg-[#0a192f] border-gray-600"
        />
      </div>
    </div>
  );
};

export default Navbar;
