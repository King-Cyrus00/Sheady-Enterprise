import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import Hair from "../images/hair.jpg";
import Skin from "../images/skin.jpg";
import gel from "../images/gel.png";
import tumeric from '../images/tumeric.jpeg';
import oil from '../images/oil.jpeg';
import grow from '../images/conditioner.jpeg'


const products = [
  {
    id: 1,
    name: "Glow Secret",
    description: "The secret to perfect skin: cleanse, moisturize, and glow naturally.",
    price: 35.00,
    image: Skin,
    category: "Skin Care",
    size: "",
  },
  {
    id: 2,
    name: "Hair Oil",
    description: "Nourishing hair oil that promotes growth and shine.",
    price: 35.00,
    image: Hair,
    category: "Hair Care",
    size: "35ml",
  },

  {
    id: 3,
    name: "Mist Shea Butter Conditioner",
    description: "Moisturizing conditioner that soothes and strengthens hair.",
    price: 35.00,
    image: p1,
    category: "Hair Care",
    size: "400ml",
  },

  {
    id: 4,
    name: "Carrot Shower Gel",
    description: "Fresh carrot shower gel to nourish your skin.",
    price: 40.00,
    image: gel,
    category: "Skin Care",
    size: "400ml",
  },
  {
    id: 5,
    name: "Shea butter shampoo",
    description: "Shea butter and chebe oil shampoo gently repairs, hydrates, and strengthens hair without weighing it down.",
    price: 45.00,
    image: p2,
    category: "Hair Care",
    size: "400ml",
  },
  {
    id: 6,
    name: "Tumeric Shea Butter",
    description: "Revitalize your skin with our Tumeric Shea Butter, enriched with natural antioxidants for a radiant glow.",
    price: 35.00,
    image: tumeric,
    category: "Skin Care",
    size: "",
  },
  {
    id: 7,
    name: "Mist Shea Butter Conditioner",
    description: "Hydrating conditioner with shea butter and mist for soft, manageable hair.",
    price: 35.00,
    image: p1,
    category: "Hair Care",
    size: "400ml",
  },
  {
    id: 8,
    name: "Hair Growth Oil",
    description: "Natural hair growth oil with essential nutrients for healthy, strong hair.",
    price: 35.00,
    image: oil,
    category: "Hair Care",
    size: "50ml",
  },
  {
    id: 9,
    name: "Grow Secret",
    description: "Nourishing conditioner that promotes hair growth and shine.",
    price: 35.00,
    image: grow,
    category: "Skin Care",
    size: "400ml",
  },
  // {
  //   id: 10,
  //   name: "Glow Secret",
  //   description: "The secret to perfect skin: cleanse, moisturize, and glow naturally.",
  //   price: 35.00,
  //   image: Skin,
  //   category: "Skin Care",
  //   size: "",
  // },
];

export default products;
