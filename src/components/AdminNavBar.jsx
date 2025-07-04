import { useState } from "react";
import { Menu } from "lucide-react";


export default function AdminNavbar() {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <nav className="fixed top-0 w-full flex items-center justify-between px-4 py-3 bg-white shadow-md ">
             <div className="absolute top-3 left-3 w-5 h-5   md:hidden">
                <button onClick={() => setShowSidebar(!showSidebar)}>
                    <Menu className="text-2xl" />
                </button>
            </div>
            <div className="flex items-center ml-8 md:ml-2 text-xl font-semibold ">Book<span className="text-pink-500">Store</span>
            </div>
            <div className="flex justify-between gap-4 items-center text-sm md:text-md">
                <div>
                    Hi! Admin
                </div>
                <button
                    className="text-sm bg-red-500 text-white px-2 py-1 md:px-4 md:py-2 rounded hover:bg-red-600 transition"
                >
                    Logout
                </button>
            </div>
        </nav>
    )
}