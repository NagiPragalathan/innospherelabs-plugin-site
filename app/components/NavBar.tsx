"use client";

import React, { useState } from 'react'
import Image from 'next/image';


const NavBar = () => {
  const [expanded, setExpanded]: [boolean, (value: boolean) => void] = useState<boolean>(false);
  return (
    <header className="sticky top-0 py-4 !bg-[#00000000] bg-black sm:py-6 p-[30px] backdrop-blur-md z-50">
    <div className="px-4 mx-auto max-8xl sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div className="shrink-0">
          <a href="#" title="" className="flex">
            <Image className="w-auto h-9" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/logo.svg" alt="Logo" width={100} height={100} />
          </a>
        </div>

        <div className="flex md:hidden">
          <button
            type="button"
            className="text-white"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded ? 'true' : 'false'}
          >
            <span className={!expanded ? 'block' : 'hidden'} aria-hidden="true">
              <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </span>

            <span className={expanded ? 'block' : 'hidden'} aria-hidden="true">
              <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </button>
        </div>

        <nav className="hidden md:flex md:items-center md:justify-end md:space-x-12">
          <a href="/#hero" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Home </a>
          <a href="/#about" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> About </a>
          <a href="/#services" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Services </a>
          <a href="/#products" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Products </a>
          <a href="/#contact" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Contact </a>
          <a href="/terms-of-service" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Terms of Service </a>
          <a href="/privacy-policy" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Privacy Policy </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {expanded && (
        <nav>
          <div className="flex flex-col pt-8 pb-4 space-y-6">
            <a href="/#hero" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Home </a>
            <a href="/#about" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> About </a>
            <a href="/#services" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Services </a>
            <a href="/#products" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Products </a>
            <a href="/#contact" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Contact </a>
            <a href="/terms-of-service" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Terms of Service </a>
            <a href="/privacy-policy" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Privacy Policy </a>
          </div>
        </nav>
      )}
    </div>
  </header>
  )
}

export default NavBar
