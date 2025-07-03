import React from 'react'

function Contact() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black/55 dark:backdrop:blur-sm px-4">
                <a
                    href="/"
                    className="absolute top-4 right-4 text-4xl text-black transition duration-200 font-bold"
                >
                    &times;
                </a>
                <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 w-full max-w-lg">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">Contact Us</h2>
                    <form className="flex flex-col gap-5">
                        <div>
                            <label className="block mb-1 text-sm text-gray-700 dark:text-white/95">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-transparent text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm text-gray-700 dark:text-white/95">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-transparent text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm text-gray-700 dark:text-white/95">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Write your message"
                                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-transparent text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-pink-500 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact