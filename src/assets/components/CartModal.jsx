import React, { useContext } from "react";
import { CartContext } from "../Content/Cart";
import { FaTimes, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router";
import { toast } from "react-hot-toast";
import { Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "@fontsource/montserrat";

const CartModal = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckoutClick = () => {
    toast("Complete your order via WhatsApp or phone", {
      position: "bottom-center",
      style: {
        background: "#1b5059",
        color: "white",
        borderRadius: "12px",
      },
      icon: "📱",
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-xl flex flex-col"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
              <h2 className="text-xl font-semibold text-gray-900">Your Cart</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition"
                aria-label="Close cart"
              >
                <FaTimes className="text-gray-500 w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Your cart is empty</h3>
                  <p className="text-gray-500 mb-6">Browse our collection to get started</p>
                  <Link
                    to="/product"
                    onClick={onClose}
                    className="bg-[#1b5059] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#0d2e34] transition"
                  >
                    Shop Products
                  </Link>
                </div>
              ) : (
                <motion.div layout className="divide-y divide-gray-100">
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      className="flex items-center p-4 hover:bg-gray-50 transition"
                    >
                      <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{item.size}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm text-gray-600">
                            Qty: {item.quantity}
                          </span>
                          <span className="font-medium text-[#ec8733]">
                            GH₵{(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-4 p-2 text-gray-400 hover:text-red-500 transition"
                        aria-label="Remove item"
                      >
                        <FaTrashAlt className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-gray-100 p-5 bg-white sticky bottom-0">
                <div className="flex justify-between items-center mb-5">
                  <span className="font-medium text-gray-700">Subtotal</span>
                  <span className="text-lg font-bold text-[#ec8733]">
                    GH₵{subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleCheckoutClick}
                    className="w-full bg-[#1b5059] text-white py-3 rounded-lg font-medium hover:bg-[#0d2e34] transition"
                  >
                    Proceed to Checkout
                  </button>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="tel:+233540435713"
                      className="flex items-center justify-center gap-2 border border-[#1b5059] text-[#1b5059] py-2.5 rounded-lg font-medium hover:bg-[#1b5059] hover:text-white transition"
                    >
                      <Phone className="w-4 h-4" />
                      Call
                    </a>
                    <a
                      href="https://wa.me/233540435713?text=Hi Sheady, I want to order from my cart"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 border border-green-500 text-green-600 py-2.5 rounded-lg font-medium hover:bg-green-500 hover:text-white transition"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>

                  <Link
                    to="/product"
                    onClick={onClose}
                    className="block text-center text-[#1b5059] hover:text-[#ec8733] transition mt-3 text-sm font-medium"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartModal;