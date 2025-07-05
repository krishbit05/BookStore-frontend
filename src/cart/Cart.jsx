import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartProvider";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const deliveryCharge = 40;
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  const grandTotal = total + deliveryCharge;

  const handleCheckout = () => {
    clearCart();
    navigate("/orders");
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">🛒 Your Cart</h2>
        <button
          onClick={() => navigate("/orders")}
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          📦 My Orders
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-lg text-center mt-20">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded shadow"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt="book"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {item.title}
                    </p>
                  </div>
                </div>
                <div className="text-green-600 font-bold">₹{item.price}</div>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Bill / Summary */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow h-fit">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Items Total</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charge</span>
                <span>₹{deliveryCharge}</span>
              </div>
              <hr className="my-2 border-gray-300 dark:border-gray-600" />
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>₹{grandTotal}</span>
              </div>
            </div>

            <button
              className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded"
              onClick={handleCheckout}
            >
              Pay Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
