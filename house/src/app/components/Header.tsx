import Link from 'next/link';
import React from 'react'
import { GiHouse } from "react-icons/gi";
import { IoCallOutline } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa6';


interface Props {
    openNav:() => void
  }

const Header = ({openNav}:Props ) => {
  
    return (
    <div  className="relative z-50">
      <div className="h-[12vh] bg-white">
      <div className="sm:w-[90%] w-[95%] mx-auto flex h-full items-center justify-between">
        {/* Logo div */}

        <div className="flex items-center space-x-1">

<div className="text-[20px] sm:text-[30px] text-red-600">
    <GiHouse />
</div>

<h1 className="text-[20px] sm:text-[30px] font-bold text-black whitespace-nowrap">Apna Ghar</h1>

</div>


        {/* Navbar links */}
        <ul className="hidden lg:flex items-center justify-center space-x-10 h-full w-full">
          <li className="text-[20px] font-bold hover:text-red-600">
            <Link href="/">HOME</Link>
          </li>
          <li className="text-[20px] font-bold hover:text-red-600">
            <Link href="/Properties">PROPERTIES</Link>
          </li>
          <li className="text-[20px] font-bold hover:text-red-600">
            <Link href="/Services">SERVICES</Link>
          </li>
          <li className="text-[20px] font-bold hover:text-red-600">
            <Link href="/About">ABOUT ME</Link>
          </li>
          <li className="text-[20px] font-bold hover:text-red-600">
            <Link href="/Contact">CONTACT</Link>
          </li>
        </ul>

      {/*button*/}
      
      <div className="flex items-center space-x-4">
  <button className="px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-blue-950 transition-all duration-200 hover:bg-red-600
    flex items-center rounded-md space-x-2 text-white">
    
    <div className="w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]">
    <IoCallOutline />
    </div>

    <span className="font-bold whitespace-nowrap">+92 308 2735132</span>

  </button>

  <div onClick={openNav} className='lg:hidden w-[2rem] h-[2rem] text-black'>
  <FaBars />
  </div> 

</div>

      </div>
    </div>
    </div>
  )
}

export default Header;
