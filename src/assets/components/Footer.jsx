import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import logo from "../images/f-logo.png";
import "@fontsource/montserrat";
import { AiTwotoneMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#1b5059] text-white font-[Montserrat] w-full">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand + Contact */}
          <div className="flex flex-col space-y-4">
            <img
              src={logo}
              alt="Sheady Logo"
              className="h-16 w-auto mb-2 object-contain"
            />
            <p className="text-sm text-white/80 leading-relaxed">
              Discover the healing power of nature with Sheady's pure skincare and haircare solutions.
            </p>
            <div className="flex flex-col space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-white/80" />
                <span>+233 54 043 5713</span>
              </div>
              <div className="flex items-center space-x-2">
                <AiTwotoneMail className="text-white/80" />
                <span>sheadyenterprise@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Pages */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Pages</h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/product", label: "Shop" },
                { to: "/blogs", label: "Blogs" },
                { to: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-white/80 hover:text-[#ec8733] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Categories</h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/product?category=Skin%20Care", label: "Skin Care" },
                { to: "/product?category=Hair%20Care", label: "Hair Care" },
                { to: "/product?category=Soap", label: "Soap" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-white/80 hover:text-[#ec8733] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + CTA */}
          <div className="space-y-5">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Connect With Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: <FaFacebookF />, href: "https://www.facebook.com/profile.php?id=100064733420450" },
                  { icon: <FaInstagram />, href: "https://www.instagram.com/sheadycosmeticsgh1" },
                  { icon: <FaTiktok />, href: "https://www.tiktok.com/@sheadymade.com" },
                  { icon: <FaWhatsapp />, href: "https://wa.me/233540435713" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#ec8733] transition-colors duration-200 text-xl"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-block bg-[#ec8733] hover:bg-[#e07a25] text-white font-medium text-sm px-6 py-3 rounded-md transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-sm text-white/60">
              &copy; {new Date().getFullYear()} Sheady Enterprise. All rights reserved.
            </div>
            <div className="flex space-x-4 text-sm">
              <Link to="/privacy" className="text-white/60 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/faq" className="text-white/60 hover:text-white transition-colors duration-200">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;