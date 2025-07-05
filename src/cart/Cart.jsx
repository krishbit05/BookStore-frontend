
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartProvider";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    navigate("/orders");
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded shadow"
            >
              <div className="flex items-center gap-4">
                <img src={item.image} alt="book" className="w-16 h-16 object-cover rounded" />
                <div>
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p>{item.title}</p>
                </div>
              </div>
              <div className="text-green-600 font-bold">₹{item.price}</div>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => removeFromCart(item._id)}
              >
                Remove
              </button>
            </div>
          ))}

          <button
            className="bg-green-500 text-white px-6 py-2 rounded mt-4"
            onClick={handleCheckout}
          >
            ✅ Place Order
          </button>
        </div>
      )}
    </div>
  );
}
