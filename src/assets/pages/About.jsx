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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#1b5059] to-[#0d2e34] text-white py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Beauty Rooted in Nature
              </h1>
              <p className="text-xl max-w-3xl mx-auto text-gray-200">
                At Sheady, we're revolutionizing skincare with pure, organic ingredients that heal and nourish.
              </p>
              <div className="flex justify-center mt-10 gap-4">
                <Link
                  to="/product"
                  className="bg-[#ec8733] hover:bg-[#d86620] text-white px-8 py-3 rounded-md font-medium transition-colors duration-200"
                >
                  Shop Products
                </Link>
                <Link
                  to="/contact"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-[#1b5059] transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-[#ec8733]/10 rounded-xl"></div>
                <video
                  controls
                  className="relative rounded-lg shadow-xl w-full h-auto"
                  poster={about1}
                >
                  <source src={Vid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-[#1b5059]">Our Philosophy</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  In a market saturated with synthetic solutions, Sheady stands apart by returning to nature's original remedies. 
                  Each product is crafted from ethically-sourced shea butter and organic botanicals, preserving their healing 
                  properties through traditional methods.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We believe true beauty comes from harmony with nature, not from fighting against it with harsh chemicals.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-[#f8f8f8] rounded-lg">
                    <h4 className="font-semibold text-[#1b5059]">100% Organic</h4>
                    <p className="text-sm text-gray-600">No synthetic additives</p>
                  </div>
                  <div className="p-4 bg-[#f8f8f8] rounded-lg">
                    <h4 className="font-semibold text-[#1b5059]">Locally Sourced</h4>
                    <p className="text-sm text-gray-600">Supporting Ghanaian producers</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-6 bg-[#f9f9f9]">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 text-[#1b5059]">Why We Exist</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Sheady was born from a need for authentic, effective skincare that honors both people and planet.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#ec8733] rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1b5059]">Solving Real Problems</h3>
                    <p className="text-gray-700">
                      We address common concerns like stretch marks, hair loss, and skin irritation with natural solutions that actually work.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#ec8733] rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1b5059]">Empowering Communities</h3>
                    <p className="text-gray-700">
                      Our business model creates sustainable income for women in northern Ghana through ethical shea butter production.
                    </p>
                  </div>
                </div>
              </div>
              
              <motion.img
                src={about1}
                alt="Natural Ingredients"
                className="rounded-xl shadow-md w-full h-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 px-6 bg-[#1b5059] text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Social Impact</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🌱</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Sustainable Sourcing</h3>
                      <p className="text-gray-300">
                        Partnering with local shea nut collectors to promote sustainable harvesting practices.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">💼</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Economic Empowerment</h3>
                      <p className="text-gray-300">
                        Creating jobs for over 200 distributors and supporting women-led cooperatives.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🌍</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Local Production</h3>
                      <p className="text-gray-300">
                        Reducing reliance on imported cosmetics by making premium products in Ghana.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.img
                src={about2}
                alt="Community Impact"
                className="rounded-xl shadow-lg w-full h-auto"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 text-[#1b5059]">Meet The Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The passionate individuals behind Sheady's mission to bring natural beauty to everyone.
              </p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Shahadu Abdul Ganiu", role: "Marketing Lead", img: team1 },
                { name: "Abdullah Mohammed", role: "Media & Graphics", img: team2 },
                { name: "Fuseini Sherifa", role: "Production Lead", img: team4 },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-bold text-lg text-[#1b5059]">{member.name}</h3>
                    <p className="text-gray-600 mt-1">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Testimonial />
      </main>

      <Footer />
    </div>
  );
};

export default About;