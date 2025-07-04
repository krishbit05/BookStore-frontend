import { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import axios from "axios";

const AdminHero = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("https://bookstore-backend-8ka1.onrender.com/book");
                setBooks(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getBook();
    }, []);
    return (
        <div className="min-h-screen flex px-2 mt-16">
            <div className="flex gap-2 justify-between w-full">
                <AdminSidebar />
                <div className="px-4 py-6 w-full">
                    <h2 className="text-2xl font-semibold">All books</h2>
                    <div className="border border-black/30 rounded-md py-2">
                        <div className="grid grid-cols-2 md:grid-cols-7 px-2 sm:px-4 py-2 border-b border-black/30 font-bold ">
                            <div className="col-span-1 md:col-span-3">Books</div>
                            <div className="hidden md:block md:col-span-2">Title</div>
                            <div className="hidden md:block md:col-span-1">Category</div>
                            <div className="col-span-1 md:col-span-1">Selling Price</div>
                        </div>
                        {books.map((item) => (
                            <div
                                key={item._id}
                                className="grid grid-cols-2 md:grid-cols-7 px-4 py-3 items-center border-b last:border-b-0 hover:bg-gray-50 transition"
                            >
                                <div className="col-span-1 md:col-span-3 flex items-center gap-4">
                                    <img
                                        src={item.image || "https://via.placeholder.com/40"}
                                        alt="Book"
                                        className="w-10 h-10 rounded object-cover"
                                    />
                                    <span className="font-semibold text-gray-800">{item.name}</span>
                                </div>

                                <div className="hidden md:block md:col-span-2 text-gray-700">{item.title}</div>
                                <div className="hidden md:block md:col-span-1 text-gray-700">{item.category}</div>
                                <div className="col-span-1 md:col-span-1 text-green-600 font-semibold">₹{item.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHero;
