import React, { useState, useContext } from "react";
import { Link } from "react-router";
import products from "../data/Products";
import { CartContext } from "../Content/Cart";
import { FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast"; // ✅ import toast

AOS.init();

const HomeProducts = () => {
  const featuredProducts = products.slice(0, 8);
  const [modalProduct, setModalProduct] = useState(null);
  const [loading, setLoading] = useState(false);
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
    await new Promise((resolve) => setTimeout(resolve, 800));
    addToCart({ ...product, quantity });
    setIsAdding(false);
    closeModal();

    // ✅ Toast
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
      <Toaster /> {/* ✅ This enables toast notifications */}
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

       {modalProduct && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-white max-w-xl w-full rounded-2xl p-8 relative shadow-2xl animate-fadeIn font-[Montserrat]">
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
        <h2 className="text-2xl font-bold text-[#1b5059] mb-1">
          {modalProduct.name}
        </h2>
        <p className="text-sm text-[#1b5059] italic mb-2">
          {modalProduct.tagline}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          {modalProduct.description ||
            "This nourishing product is crafted from premium natural ingredients, designed to enhance your skin's health and glow."}
        </p>

        <div className="text-[#ec8733] text-lg font-semibold mb-4">
          GH₵{modalProduct.price.toFixed(2)}
          {modalProduct.oldPrice && (
            <span className="ml-2 text-gray-400 line-through text-sm">
              GH₵{modalProduct.oldPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-[#1b5059] font-bold"
          >
            -
          </button>
          <span className="font-medium text-[#1b5059]">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-[#1b5059] font-bold"
          >
            +
          </button>
        </div>

        {/* Add to Cart */}
        <button
          onClick={() => handleAddToCart(modalProduct)}
          className="bg-[#ec8733] text-white px-6 py-2 rounded-full hover:bg-[#d86620] transition w-full font-semibold shadow-md"
          disabled={isAdding}
        >
          {isAdding ? "Adding to Cart..." : "Add to Cart"}
        </button>

        {/* WhatsApp Order */}
        <a
          href={`HTTPS://wa.me/+233540435713?text=Hi Sheady, I want to order ${modalProduct.name} (Qty: ${quantity})`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block w-full bg-green-500 text-white text-center py-2 rounded-full hover:bg-green-600 font-semibold transition"
        >
          Order via WhatsApp
        </a>

        {/* Call to Order */}
        <a
          href="tel:+233540435713"
          className="text-sm text-[#1b5059] mt-3 underline hover:text-[#ec8733] text-center block"
        >
          Or Call to Order: +233 540 435 713
        </a>
      </div>
    </div>
  </div>
)}

      </section>
    </>
  );
};

export default HomeProducts;
