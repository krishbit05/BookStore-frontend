import { useState } from "react";
import { FileUp } from "lucide-react";
import AdminNavbar from "./AdminNavBar";
import AdminSidebar from "./AdminSidebar";
import axios from "axios";

export default function AddBooks() {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    title: "",
    category: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://bookstore-backend-8ka1.onrender.com/book/add-books", formData);
      console.log("Book added:", res.data);
      setFormData({ image: "", name: "", title: "", category: "", price: "" });
    } catch (err) {
      console.error("Error adding book:", err);
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className="min-h-screen flex px-2 mt-16">
        <div className="flex gap-2 justify-between w-full">
          <AdminSidebar />
          <div className="w-full px-6 md:px-24 py-10">
            <h2 className="text-2xl font-semibold mb-6">📚 Add New Book</h2>

            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col gap-6 max-w-3xl"
            >
              {/* Image URL */}
              <div className="flex flex-col items-start gap-2">
                <label className="text-gray-700 font-medium">Book Image</label>
                <div className="flex items-center gap-4 w-full">
                  <FileUp className="w-10 h-10 text-pink-500" />
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="Enter image URL"
                    required
                    className="border border-gray-300 px-3 py-1 rounded-md w-full"
                  />
                </div>
              </div>

              {/* Name */}
              <div className="flex flex-col gap-1">
                <label className="text-gray-700 font-medium">Book Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter book name"
                  required
                  className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              {/* Title */}
              <div className="flex flex-col gap-1">
                <label className="text-gray-700 font-medium">Book Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter book title"
                  required
                  className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              {/* Category */}
              <div className="flex flex-col gap-1">
                <label className="text-gray-700 font-medium">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                >
                  <option value="">Select a category</option>
                  <option value="fiction">Fiction</option>
                  <option value="nonfiction">Non-Fiction</option>
                  <option value="sci-fi">Sci-Fi</option>
                  <option value="biography">Biography</option>
                  <option value="educational">Educational</option>
                </select>
              </div>

              {/* Price */}
              <div className="flex flex-col gap-1">
                <label className="text-gray-700 font-medium">Price (₹)</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Enter price"
                  required
                  className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              {/* Submit */}
              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-md transition"
                >
                  Add Book
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
