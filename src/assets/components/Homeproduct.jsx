import React, { useState, useContext } from "react";
import { Link } from "react-router";
import products from "../data/Products";
import { CartContext } from "../Content/Cart";
import { FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const HomeProducts = () => {
  const featuredProducts = products.slice(0, 8);
  const [modalProduct, setModalProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { addToCart } = useContext(CartContext);

  const openModal = (product) => setModalProduct(product);
  const closeModal = () => setModalProduct(null);

  const handleBuyNow = (product) => {
    addToCart(product);
    window.location.href = "/checkout";
  };

  const handleAddToCart = async (product) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    addToCart(product);
    setLoading(false);
  };

  return (
    <>
      <section className="bg-white py-16 px-4 sm:px-6 w-full">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
            <div>
              <p className="text-sm tracking-wide text-gray-500 uppercase font-medium">
                Explore Sheady
              </p>
              <h2 className="text-3xl font-bold text-[#1b5059]">Latest Products</h2>
            </div>
            <Link
              to="/product"
              className="text-sm text-[#1b5059] font-medium hover:text-[#ec8733] transition"
            >
              View All ↗
            </Link>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {featuredProducts.map((item) => (
              <div
                key={item.id}
                className="group bg-[#fdf6f0] rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
                onClick={() => openModal(item)}
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 sm:h-72 object-contain transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-xs text-[#1b5059] font-semibold uppercase mb-1">
                    {item.tagline}
                  </p>
                  <h3 className="text-base font-medium text-[#1b5059] mb-1">
                    {item.name}
                  </h3>
                  <div className="text-sm text-[#ec8733] font-semibold">
                    GH₵{item.price.toFixed(2)}
                    {item.oldPrice && (
                      <span className="line-through text-gray-400 ml-2 text-xs">
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
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
            <div className="bg-white max-w-lg w-full rounded-2xl p-8 relative shadow-2xl animate-fadeIn font-[Montserrat]">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-[#1b5059] hover:text-red-500 text-xl"
              >
                <FaTimes />
              </button>
              <div className="flex flex-col items-center text-center">
                <img
                  src={modalProduct.image}
                  alt={modalProduct.name}
                  className="w-48 h-48 object-contain rounded-lg mb-4 border border-gray-200"
                />
                <h2 className="text-2xl font-bold text-[#1b5059] mb-2">
                  {modalProduct.name}
                </h2>
                <p className="text-sm text-[#1b5059] italic mb-3">
                  {modalProduct.tagline}
                </p>
                <div className="text-xl font-semibold text-[#ec8733] mb-4">
                  GH₵{modalProduct.price.toFixed(2)}
                  {modalProduct.oldPrice && (
                    <span className="text-gray-400 line-through ml-2 text-sm">
                      GH₵{modalProduct.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
                  <button
                    onClick={() => handleAddToCart(modalProduct)}
                    className="bg-[#ec8733] text-white px-6 py-2 rounded-full hover:bg-[#d86620] transition shadow-lg font-semibold"
                  >
                    {loading ? "Adding..." : "Add to Cart"}
                  </button>
                  <button
                    onClick={() => handleBuyNow(modalProduct)}
                    className="bg-[#1b5059] text-white px-6 py-2 rounded-full hover:bg-[#154048] transition shadow-lg font-semibold"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default HomeProducts;
