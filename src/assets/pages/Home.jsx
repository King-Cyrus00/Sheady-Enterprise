import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Herosection";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Testimony from "../components/Testimony";
import HomeProducts from "../components/Homeproduct";
import { FaArrowUp } from "react-icons/fa";

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
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#ec8733] border-opacity-50"></div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white font-[Montserrat] relative overflow-x-hidden">
      {/* Navbar */}
      <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex flex-col w-full space-y-16 sm:space-y-20">
        <section className="w-full">
          <Hero />
        </section>

        <section className="w-full relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <Category />
        </section>

        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <HomeProducts />
        </section>

        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <Testimony />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#fdf6f0] mt-12">
        <Footer />
      </footer>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-[#ec8733] text-white p-3 rounded-full shadow-lg hover:bg-[#d86620] transition z-50"
          aria-label="Back to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Home;
