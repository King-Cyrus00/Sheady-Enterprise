// Footer.jsx
import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../images/f-logo.png";
import "@fontsource/montserrat";

const Footer = () => {
  return (
    <footer className="bg-[#1b5059] text-white font-[Montserrat] px-6 pt-16 pb-10 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand + Contact */}
        <div className="flex flex-col items-start">
          <img
            src={logo}
            alt="Sheady Logo"
            className="h-20 w-50 mb-3 rounded-md object-contain"
          />
          <p className="text-sm text-white/80 mb-4 max-w-sm">
            Discover the healing power of nature with Sheady’s pure skincare and haircare solutions.
          </p>
          <div className="text-sm space-y-1">
            <p>📞 +233 54 043 5713</p>
            <p>📧 info@sheadycosmetics.com</p>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Pages</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#ec8733] transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#ec8733] transition">About</Link></li>
            <li><Link to="/product" className="hover:text-[#ec8733] transition">Shop</Link></li>
            <li><Link to="/blogs" className="hover:text-[#ec8733] transition">Blogs</Link></li>
            <li><Link to="/contact" className="hover:text-[#ec8733] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Categories</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/product?category=Skin%20Care" className="hover:text-[#ec8733] transition">Skin Care</Link></li>
            <li><Link to="/product?category=Hair%20Care" className="hover:text-[#ec8733] transition">Hair Care</Link></li>
            <li><Link to="/product?category=Soap" className="hover:text-[#ec8733] transition">Soap</Link></li>
          </ul>
        </div>

        {/* Social + CTA */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <div className="flex gap-4 text-xl mb-4">
            <a href="#" className="hover:text-[#ec8733] transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#ec8733] transition"><FaInstagram /></a>
            <a href="#" className="hover:text-[#ec8733] transition"><FaTwitter /></a>
            <a href="#" className="hover:text-[#ec8733] transition"><FaWhatsapp /></a>
          </div>
          <Link
            to="/contact"
            className="inline-block bg-[#ec8733] text-white text-sm px-5 py-2 rounded-full hover:bg-white hover:text-[#1b5059] transition"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="mt-16 border-t border-white/20 pt-6 text-center text-sm text-white/60">
        &copy; {new Date().getFullYear()} Sheady Enterprise. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
