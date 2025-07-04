import { LucideMenu, PlusCircle, ShoppingBag } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navItems = [
    { icon: <LucideMenu />, label: "All Books", path: "/admin" },
    { icon: <PlusCircle className="rounded-full"/>, label: "Add Book", path: "/admin/add-books" },
    { icon: <ShoppingBag />, label: "Orders", path: "/admin/orders" },
  ];

  return (
    <div className="flex flex-col gap-2 w-[25%] py-4 px-3 border-r-2 border-pink-500 hidden md:block">
      {navItems.map((item, index) => (
        <div
          key={index}
          onClick={() => navigate(item.path)}
          className={`flex gap-2 items-center p-2 rounded cursor-pointer transition 
            ${
              pathname === item.path
                ? "bg-pink-500 text-white"
                : "text-black"
            }`}
        >
          {item.icon}
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default AdminSidebar;
