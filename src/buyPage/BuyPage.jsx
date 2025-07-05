import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BuyPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`https://bookstore-backend-8ka1.onrender.com/book/${id}`);
        setBook(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch book:", err);
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md max-w-2xl w-full transition-all">
        {loading ? (
          <Skeleton />
        ) : (
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={book.image || "https://via.placeholder.com/150"}
              alt={book.name}
              className="w-full md:w-48 h-auto object-cover rounded"
            />
            <div className="flex flex-col gap-4 text-gray-800 dark:text-gray-100">
              <h2 className="text-2xl font-bold">{book.name}</h2>
              <p><span className="font-semibold">Title:</span> {book.title}</p>
              <p><span className="font-semibold">Category:</span> {book.category}</p>
              <p className="text-green-600 dark:text-green-400 text-xl font-semibold">₹{book.price}</p>
              <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded w-max transition">
                Confirm Purchase
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Skeleton() {
  return (
    <div className="animate-pulse flex flex-col md:flex-row gap-6">
      <div className="bg-gray-300 dark:bg-gray-700 h-48 w-full md:w-48 rounded" />
      <div className="flex flex-col gap-4 w-full">
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
        <div className="h-5 bg-green-300 dark:bg-green-600 rounded w-24"></div>
        <div className="h-10 bg-pink-300 dark:bg-pink-600 rounded w-36"></div>
      </div>
    </div>
  );
}
