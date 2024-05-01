"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import ProfileNav from './ProfileNav';
import { usePathname } from 'next/navigation';
import { IoMdGlobe } from 'react-icons/io';
import { GrLanguage } from 'react-icons/gr';
import { MdLanguage } from 'react-icons/md';
import logo from "../../../public/images/newLogo2.png";

const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/places",
    name: "Places",
  },
  {
    path: "/service",
    name: "Service",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];


const Navbar = () => {
  const pathname = usePathname();
  return <nav className="fixed z-20 w-full bg-white border-gray-200 dark:bg-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <Image src={logo} className="h-8" height={32} width={32} alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HavenHub</span>
    </Link>

    <div className='flex gap-6 md:order-2 '>
      <MdLanguage color='#111827' cursor="pointer" size={32} />
    <ProfileNav />
    </div>
    
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {navItems.map((item, i) => {
          {
            const isActive = item.path == pathname; 
            return(<li key={item.name}>
                    <Link href={item.path} 
                    className={`block py-2 px-3 
                    text-white 
                    bg-blue-700 
                    rounded
                    md:bg-transparent 
                    md:p-0 
                    md:dark:text-blue-500
                    ${isActive ? "md:text-blue-700" : "md:text-gray-900"}`
                  }
                    aria-current="page">{item.name}</Link>
                  </li>
          )}
        })}
      </ul>
    </div>
    </div>
  </nav>
  
}

export default Navbar