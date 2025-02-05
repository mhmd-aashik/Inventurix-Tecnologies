import React from "react";
import ResourcesCard from "../cards/ResourcesCard";

const Resources = () => {
  return (
    <div className="flex h-full bgwhite_bgdark flex-col items-center gap-y-5 justify-center text-center py-20">
      <div>
        <h2 className="text-2xl text-blue-500">RESOURCES</h2>
        <h1 className="text-4xl textwhite_textdark font-bold">
          Get Updated. Get Secured.{" "}
        </h1>
        <p className="text-lg text-gray-500 py-4 max-w-[600px]">
          Discover featured resources on the latest topics—created and curated
          specifically for the cybersecurity and data industries.
        </p>
      </div>
      <div className="flex flex-wrap gap-5 bgwhite_bgdark justify-center items-center">
        {fakeCard.map((card) => (
          <ResourcesCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Resources;

const fakeCard = [
  {
    id: 1,
    title: "The  Security Leader’s Guide to Managing Shadow IT Risks",
    description:
      "In today’s cybersecurity environment, guaranteeing data privacy is an integral part of enterprise risk management. Corporate executives and stakeholders...",
    image:
      "https://images.unsplash.com/photo-1734966901441-ac6c1fff1fd2?q=80&w=2017&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "The  Security Leader’s Guide to Managing Shadow IT Risks",
    description:
      "In today’s cybersecurity environment, guaranteeing data privacy is an integral part of enterprise risk management. Corporate executives and stakeholders...",
    image:
      "https://images.unsplash.com/photo-1738070593303-fbb151013701?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "The  Security Leader’s Guide to Managing Shadow IT Risks",
    description:
      "In today’s cybersecurity environment, guaranteeing data privacy is an integral part of enterprise risk management. Corporate executives and stakeholders...",
    image:
      "https://images.unsplash.com/photo-1738070593303-fbb151013701?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
