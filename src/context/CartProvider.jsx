import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);


export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (book) => {
        setCartItems((prev) => [...prev, book]);
    }

    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item._id !== id));
    };

    const clearCart = () => setCartItems([]);
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );

}