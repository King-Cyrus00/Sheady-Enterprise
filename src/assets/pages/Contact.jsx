import React, { useState } from "react";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTiktok, 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaPaperPlane
} from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  const contactCards = [
    {
      icon: <FaPhoneAlt className="text-[#ec8733] text-xl" />,
      title: "Call Us",
      details: ["+233 54 043 5713"],
      action: () => window.open("tel:+233540435713"),
      color: "bg-blue-50"
    },
    {
      icon: <FaEnvelope className="text-[#ec8733] text-xl" />,
      title: "Email Us",
      details: ["sheadyenterprise@gmail.com"],
      action: () => window.open("mailto:sheadyenterprise@gmail.com"),
      color: "bg-orange-50"
    },
    {
      icon: <FaMapMarkerAlt className="text-[#ec8733] text-xl" />,
      title: "Visit Us",
      details: ["Sarbonjida, around IK Photos, Tamale"],
      action: () => window.open("https://maps.google.com"),
      color: "bg-green-50"
    },
    {
      icon: <FaClock className="text-[#ec8733] text-xl" />,
      title: "Hours",
      details: ["Mon-Fri: 9AM - 6PM", "Sat: 10AM - 4PM"],
      action: null,
      color: "bg-purple-50"
    }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://facebook.com/profile.php?id=100064733420450" },
    { icon: <FaInstagram />, url: "https://instagram.com/sheadycosmeticsgh1" },
    { icon: <FaTiktok />, url: "https://tiktok.com/@sheadymade.com" },
    { icon: <FaWhatsapp />, url: "https://wa.me/+233540435713" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1b5059] to-[#0d2e34] py-20 text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Contact Sheady
            </motion.h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              We're here to help with your skincare questions and product inquiries.
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {contactCards.map((card, index) => (
                <div 
                  key={index}
                  onClick={card.action || undefined}
                  className={`${card.color} p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer border border-gray-100`}
                >
                  <div className="flex justify-center mb-4">{card.icon}</div>
                  <h3 className="text-lg font-semibold text-[#1b5059] text-center mb-2">
                    {card.title}
                  </h3>
                  <div className="text-center text-gray-600 text-sm">
                    {card.details.map((detail, i) => (
                      <p key={i}>{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-[#1b5059] mb-6">Send us a message</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-md mb-6">
                  Thank you! We've received your message and will respond soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ec8733] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ec8733] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Your Message"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ec8733] focus:border-transparent"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#ec8733] hover:bg-[#d86620] text-white font-medium px-6 py-3 rounded-lg transition flex items-center gap-2"
                  >
                    <FaPaperPlane /> Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Quick Actions Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-[#1b5059] mb-4">Quick Connect</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => window.open("https://wa.me/+233540435713", "_blank")}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-green-50 text-green-800 rounded-lg hover:bg-green-100 transition"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span>Chat on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => window.open("tel:+233540435713", "_self")}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-800 rounded-lg hover:bg-blue-100 transition"
                  >
                    <FaPhoneAlt className="text-xl" />
                    <span>Call Us Now</span>
                  </button>
                  <button
                    onClick={() => window.open("mailto:sheadyenterprise@gmail.com", "_self")}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-orange-50 text-orange-800 rounded-lg hover:bg-orange-100 transition"
                  >
                    <FaEnvelope className="text-xl" />
                    <span>Send Email</span>
                  </button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-[#1b5059] mb-4">Follow Us</h3>
                <div className="flex justify-center gap-6 text-gray-600 text-xl">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#ec8733] transition p-2 rounded-full hover:bg-gray-100"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;