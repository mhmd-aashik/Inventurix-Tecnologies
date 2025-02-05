import React from "react";
import ProductsCard from "../cards/ProductsCard";
import digital from "../../public/assets/icons/digital.png";
import cloud from "../../public/assets/icons/cloud.png";
import consult from "../../public/assets/icons/consult.png";
import lock from "../../public/assets/icons/lock.png";

const Proucts = () => {
  return (
    <div className="flex flex-col items-center gap-y-5 justify-center text-center py-20">
      <h2 className="text-2xl text-blue-500">PRODUCTS</h2>
      <h1 className="text-4xl textwhite_textdark font-bold">
        Explore Our Solutions
      </h1>
      <p className="text-lg text-gray-500 py-4 max-w-[900px]">
        At Inventurix, we offer a wide range of IT solutions designed to help
        your business thrive in the digital age. From migrating datacentres to
        the cloud to developing full-stack applications, our expertise spans
        across key areas that drive innovation and operational excellence.
      </p>

      {
        <div className="flex gap-5 bgwhite_bgdark justify-center items-center">
          {productDetails.map((card) => (
            <ProductsCard key={card.id} {...card} />
          ))}
        </div>
      }
    </div>
  );
};

export default Proucts;

const productDetails = [
  {
    id: 1,
    title: "Cloud Services",
    description:
      "Migrate, manage, and scale effortlessly with our tailored cloud solutions.",
    image: cloud,
  },
  {
    id: 2,
    title: "Digital Transformation",
    description:
      "Modernize your infrastructure and unlock new business potential.",
    image: digital,
  },
  {
    id: 3,
    title: "IT Consulting",
    description:
      "Get expert advice to navigate complex technology landscapes and stay ahead.",
    image: consult,
  },
  {
    id: 4,
    title: "Cyber Security",
    description:
      "Protect your digital assets with advanced, proactive security measures.",
    image: lock,
  },
];
