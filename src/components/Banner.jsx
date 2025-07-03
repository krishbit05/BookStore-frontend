import { MoveDown} from 'lucide-react';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';
import Freebooks from './Freebooks';

function Banner() {
  const freeBooksRef = useRef(null);
  const [isStarted, setIsStarted] = useState(localStorage.getItem("userEmail")?true:false);
  const [email, setEmail] = useState(null);
  const inputRef = useRef(null);

  const handleGetStarted = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
      toast.error("Please enter an email address.");
    } else if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
    } else {
      localStorage.setItem("userEmail", email);
      setIsStarted(true);
      freeBooksRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    inputRef.current.value = "";
  }
  return (
    <div>
      <div className="lg:mt-20 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 gap-6 ">
        {/* Left Side */}
        <div className="w-full max-w-xl mx-auto text-center md:text-left md:mx-0">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white/85">
            <div>Hello, Welcome to learn</div>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-1">
              <div>something</div>
              <div className="text-pink-500">new everyday!</div>
            </div>
          </div>
          <p className="mt-4 text-gray-600 dark:text-white/50 max-w-md mx-auto md:mx-0">
            Browse trending titles, discover hidden gems, or dive into classics – all in one place.
          </p>

          {isStarted ?
            (<div>
              <h1 className="text-xl lg:text-2xl font-bold mb-4 mt-6 text-black/80 dark:text-white/80"><span className='text-pink-500'>Thanks!</span> Enjoy your free books below</h1>
                <div className='flex md:hidden justify-center'><MoveDown className='dark:text-white/85 mt-2  animate-bounce rounded-full w-8 h-8'/></div>
            </div>) :
            (<div>
              <div className="flex items-center border border-gray-300 rounded-md px-4 py-4 mt-5 max-w-md mx-auto md:mx-0 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-black dark:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.08 1.917l-7.5 4.5a2.25 2.25 0 01-2.34 0l-7.5-4.5A2.25 2.25 0 012.25 6.993V6.75"
                  />
                </svg>

                <input ref={inputRef} className="outline-none w-full ml-2 text-md dark:bg-transparent dark:text-white" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email..." />
              </div>

              <div className="mt-5">
                <button
                  onClick={handleGetStarted}
                  className="bg-pink-500 text-white px-5 py-2 rounded-md hover:bg-pink-400 transition">
                  Get Started
                </button>
              </div>
            </div>)}

        </div>

        {/* Right Side Image */}
        <div className="flex justify-center w-full">
          <img className="max-w-xl w-full h-auto object-contain " src="/books1.png" alt="Stack of educational books" />
        </div>
      </div>

      <Freebooks ref={freeBooksRef} />
    </div>
  );
}

export default Banner;
