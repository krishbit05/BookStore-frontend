import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthProvider';
import Login from './Login';
import Logout from './Logout';
import {ShoppingCart} from "lucide-react"
 
function Navbar() {
  const [authUser, setAuthUser] = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const [isDark, setIsDark] = useState(theme === "dark" ? true : false);
  const [showLogin, setShowLogin] = useState(false);
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = (
    <>
      <li><a href="/" className="hover:text-pink-500 block px-4 py-2 dark:text-white/90 dark:hover:text-pink-500">Home</a></li>
      <li><a href="/course" className="hover:text-pink-500 block px-4 py-2 dark:text-white/90 dark:hover:text-pink-500">Books</a></li>
      <li><a href="/contact" className="hover:text-pink-500 block px-4 py-2 dark:text-white/90 dark:hover:text-pink-500">Contact</a></li>
      <li><a href="/purchases" className="hover:text-pink-500 block px-4 py-2 dark:text-white/90 dark:hover:text-pink-500"><ShoppingCart/></a></li>
    </>
  );

  return (
    <header className={`z-50 fixed top-0 w-full transition-all ${scrolled ? 'bg-red-100 shadow-md dark:bg-black/60 dark:backdrop-blur-lg' : ''} dark:bg-grey-900 dark:text-white  transition: background-color 0.3s, color 0.3s`}>
      <nav className="flex items-center justify-between mr-4 px-4 py-3 md:px-10">
        <a href="#" className="text-2xl font-bold text-gray-800 flex items-center gap-1 dark:text-white/95">
          Book <span className="text-pink-500">Store</span>
        </a>
        <div className='flex justify-start gap-5 items-center'>
          <ul className="hidden lg:flex text-gray-700 text-lg gap-4">
            {navItems}
          </ul>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center border border-gray-300 rounded-md px-3 py-2 gap-2 bg-white dark:bg-white/90  shadow-sm w-[250px]">
              <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24">
                <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.3-4.3" />
                </g>
              </svg>
              <input type="search" placeholder="Search" className="w-full outline-none text-sm bg-transparent dark:text-black dark:placeholder:text-black" />
            </div>
          </div>
          
          <div onClick={() => setIsDark(!isDark)} className="cursor-pointer">
            {isDark ? (
              // sun
              <svg
                className="swap-off h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <path
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            ) : (
              // moon 
              <svg
                className="swap-on h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <path
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            )}
          </div>
          {
            authUser ? (
              <Logout />
            ) : (
              <div>
                <a className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 text-sm transition font-semibold " onClick={() => setShowLogin(true)}>Login</a>
                <Login isOpen={showLogin} onClose={() => setShowLogin(false)} />
              </div>
            )
          }
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            <svg className="w-6 h-6 text-gray-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <ul className="absolute top-full right-4 mt-2 bg-white border rounded-md shadow-lg w-48 lg:hidden dark:bg-black dark:text-white">
            {navItems}
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
