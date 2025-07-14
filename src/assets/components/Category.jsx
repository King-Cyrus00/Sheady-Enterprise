import { useEffect } from "react";
import { Link } from "react-router";
import hair from "../images/hair.jpg";
import skin from "../images/skin.jpg";
import soap from "../images/soap.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
  {
    title: "Skin Care",
    image: skin,
    link: "/product?category=Skin Care",
    description: "Hydrate & protect your skin naturally.",
  },
  {
    title: "Hair Care",
    image: hair,
    link: "/product?category=Hair Care",
    description: "Nourish and define healthy hair.",
  },
  {
    title: "Soap",
    image: soap,
    link: "/product?category=Soap",
    description: "Gentle cleansing with pure botanicals.",
  },
];

const CategorySection = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="py-16 px-4 md:px-12 font-[Montserrat]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        {categories.map((category, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="group transition transform hover:scale-105"
          >
            {/* Image with hover-rounded animation */}
            <div className="overflow-hidden mx-auto mb-6 w-[300px] h-[360px] rounded-[160px_160px_0_0] group-hover:rounded-[9999px] transition-all duration-500 ease-in-out">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-[16px] font-semibold">{category.title}</h3>

            {/* Description */}
            <p className="text-xs text-gray-500 mt-1 mb-1">{category.description}</p>

            {/* Link */}
            <Link
              to={category.link}
              className="text-sm text-[#1b5059] uppercase inline-block tracking-wide"
            >
              Shop Now ↗
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
