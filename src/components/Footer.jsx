import React from 'react';

function Footer() {
  return (
    <div className="flex flex-col items-center gap-4 px-4 py-6 mt-40 bg-gray-100 text-sm text-gray-700 dark:bg-black/20">
      <div className="border border-white/50 w-[100vw]" />

      <div className="flex flex-wrap justify-center gap-6">
        <a href="#" className="hover:text-pink-500 dark:text-white/50 dark:hover:text-pink-500">About Us</a>
        <a href="#" className="hover:text-pink-500 dark:text-white/50 dark:hover:text-pink-500">Contact</a>
        <a href="#" className="hover:text-pink-500 dark:text-white/50 dark:hover:text-pink-500">Jobs</a>
        <a href="#" className="hover:text-pink-500 dark:text-white/50 dark:hover:text-pink-500">Press</a>
      </div>

      <div className="flex gap-4 dark:text-white/50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 dark:text-white/50 dark:hover:text-pink-500 cursor-pointer"
        >
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.5v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 dark:text-white/50 dark:hover:text-pink-500 cursor-pointer"
        >
          <path d="M10 15l5-3-5-3v6z" />
          <rect x="3" y="5" width="18" height="14" rx="3" ry="3" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 dark:text-white/50 dark:hover:text-pink-500 cursor-pointer"
        >
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      </div>

      <p className="text-center text-xs text-gray-500 mt-2">
        © 2024 ACME Industries Ltd. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
