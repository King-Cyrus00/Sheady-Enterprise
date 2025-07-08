import { useState, useContext, useEffect } from "react";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import "@fontsource/montserrat";
import logo from "../images/sheady-logo.png";
import { Link, useNavigate, useLocation } from "react-router";
import { CartContext } from "../Content/Cart";
import CartModal from "../components/CartModal"; 
import soap from "../images/soap.jpg";
import skin from "../images/skin.jpg";  
import hair from "../images/hair.jpg";
import p1 from "../images/p1.jpg"; 

const categories = [
  {
    name: "All Products",
    value: "All",
    image: soap,
  },
  {
    name: "Skin Care",
    value: "Skin Care",
    image: skin,
  },
  {
    name: "Hair Care",
    value: "Hair Care",
    image: hair,
  },
  {
    name: "Soap",
    value: "Soap",
    image: p1,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const { cartCount } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCategoryClick = (categoryValue) => {
    const url = categoryValue === "All"
      ? "/product"
      : `/product?category=${encodeURIComponent(categoryValue)}`;
    navigate(url);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".category-dropdown")) {
        setDropdownOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white shadow-sm font-[Montserrat] relative z-50">
      {/* Top Bar */}
      <div className="bg-[#f9f4f0] text-sm text-gray-700 px-6 py-2 flex justify-between items-center">
        <div>Sophistication Meets Uncompromised Elegance</div>

        <div className="flex items-center space-x-5">
          <div className="hidden md:flex items-center border border-gray-300 px-2 py-1 rounded-full">
            <FiSearch className="mr-2" />
            <input
              type="text"
              placeholder="Search here..."
              className="outline-none text-sm bg-transparent placeholder-gray-500"
            />
          </div>

          <a
            href="#"
            className="text-sm hover:text-[#ec8733] hidden md:inline font-medium"
          >
            Find a store
          </a>

          <div
            className="relative cursor-pointer"
            onClick={() => setIsCartOpen(true)}
            title="View Cart"
          >
            <FiShoppingCart size={20} className="hover:text-[#ec8733]" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#ec8733] text-white text-[10px] px-1.5 py-[1px] rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <img
            src={logo}
            alt="Sheady Logo"
            className="h-10 w-auto object-contain cursor-pointer"
          />
        </Link>

        <nav className="hidden md:flex space-x-6 text-sm font-medium uppercase tracking-wide text-gray-800 relative">
          <Link to="/about" className="hover:text-[#ec8733]">About</Link>

          <div
            className="relative category-dropdown"
            onClick={(e) => {
              e.stopPropagation();
              setDropdownOpen(!dropdownOpen);
            }}
          >
            <button className="hover:text-[#ec8733]">CATEGORIES</button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md p-3 space-y-2 z-50">
                {categories.map((cat) => (
                  <div
                    key={cat.value}
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#fdf6f0] cursor-pointer transition"
                    onClick={() => handleCategoryClick(cat.value)}
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-8 h-8 rounded-full object-cover border"
                    />
                    <span className="text-sm text-[#1b5059] font-medium">{cat.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link to="/product" className="hover:text-[#ec8733]">Shop</Link>
          <Link to="/blogs" className="hover:text-[#ec8733]">Blogs</Link>
          <Link to="/contact" className="hover:text-[#ec8733]">Contact</Link>
        </nav>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md">
          <Link to="/about" className="block text-sm font-medium uppercase text-gray-800 hover:text-[#ec8733]">About</Link>
          <Link to="/product" className="block text-sm font-medium uppercase text-gray-800 hover:text-[#ec8733]">Shop</Link>
          <Link to="/contact" className="block text-sm font-medium uppercase text-gray-800 hover:text-[#ec8733]">Contact</Link>
        </div>
      )}

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Navbar;
