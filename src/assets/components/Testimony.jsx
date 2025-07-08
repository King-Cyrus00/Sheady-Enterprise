import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import T1 from "../images/T1.jpg";
import T2 from "../images/T2.jpg";
import T3 from "../images/T3.jpg";  
import T4 from "../images/T4.jpg";
import T5 from "../images/T5.jpg";
import T6 from "../images/T6.jpg";
import T7 from "../images/T7.jpg";
import T8 from "../images/T8.jpg";
import T9 from "../images/T9.jpg";
import T10 from "../images/T10.jpg";

const testimonials = [
  {
    name: "Courtney Henry",
    location: "Miami, USA",
    title: "Architecture Insights",
    message:
      "I've struggled with dry skin for years, but serum has been a game-changer! It absorbs quickly and leaves my skin feeling so soft and hydrated. Definitely a must-have in my skincare routine!",
    image: T1,
  },
  {
    name: "Jenny Williamson",
    location: "Georgia, USA",
    title: "Liquid Eyeliner",
    message:
      "I'm terrible at applying eyeliner, but this product makes it so easy! The tip is super fine, allowing for precise & the formula is long-lasting. I love how it makes my eyes pop!",
    image: T2,
  },
  {
    name: "Lydia Maxwell",
    location: "Accra, Ghana",
    title: "Shea Body Lotion",
    message: "I've been using Sheady for 2 months and my skin feels brand new. The glow is real!",
    image: T3,
  },
  {
    name: "Sarah Thompson",
    location: "London, UK",
    title: "Whipped Butter",
    message: "This butter smells heavenly and melts into my skin. Absolutely love it!",
    image: T4,
  },
  {
    name: "Ama Owusu",
    location: "Kumasi, Ghana",
    title: "Hair Moisturizer",
    message: "Perfect for my coils! Hydrated and bouncy curls all day.",
    image: T5,
  },
  {
    name: "James Kofi",
    location: "Takoradi, Ghana",
    title: "Beard Balm",
    message: "My beard feels softer and looks much fuller. Great product!",
    image: T6,
  },
  {
    name: "Vanessa Brookes",
    location: "Lagos, Nigeria",
    title: "Cleansing Soap",
    message: "I've ditched my old soaps. This one is gentle and brightens my skin.",
    image: T7,
  },
  {
    name: "Nana Adwoa",
    location: "Cape Coast, Ghana",
    title: "Baby Cream",
    message: "Safe for my baby and smells amazing. No rashes, no dryness.",
    image: T8,
  },
  {
    name: "Chidera Obi",
    location: "Abuja, Nigeria",
    title: "Lip Balm",
    message: "No more cracked lips. Soft, smooth, and kissable!",
    image: T9,
  },
  {
    name: "Maya Scott",
    location: "New York, USA",
    title: "Glow Oil",
    message: "People keep asking what I use! Sheady's oil is the glow secret!",
    image: T10,
  },
];

const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-500 tracking-widest uppercase font-medium mb-2">
          Testimonials
        </p>
        <h2 className="text-3xl font-bold text-[#1b5059] mb-10">Clients Review</h2>

        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index}>
              <div className="flex flex-row gap-4 h-80">
                <div className="flex-[1] bg-white rounded-xl overflow-hidden shadow h-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-[1] bg-[#fff5ed] text-[#1b5059] rounded-xl shadow p-6 flex flex-col justify-between h-full">
                  <div>
                    <p className="text-sm font-semibold mb-2">{item.title}</p>
                    <p className="text-sm leading-relaxed">“{item.message}”</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
