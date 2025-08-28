import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Manually import all testimonial images (screenshots of actual testimonies)
import T1 from "../images/T1.jpg";
import T2 from "../images/T2.jpg";
import T3 from "../images/T3.jpg";
import T4 from "../images/T4.jpg";
import T5 from "../images/T5.jpg";
import T6 from "../images/T6.jpg";
import T7 from "../images/T7.jpg";
import T8 from "../images/T8.jpg";
import T9 from "../images/T9.jpg";
import T10 from "../images/T10.jpeg";
import T11 from "../images/T11.jpg";
import T12 from "../images/T12.jpg";
import T13 from "../images/T13.jpg";
import T14 from "../images/T14.jpg";
import T15 from "../images/T15.jpg";
import T16 from "../images/T16.jpg";
import T17 from "../images/T17.jpg";
import T18 from "../images/T18.jpg";
import T19 from "../images/T19.jpg";
import T20 from "../images/T20.jpg";
import T21 from "../images/T21.jpg";
import T22 from "../images/T22.jpg";

const testimonialImages = [
  T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11,
  T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm text-[#ec8733] tracking-widest uppercase font-medium mb-3">
            Client Voices
          </p>
          <h2 className="text-4xl font-bold text-[#1b5059]">
            What Our Customers Say
          </h2>
          
        </div>

        {/* Testimonial slider */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <Slider {...settings}>
            {testimonialImages.map((img, index) => (
              <div key={index} className="px-3">
                <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <img 
                    src={img} 
                    alt={`testimonial-${index + 1}`} 
                    className="w-full h-96 object-contain bg-gray-100 p-4"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
