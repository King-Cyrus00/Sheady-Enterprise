// ErrorPage.jsx
import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import "@fontsource/montserrat";
import sheadyLogo from "../images/sheady-logo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Navbar />
      <section className="w-full h-screen bg-[#fdf6f0] flex flex-col justify-center items-center text-center px-6 font-[Montserrat]">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <img
            src={sheadyLogo}
            alt="Sheady Logo"
            className="w-24 mx-auto mb-6"
          />

          <h1 className="text-6xl font-bold text-[#1b5059] mb-2">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! The page you're looking for doesn't exist.</p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6"
          >
            <button
              onClick={handleBack}
              className="bg-[#ec8733] hover:bg-[#d86620] text-white px-6 py-2 rounded-full transition shadow-md"
            >
              Go Back
            </button>
            <a
              href="/"
              className="text-[#1b5059] hover:text-[#ec8733] text-sm underline font-medium"
            >
              Or go to homepage
            </a>
          </motion.div>
        </motion.div>

        {/* Decorative Background Shape */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute bottom-0 right-0 w-48 h-48 bg-[#ec8733]/10 rounded-full blur-3xl"
        />
      </section>
      <Footer />
    </>
  );
};

export default ErrorPage;
