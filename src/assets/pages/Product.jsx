import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../Content/Cart";
import products from "../data/Products";
import { FaTimes, FaShoppingCart, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import toast, { Toaster } from "react-hot-toast";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion } from "framer-motion";


const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalProduct, setModalProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    AOS.init({ duration: 800 });
    setTimeout(() => setLoading(false), 800);
  }, []);

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const openModal = (product) => {
    setQuantity(1);
    setModalProduct(product);
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

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);
  const categories = ["All", ...new Set(products.map((item) => item.category))];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Toaster />
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1b5059] to-[#0d2e34] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Premium Collection</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Discover 100% natural shea butter products for radiant skin and healthy hair
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-6 border-b border-gray-100 bg-white sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-64">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full border border-gray-200 px-4 py-2 rounded-lg text-sm bg-white text-[#1b5059] focus:outline-none focus:ring-2 focus:ring-[#ec8733] focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="text-sm text-gray-500">
            Showing {filteredProducts.length} of {products.length} products
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-white px-4 flex-grow">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="aspect-square bg-gray-100 animate-pulse" />
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-gray-100 rounded w-3/4" />
                    <div className="h-3 bg-gray-100 rounded w-1/2" />
                    <div className="h-4 bg-gray-100 rounded w-1/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-[#1b5059] mb-2">No products found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((item) => (
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
                  <div className="p-4">
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
          )}
        </div>
      </section>

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
      
      <Footer />
    </div>
  );
};

export default AllProducts;