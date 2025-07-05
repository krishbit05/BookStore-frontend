import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BuyPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`https://bookstore-backend-8ka1.onrender.com/book/${id}`);
        setBook(res.data);
      } catch (err) {
        console.error("Failed to fetch book:", err);
      }
    };
    fetchBook();
  }, [id]);

  if (!book) return <div className="p-10">Loading book details...</div>;

  return (
    <div className="min-h-screen p-10 bg-gray-100 flex justify-center items-center">
      <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl w-full">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={book.image || "https://via.placeholder.com/150"}
            alt={book.name}
            className="w-full md:w-48 h-auto object-cover rounded"
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">{book.name}</h2>
            <p className="text-gray-700"><span className="font-semibold">Title:</span> {book.title}</p>
            <p className="text-gray-700"><span className="font-semibold">Category:</span> {book.category}</p>
            <p className="text-green-600 text-xl font-semibold">₹{book.price}</p>
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded w-max">
              Confirm Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
