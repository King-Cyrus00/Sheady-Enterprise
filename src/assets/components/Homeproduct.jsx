import React, { useState, useContext } from "react";
import { Link } from "react-router";
import products from "../data/Products";
import { CartContext } from "../Content/Cart";
import { FaTimes, FaShoppingCart, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { FiPlus, FiMinus, FiArrowRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

AOS.init();

const HomeProducts = () => {
  const featuredProducts = products.slice(0, 3);
  const [modalProduct, setModalProduct] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const openModal = (product) => {
    setModalProduct(product);
    setQuantity(1);
  };

  const closeModal = () => setModalProduct(null);

  const handleAddToCart = async (product) => {
    setIsAdding(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    addToCart({ ...product, quantity });
    setIsAdding(false);
    closeModal();

    toast.success(`${product.name} added to cart`, {
      style: {
        borderRadius: "8px",
        background: "#fff",
        color: "#1b5059",
        fontWeight: "500",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      },
      iconTheme: {
        primary: "#ec8733",
        secondary: "#fff",
      },
    });
  };

  return (
    <>
      <Toaster />
      <section className="bg-white py-16 px-4 sm:px-6 w-full">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <div>
              <p className="text-xs tracking-wider text-[#ec8733] uppercase font-medium mb-2">
                Featured Collection
              </p>
              <h2 className="text-3xl font-bold text-[#1b5059]">Our Best Sellers</h2>
            </div>
            <Link
              to="/product"
              className="inline-flex items-center gap-2 border border-[#1b5059] text-[#1b5059] font-medium px-5 py-2 rounded-lg text-sm hover:bg-[#1b5059] hover:text-white transition-colors duration-200"
            >
              View All Products
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((item) => (
              <motion.div
                key={item.id}
                data-aos="fade-up"
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md group"
                onClick={() => openModal(item)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {item.oldPrice && (
                    <div className="absolute top-3 right-3 bg-[#ec8733] text-white text-xs font-bold px-2 py-1 rounded-full">
                      SALE
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1b5059] mb-1 group-hover:text-[#ec8733] transition-colors duration-300">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg font-bold text-[#ec8733]">
                        GH₵{item.price.toFixed(2)}
                      </span>
                      {item.oldPrice && (
                        <span className="ml-2 text-sm text-gray-400 line-through">
                          GH₵{item.oldPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {item.size}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Product Modal */}
        {modalProduct && (
          <>
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={closeModal} />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div 
                className="bg-white max-w-4xl w-full rounded-xl shadow-xl overflow-hidden max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-6 py-4 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-[#1b5059]">Product Details</h2>
                  <button 
                    onClick={closeModal} 
                    className="text-gray-400 hover:text-gray-600 transition"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>
                
                <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Product Image */}
                  <div className="flex justify-center">
                    <div className="bg-gray-50 rounded-lg p-4 w-full">
                      <img
                        src={modalProduct.image}
                        alt={modalProduct.name}
                        className="w-full h-auto max-h-[400px] object-contain rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-6">
                    <div>
                      <h1 className="text-2xl font-bold text-[#1b5059] mb-1">
                        {modalProduct.name}
                      </h1>
                      {modalProduct.tagline && (
                        <p className="text-sm text-[#1b5059]/70 mb-3">{modalProduct.tagline}</p>
                      )}
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-[#ec8733]">
                          GH₵{modalProduct.price.toFixed(2)}
                        </span>
                        {modalProduct.oldPrice && (
                          <span className="text-gray-400 line-through">
                            GH₵{modalProduct.oldPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-4 text-sm">
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-[#1b5059]">
                        {modalProduct.category}
                      </span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-[#1b5059]">
                        {modalProduct.size}
                      </span>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      {modalProduct.description ||
                        "This premium product is crafted with the finest natural ingredients to nourish and revitalize your skin and hair."}
                    </p>

                    {/* Quantity Selector */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-[#1b5059]">
                        Quantity
                      </label>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#1b5059] flex items-center justify-center transition"
                        >
                          <FiMinus />
                        </button>
                        <span className="font-medium text-[#1b5059] text-lg w-12 text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#1b5059] flex items-center justify-center transition"
                        >
                          <FiPlus />
                        </button>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <button
                        onClick={() => handleAddToCart(modalProduct)}
                        className="w-full bg-[#1b5059] hover:bg-[#0d2e34] text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition"
                        disabled={isAdding}
                      >
                        <FaShoppingCart />
                        {isAdding ? "Adding..." : `Add to Cart - GH₵${(modalProduct.price * quantity).toFixed(2)}`}
                      </button>

                      <div className="grid grid-cols-2 gap-3">
                        <a
                          href={`https://wa.me/233540435713?text=Hi Sheady, I want to order ${modalProduct.name} (Qty: ${quantity})`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-50 hover:bg-green-100 text-green-700 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition"
                        >
                          <FaWhatsapp />
                          WhatsApp
                        </a>
                        <a
                          href="tel:+233540435713"
                          className="bg-blue-50 hover:bg-blue-100 text-blue-700 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition"
                        >
                          <FaPhoneAlt />
                          Call Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default HomeProducts;