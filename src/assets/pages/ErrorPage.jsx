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
      <section className="w-full min-h-screen bg-white flex flex-col justify-center items-center text-center px-6 font-[Montserrat]">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="mb-8">
              <img
                src={sheadyLogo}
                alt="Sheady Logo"
                className="w-20 h-20 mx-auto mb-6"
              />
              
              <div className="relative">
                <h1 className="text-8xl font-bold text-[#1b5059] mb-2">404</h1>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#ec8733]"></div>
              </div>
              
              <h2 className="text-2xl font-medium text-gray-800 mt-6 mb-4">
                Page Not Found
              </h2>
              <p className="text-gray-600 max-w-md mx-auto">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <button
                onClick={handleBack}
                className="bg-[#1b5059] hover:bg-[#143a42] text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 shadow-sm"
              >
                Go Back
              </button>
              <a
                href="/"
                className="bg-white text-[#1b5059] border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-md font-medium transition-colors duration-200 shadow-sm"
              >
                Go to Homepage
              </a>
            </motion.div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ delay: 0.8 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#1b5059] text-[20rem] font-bold pointer-events-none select-none"
          >
            404
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ErrorPage;