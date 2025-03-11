"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [expanded, setExpanded]: [boolean, (value: boolean) => void] = useState<boolean>(false);

  return (
    <div>
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
              <a href="#hero" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Home </a>
              <a href="#about" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> About </a>
              <a href="#services" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Services </a>
              <a href="#products" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Products </a>
              <a href="#contact" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Contact </a>
            </nav>
          </div>

          {/* Mobile Menu */}
          {expanded && (
            <nav>
              <div className="flex flex-col pt-8 pb-4 space-y-6">
                <a href="#hero" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Home </a>
                <a href="#about" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> About </a>
                <a href="#services" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Services </a>
                <a href="#products" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Products </a>
                <a href="#contact" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Contact </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24" id="hero">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative flex flex-col lg:flex-row items-center">
            {/* Left content */}
            <div className="lg:w-1/2 lg:pr-12 fadeInRight">
              <p className="text-sm font-normal tracking-widest text-gray-300 uppercase">
                All-in-One Integration Platform
              </p>
              <h1 className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                  Seamless Integrations
                </span>{' '}
                for Your SaaS Products
              </h1>
              <p className="max-w-lg mt-4 text-xl font-normal text-gray-400 sm:mt-8">
                Bring your favorite apps directly into your CRM, Support Desk, WhatsApp Web, and more. 
                Enhance your workflows with 100+ integrations for popular platforms.
              </p>
              
              {/* Integration Categories */}
              <div className="grid grid-cols-2 gap-4 mt-8 sm:grid-cols-2 md:gap-6">
                {['Messaging', 'CPaaS', 'Calendar', 'CRM'].map((category) => (
                  <div key={category} className="p-3 text-center rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300">
                    <p className="text-sm text-gray-300">{category}</p>
                    <p className="text-lg font-semibold text-white">Integration</p>
                  </div>
                ))}
              </div>

              <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <a href="#" className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full">
                  Explore Integrations
                </a>
              </div>

              <div className="inline-flex items-center pt-6 mt-8 border-t border-gray-800 sm:pt-10 sm:mt-14">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 7.00003H21M21 7.00003V15M21 7.00003L13 15L9 11L3 17" stroke="url(#a)" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="a" x1="3" y1="7.00003" x2="22.2956" y2="12.0274" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" style={{ stopColor: 'var(--color-cyan-500)' }} />
                      <stop offset="100%" style={{ stopColor: 'var(--color-purple-500)' }} />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="ml-2 text-base font-normal text-white">
                  100+ plugins available for popular SaaS products
                </span>
              </div>
            </div>

            {/* Right content - Image and Integration cards */}
            <div className="lg:w-1/2 mt-12 lg:mt-0 fadeInLeft">
              <div className="relative">
                {/* Original 3D illustration with improved sizing */}
                <Image 
                  className="w-full h-auto object-contain mx-auto"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png"
                  alt="Integration Illustration"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
