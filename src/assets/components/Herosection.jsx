import "@fontsource/montserrat";
import img1 from "../images/hero3.jpg";
import img2 from "../images/hero2.png";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="w-full font-[Montserrat] mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 min-h-[75vh] md:min-h-[90vh]">
        {/* Left Image */}
        <div className="h-full w-full">
          <img
            src={img1}
            alt="Sheady model left"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Center Text Block with Gradient Overlay */}
        <div className="relative flex items-center justify-center text-white px-6 py-30 bg-[#ec8733]">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#ec8733]/80 to-[#ec8733] opacity-90 z-0" />

          {/* Text Content */}
          <div className="text-center max-w-md mx-auto relative z-10">
            <p className="text-xs md:text-sm uppercase tracking-wide mb-3">
              Be Confident in Your Skin
            </p>
            <h1 className="text-2xl md:text-4xl font-bold leading-snug mb-3">
              Deeply Nourishing Shea Butter Skincare
            </h1>
            <p className="text-sm md:text-base mb-8">
              We offer a curated selection designed to restore your skin's glow and elevate your self-care ritual.
            </p>

            {/* Shop Now Button */}
            <Link
              to="/product"
              className="group relative inline-flex items-center px-6 py-2 text-[#1b5059] font-semibold bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition-all animate-pulse"
            >
              <span className="absolute inset-0 bg-[#1b5059] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              <span className="relative group-hover:text-white z-10">Shop Now</span>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="h-full w-full">
          <img
            src={img2}
            alt="Sheady model right"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
