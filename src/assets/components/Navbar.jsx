import { useState, useContext, useEffect } from "react";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import "@fontsource/montserrat";
import logo from "../images/sheady-logo.png";
import { Link, useNavigate, useLocation } from "react-router";
import { CartContext } from "../Content/Cart";
import CartModal from "../components/CartModal"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const [searchQuery, setSearchQuery] = useState("");
  const { cartCount } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/product?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="w-full bg-white shadow-sm font-[Montserrat] relative z-50 sticky top-0">
      {/* Top Bar */}
      <div className="bg-[#f9f4f0] text-sm text-gray-700 px-6 py-2 flex justify-between items-center">
        <div className="text-gray-600">Sophistication Meets Uncompromised Elegance</div>

        <div className="flex items-center space-x-5">
          <form onSubmit={handleSearch} className="hidden md:flex items-center border border-gray-300 px-3 py-1.5 rounded-full transition-all focus-within:border-[#ec8733] focus-within:ring-1 focus-within:ring-[#ec8733]">
            <FiSearch className="mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="Search products..."
              className="outline-none text-sm bg-transparent placeholder-gray-500 w-40"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          <Link
            to="/stores"
            className="text-sm hover:text-[#ec8733] hidden md:inline font-medium transition-colors"
          >
            Find a store
          </Link>

          <div
            className="relative cursor-pointer group"
            onClick={() => setIsCartOpen(true)}
            title="View Cart"
          >
            <FiShoppingCart size={20} className="hover:text-[#ec8733] transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#ec8733] text-white text-xs h-4 min-w-[16px] flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
            <span className="absolute hidden group-hover:block -right-2 top-full mt-2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              View Cart
            </span>
          </div>

          <button 
            className="md:hidden text-gray-700 hover:text-[#ec8733] transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <img
            src={logo}
            alt="Sheady Logo"
            className="h-10 w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
          />
        </Link>

        <nav className="hidden md:flex space-x-6 text-sm font-medium uppercase tracking-wide text-gray-800">
          <Link to="/" className="hover:text-[#ec8733] transition-colors py-1">Home</Link>
          <Link to="/product" className="hover:text-[#ec8733] transition-colors py-1">Shop</Link>
          <Link to="/about" className="hover:text-[#ec8733] transition-colors py-1">About</Link>
          <Link to="/blogs" className="hover:text-[#ec8733] transition-colors py-1">Blogs</Link>
          <Link to="/contact" className="hover:text-[#ec8733] transition-colors py-1">Contact</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md border-t border-gray-100">
          <form onSubmit={handleSearch} className="flex items-center border border-gray-300 px-3 py-2 rounded-full w-full">
            <FiSearch className="mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="Search products..."
              className="outline-none text-sm bg-transparent placeholder-gray-500 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          
          <Link to="/" className="block text-sm font-medium uppercase text-gray-800 hover:text-[#ec8733] transition-colors py-2">Home</Link>
          <Link to="/product" className="block text-sm font-medium uppercase text-gray-800 hover:text-[#ec8733] transition-colors py-2">Shop</Link>
          <Link to="/about" className="block text-sm font-medium uppercase text-gray-800 hover:text-[#ec8733] transition-colors py-2">About</Link>
          <Link to="/blogs" className="block text-sm font-medium uppercase text-gray-800 hover:text-[#ec8733] transition-colors py-2">Blogs</Link>
          <Link to="/contact" className="block text-sm font-medium uppercase text-gray-800 hover:text-[#ec8733] transition-colors py-2">Contact</Link>
          <Link to="/stores" className="block text-sm font-medium uppercase text-gray-800 hover:text-[#ec8733] transition-colors py-2">Find a store</Link>
        </div>
      )}

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Navbar;