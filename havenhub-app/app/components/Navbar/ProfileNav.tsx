'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import profileImg from '../../../public/images/profile_pic.jpg';

const ProfileNav = () => {
    const [openNav, setOpenNav] = useState(false);
    
  return  <div className="flex items-center space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" onClick={() => {setOpenNav(!openNav)}} className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <Image className="w-8 h-8 rounded-full object-cover object-center" src={profileImg} alt="user photo" width={32} height={32} />
      </button>
      
      {openNav && (
      <div className="z-50 block absolute top-12 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">Dabala Yoans</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <Link href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
          </li>
        </ul>
      </div>
      )}

      <div>
         
          <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded={false}>
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>    
      </div>
  </div>
}

export default ProfileNav