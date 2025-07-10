// About.jsx
import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import team1 from "../images/shashadu.jpg";
import team2 from "../images/moha.jpg";
import team4 from "../images/sheri.jpg";
import about1 from "../images/soap.jpg";
import about2 from "../images/soap.jpg";
import "@fontsource/montserrat";
import Testimonial from "../components/Testimony";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Vid from "../images/vid.mp4";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="w-full bg-[#fdf6f0] text-[#1b5059] font-[Montserrat]">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Be Confident In Your Skin
          </motion.h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            At Sheady, we believe in restoring beauty naturally. Our organic products heal, protect, and nourish skin and hair without a single drop of chemicals.
          </p>
          <div className="flex justify-center mt-8 gap-4">
            <Link
              to="/product"
              className="bg-[#ec8733] text-white px-6 py-2 rounded-full hover:bg-[#d86620] transition"
            >
              Explore Products
            </Link>
            <Link
              to="/contact"
              className="border border-[#ec8733] text-[#ec8733] px-6 py-2 rounded-full hover:bg-[#ec8733] hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Product Highlights */}
        <div className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mb-6"
            >
              Crafted With Nature's Best
            </motion.h3>
            <p className="text-gray-600 mb-10 text-sm max-w-2xl mx-auto">
              Every Sheady product is made from raw shea butter, neem leaves, sunflower oil, honey, carrot oil, and coconut oil—blended gently over low heat to retain potency.
            </p>
            <video
              controls
              className="w-full max-h-[420px] rounded-xl shadow-md border border-[#ec8733] hover:shadow-xl transition duration-500 object-cover"
            >
              <source src={Vid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

          </div>
        </div>

        {/* Problems & Solutions */}
        <div className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
              <img src={about1} alt="Natural Care" className="rounded-xl shadow-md w-full object-cover" />
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Sheady Exists</h3>
              <p className="mb-3 text-sm text-gray-700">
                Many Ghanaians struggle with stretch marks, aging skin, dark spots, and harsh chemical reactions. Sheady provides pure, organic solutions made from shea butter, neem, carrot oil, honey, and sunflower oil—crafted to heal and rejuvenate.
              </p>
              <p className="text-sm text-gray-700">
                Our products help reduce stretch marks, promote hair growth, clear skin tone, and support anti-aging—all while being 100% chemical free.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-[#1b5059] text-white py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Making a Difference</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <strong>🌍 Community Empowerment:</strong> Women in northern Ghana find income opportunities through shea processing.
                </li>
                <li>
                  <strong>💼 Job Creation:</strong> Our growth helps support over 200 distributors and workers.
                </li>
                <li>
                  <strong>🌱 Economic Diversification:</strong> We contribute to reducing dependency on imported cosmetics.
                </li>
              </ul>
            </div>
            <motion.img
              src={about2}
              alt="Community Impact"
              className="rounded-xl shadow-lg w-full h-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>

        <Testimonial />

        {/* Team Section */}
        <div className="bg-[#fdf6f0] py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-10 text-[#1b5059]">Meet Our Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {[
                { name: "Shahadu Abdul Ganiu", role: "Marketing Lead", img: team1 },
                { name: "Abdullah Mohammed", role: "Media & Graphics", img: team2 },
                { name: "Fuseini Sherifa", role: "Production Lead", img: team4 },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-36 h-36 object-cover rounded-full border-4 border-[#1b5059] shadow-md hover:scale-105 transition-transform duration-300"
                  />
                  <p className="mt-3 font-semibold text-[#1b5059] text-sm">{member.name}</p>
                  <p className="text-xs text-gray-500">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </section>
      <Footer />
    </>
  );
};

export default About;
