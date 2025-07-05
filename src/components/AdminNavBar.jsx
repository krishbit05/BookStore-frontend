import { useState } from "react";
import { Menu } from "lucide-react";
import { LucideMenu, PlusCircle, ShoppingBag } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";


export default function AdminNavbar() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const navItems = [
        { icon: <LucideMenu />, label: "All Books", path: "/admin" },
        { icon: <PlusCircle className="rounded-full" />, label: "Add Book", path: "/admin/add-books" },
        { icon: <ShoppingBag />, label: "Orders", path: "/admin/orders" },
    ];

    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <>
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
            <div
                className={`
                    absolute top-[52px] left-0 z-50 h-full bg-white 
                    flex flex-col gap-2 py-4 border-r-2 border-black/25 md:hidden ${showSidebar ? 'w-1/2' : 'w-0'}
                    transition-width duration-300 ease-in-out
                  `}
            >
                {navItems.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => { navigate(item.path); setShowSidebar(false); }}
                        className={`flex gap-2 items-center p-2 rounded cursor-pointer transition ${showSidebar ?'block':'hidden'}
                      ${pathname === item.path
                                ? 'bg-pink-500 text-white'
                                : 'text-black'
                            }`}
                    >
                        {item.icon}
                        {item.label}
                    </div>
                ))}
            </div>
        </>
    )
}