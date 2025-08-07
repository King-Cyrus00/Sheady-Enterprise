import { Leaf, Heart, Shield } from "lucide-react";
import  Card  from "../components/Card";

const benefits = [
  {
    icon: <Leaf className="w-8 h-8 text-[#cc8733]" />,
    title: "100% Natural",
    description: "Pure shea butter sourced directly from African shea trees",
  },
  {
    icon: <Heart className="w-8 h-8 text-[#cc8733]" />,
    title: "Skin Loving",
    description: "Rich in vitamins A, E, and F for deep nourishment",
  },
  {
    icon: <Shield className="w-8 h-8 text-[#cc8733]" />,
    title: "Quality Assured",
    description: "Carefully processed to maintain natural healing properties",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-[0.2rem] bg-[#ffffff]">
      <div className="max-w-[100rem] mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-[#1b5059] mb-4">
            Why Choose Our Shea Butter?
          </h2>
          <p className="font-paragraph text-lg text-[#1b5059]/70 max-w-2xl mx-auto">
            Experience the difference of authentic, premium quality shea butter products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-8 text-center bg-[#ffffff] border border-[#1b5059]/10 shadow-sm hover:shadow-md transition-shadow rounded-2xl"
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold text-[#1b5059] mb-3">
                {benefit.title}
              </h3>
              <p className="font-paragraph text-[#1b5059]/70">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
