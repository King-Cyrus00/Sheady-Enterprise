import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Herosection";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Testimony from "../components/Testimony";
import HomeProducts from "../components/Homeproduct";
import { FaArrowUp } from "react-icons/fa";
import BenefitsSection from "../components/Benefits";

const Home = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Reduced loading time
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="flex flex-col items-center">
          <div className="animate-pulse rounded-full h-20 w-20 bg-[#1b5059] mb-4"></div>
          <div className="h-2 w-40 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white font-[Montserrat] relative">
      {/* Navbar - Sticky with subtle shadow */}
      <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-full mx-auto">
          <Navbar />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col w-full">
        {/* Hero Section - Full width */}
        <section className="w-full">
          <Hero />
        </section>

        {/* Content Container - Constrained width */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Benefits Section */}
          <section className="py-12">
            <BenefitsSection />
          </section>

          {/* Category Section */}
          <section className="py-12 border-t border-gray-100">
            <Category />
          </section>

          {/* Products Section */}
          <section className="py-12 border-t border-gray-100">
            <HomeProducts />
          </section>

          {/* Testimonials Section */}
          <section className="py-12 border-t border-gray-100">
            <Testimony />
          </section>
        </div>
      </main>

      {/* Footer - Clean with subtle background */}
      <footer className="bg-[#f8f8f8] border-t border-gray-100">
        <div className="max-w-full mx-auto">
          <Footer />
        </div>
      </footer>

      {/* Back to Top Button - More subtle design */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-white text-[#1b5059] p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 z-50 border border-gray-200"
          aria-label="Back to Top"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Home;