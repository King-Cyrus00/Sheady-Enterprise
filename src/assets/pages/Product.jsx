// AllProducts.jsx
import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../Content/Cart";
import products from "../data/Products";
import { FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalProduct, setModalProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    AOS.init({ duration: 800 });
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  const openModal = (product) => setModalProduct(product);
  const closeModal = () => setModalProduct(null);

  const handleBuyNow = (product) => {
    addToCart(product);
    window.location.href = "/checkout";
  };

  const handleAddToCart = async (product) => {
    setIsAdding(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    addToCart(product);
    setIsAdding(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#ec8733]"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <section className="w-full px-4 py-12 bg-white font-[Montserrat]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-6">
            <div className="space-y-1">
              <p className="text-sm text-gray-400 uppercase tracking-wide">Belvant Trends</p>
              <h2 className="text-3xl font-bold text-[#1b5059]">Latest Products</h2>
              <p className="text-sm text-gray-500">Showing Results by Category</p>
            </div>
            <div className="relative w-full sm:w-auto">
              <label htmlFor="categoryFilter" className="block text-sm text-[#1b5059] font-medium mb-1">
                Filter by Category
              </label>
              <select
                id="categoryFilter"
                onChange={handleCategoryChange}
                value={selectedCategory}
                className="appearance-none border border-gray-300 px-5 py-2 rounded-full text-sm bg-white focus:outline-none focus:ring-[#ec8733] focus:border-[#ec8733] shadow-sm w-full"
              >
                <option>All</option>
                <option>Skin Care</option>
                <option>Hair Care</option>
                <option>Soap</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                data-aos="fade-up"
                className="bg-[#fdf6f0] rounded-2xl p-6 cursor-pointer shadow-md hover:shadow-lg transition duration-300 hover:scale-[1.01]"
                onClick={() => openModal(item)}
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-72 object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-xs uppercase text-[#1b5059] font-semibold mb-1">{item.tagline}</p>
                  <h3 className="text-sm text-[#1b5059] font-medium mb-1">{item.name}</h3>
                  <div className="text-[#ec8733] font-semibold text-sm">
                    GH₵{item.price.toFixed(2)}
                    {item.oldPrice && (
                      <span className="text-gray-400 line-through text-xs ml-2">
                        GH₵{item.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {modalProduct && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white max-w-xl w-full rounded-2xl p-8 relative shadow-2xl animate-fadeIn">
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 text-[#1b5059] hover:text-red-500 text-xl"
              >
                <FaTimes />
              </button>
              <div className="flex flex-col items-center text-center">
                <img
                  src={modalProduct.image}
                  alt={modalProduct.name}
                  className="w-48 h-48 object-contain rounded-lg mb-4 border"
                />
                <h2 className="text-2xl font-bold text-[#1b5059] mb-1">{modalProduct.name}</h2>
                <p className="text-sm text-[#1b5059] italic mb-2">{modalProduct.tagline}</p>
                <div className="text-[#ec8733] text-lg font-semibold mb-4">
                  GH₵{modalProduct.price.toFixed(2)}
                  {modalProduct.oldPrice && (
                    <span className="ml-2 text-gray-400 line-through text-sm">
                      GH₵{modalProduct.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <button
                    onClick={() => handleAddToCart(modalProduct)}
                    className="bg-[#ec8733] text-white px-6 py-2 rounded-full hover:bg-[#d86620] transition w-full font-semibold shadow-md"
                    disabled={isAdding}
                  >
                    {isAdding ? "Adding to Cart..." : "Add to Cart"}
                  </button>
                  <button
                    onClick={() => handleBuyNow(modalProduct)}
                    className="bg-[#1b5059] text-white px-6 py-2 rounded-full hover:bg-[#154048] transition w-full font-semibold shadow-md"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default AllProducts;
