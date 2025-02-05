import React from "react";
import AccordionCard from "../cards/AccordionCard";

const Accordion = () => {
  return (
    <div className="flex max-w-7xl mx-auto flex-col items-center gap-y-5 justify-center text-center py-20">
      <h2 className="text-2xl text-blue-500">FAQ</h2>
      <h1 className="text-4xl textwhite_textdark font-bold">
        Frequently Asked Questions{" "}
      </h1>
      <AccordionCard />
    </div>
  );
};

export default Accordion;
