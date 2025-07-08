import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import Hair from "../images/hair.jpg";
import Skin from "../images/skin.jpg";


const products = [
  {
    id: 1,
    name: "Shea Butter Body Cream",
    description: "Deeply moisturizing cream made from 100% natural shea butter.",
    price: 49.99,
    image: Skin,
    category: "Skin Care",
  },
  {
    id: 2,
    name: "Shea Butter Hair Oil",
    description: "Nourishing hair oil that promotes growth and shine.",
    price: 39.99,
    image: Hair,
    category: "Hair Care",
  },
  {
    id: 3,
    name: "Shea Butter Shower Gel",
    description: "Gentle, skin-softening shower gel enriched with shea butter.",
    price: 29.99,
    image: Skin,
    category: "Skin Care",
  },
  {
    id: 4,
    name: "Shea Butter Face Cream",
    description: "Lightweight face cream for everyday hydration and glow.",
    price: 34.99,
    image: Skin,
    category: "Skin Care",
  },
  {
    id: 5,
    name: "Raw Shea Butter Jar",
    description: "Pure, unrefined shea butter for full-body use.",
    price: 24.99,
    image: p1,
    category: "Soap",
  },
  {
    id: 6,
    name: "Shea Butter Lip Balm",
    description: "Soothing lip balm made with organic shea and natural oils.",
    price: 9.99,
    image: p2,
    category: "Skin Care",
  },
  {
    id: 7,
    name: "Shea Butter Hand Lotion",
    description: "Pocket-sized hydration for dry hands, anytime, anywhere.",
    price: 14.99,
    image: p1,
    category: "Soap",
  },
  {
    id: 8,
    name: "Shea Butter Baby Cream",
    description: "Gentle cream for babies' sensitive skin, fragrance-free.",
    price: 27.99,
    image: p2,
    category: "Soap",
  },
  {
    id: 9,
    name: "Shea Butter Beard Balm",
    description: "Tame and condition your beard with our shea-rich formula.",
    price: 19.99,
    image: Hair,
    category: "Hair Care",
  },
  {
    id: 10,
    name: "Shea Butter Soap Bar",
    description: "Cold-processed soap bar for smooth, clean, and soft skin.",
    price: 12.99,
    image: p2,
    category: "Soap",
  },
];

export default products;
