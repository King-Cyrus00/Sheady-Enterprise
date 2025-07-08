// ContactPage.jsx
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import contactImg from "../images/contact.jpg";
import "@fontsource/montserrat";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <>
      <Navbar />
      <section className="w-full px-4 py-20 bg-[#fefaf6] font-[Montserrat]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img
              src={contactImg}
              alt="Contact Sheady"
              className="w-full h-full rounded-2xl shadow-xl object-cover"
            />
          </div>

          {/* Right Form */}
          <div className="space-y-6">
            <div className="mb-6">
              <p className="text-sm tracking-widest uppercase text-[#ec8733] font-medium mb-1">
                Get in Touch
              </p>
              <h2 className="text-3xl font-bold text-[#1b5059] mb-2">Contact Us</h2>
              <p className="text-gray-700">
                Have questions or want to learn more about our natural skincare products? We'd love to hear from you.
              </p>
            </div>

            {submitted ? (
              <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-md">
                Thank you for contacting us! We'll get back to you shortly.
              </div>
            ) : (
              <form
                action="https://formspree.io/f/your-form-id" // Replace with actual Formspree ID
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-5 bg-white p-6 rounded-xl shadow-md border border-[#f2e8e2]"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full px-5 py-3 border border-[#ec8733]/40 rounded-md focus:ring-2 focus:ring-[#ec8733] focus:outline-none text-[#1b5059] placeholder:text-[#1b5059]/60 bg-[#fffaf7]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-5 py-3 border border-[#ec8733]/40 rounded-md focus:ring-2 focus:ring-[#ec8733] focus:outline-none text-[#1b5059] placeholder:text-[#1b5059]/60 bg-[#fffaf7]"
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  className="w-full px-5 py-3 border border-[#ec8733]/40 rounded-md focus:ring-2 focus:ring-[#ec8733] focus:outline-none text-[#1b5059] placeholder:text-[#1b5059]/60 bg-[#fffaf7]"
                ></textarea>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 accent-[#ec8733]"
                  />
                  <p className="text-sm text-[#1b5059]">
                    I agree to the terms and conditions.
                  </p>
                </div>

                <button
                  type="submit"
                  className="bg-[#ec8733] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#d86620] transition w-fit shadow-lg"
                >
                  Submit
                </button>
              </form>
            )}

            <div className="mt-8 space-y-2 text-sm text-[#1b5059]">
              <p><strong>Address:</strong> 123 Shea Street, Accra, Ghana</p>
              <p><strong>Email:</strong> info@sheady.com</p>
              <p><strong>Phone:</strong> +233 54 043 5713</p>
            </div>

            <div className="mt-6">
              <p className="text-sm text-[#1b5059] mb-2 font-medium">Follow us</p>
              <div className="flex gap-4 text-[#1b5059] text-lg">
                <a href="#" className="hover:text-[#ec8733] transition">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-[#ec8733] transition">
                  <FaInstagram />
                </a>
                <a href="#" className="hover:text-[#ec8733] transition">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-[#ec8733] transition">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
