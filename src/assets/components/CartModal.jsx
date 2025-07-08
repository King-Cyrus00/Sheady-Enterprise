// src/components/CartModal.jsx
import React, { useContext } from "react";
import { CartContext } from "../Content/Cart";
import { FaTimes, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router";
import "@fontsource/montserrat";

const CartModal = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
        <div className="w-full max-w-full sm:max-w-md bg-white h-full p-6 shadow-2xl relative overflow-y-auto font-[Montserrat] rounded-l-xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#1b5059] hover:text-red-500 text-xl"
            title="Close"
          >
            <FaTimes />
          </button>

          <h2 className="text-2xl font-bold text-[#1b5059] mb-6 border-b pb-3">Your Cart</h2>

          {cartItems.length === 0 ? (
            <p className="text-sm text-gray-500">Your cart is currently empty.</p>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain rounded-lg border mx-auto sm:mx-0"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <h4 className="text-sm font-semibold text-[#1b5059] line-clamp-2">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">Qty: {item.quantity}</p>
                    <p className="text-sm font-semibold text-[#ec8733] mt-1">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 self-center sm:self-auto"
                    title="Remove"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              ))}

              {/* Subtotal */}
              <div className="border-t pt-4 mt-6">
                <div className="flex flex-col sm:flex-row justify-between text-sm font-medium text-[#1b5059] mb-2">
                  <span>Subtotal</span>
                  <span className="text-[#ec8733] font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <Link
                  to="/checkout"
                  className="block w-full mt-4 bg-[#ec8733] text-white text-center py-3 rounded-full font-semibold hover:bg-[#d86620] transition shadow-md"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default CartModal;