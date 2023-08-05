'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {

  return (    
       <>
          <nav class="bg-white border-gray-200 dark:bg-gray-900 border-b-2">
              <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                  <Link href="/">
                    <Image
                        src="/sai_logo.png"
                        width={150}
                        height={70}
                        alt="Company Logo"
                        className=""
                      />
                  </Link>
                  <div class="flex items-center">
                      <a href="tel:+91-9836913164" class="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">+91-9836913164 (India),  +1-917-730-4660 (U.S.)</a>
                      <a href="#" class="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Contect Us</a>
                  </div>
              </div>
          </nav> 



          <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
              <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              
           <button 
           data-collapse-toggle="navbar-multi-level"
           type="button" 
           class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" 
           aria-expanded="false"
           >
            <span 
            class="sr-only"
            >
              Open main menu
            </span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1    13h15"/>
               </svg>
           </button>
          <div 
          class="hidden w-full md:block md:w-auto" 
          id="navbar-multi-level"
          >
            <ul 
              class="flex flex-col font-medium p-4 md:p-0 mt-4 mb-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white"
            >
              <li>
                  <a 
                  href="#" 
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:text-blue-700 md:p-0" 
                  >
                    Home
                  </a>
             </li>
             <li>
              <button  
              class="flex items-center justify-between w-full py-2 pl-3 pr-4  md:hover:text-blue-700 md:p-0 md:w-auto"
              >
              Industry Reports
                <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
                </button>   
                </li>
               <li>
                <a href="#" class="flex items-center justify-between w-full py-2 pl-3 pr-4  md:hover:text-blue-700 md:p-0 md:w-auto">
                  Solutions
                  <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </a>
                </li>
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:text-blue-700 md:p-0">Resources </a>
                </li>
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:text-blue-700 md:p-0">AIM Box </a>
                </li>
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:text-blue-700 md:p-0">News </a>
                </li>
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:text-blue-700 md:p-0">Press Release</a>
                </li>
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:text-blue-700 md:p-0">Blog</a>
                </li>
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:text-blue-700 md:p-0">Query</a>
                </li>
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:text-blue-700 md:p-0">About Us </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

     </>  
  );

};

export default Navbar;