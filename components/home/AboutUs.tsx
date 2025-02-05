import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const AboutUs = () => {
  const imageaddress =
    "https://plus.unsplash.com/premium_photo-1683120730432-b5ea74bd9047?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="flex items-center gap-10 justify-center">
      <Image
        src={imageaddress}
        alt="About Us"
        width={1740}
        height={800}
        className="w-[600px] rounded-xl h-[350px] object-cover"
      />
      <div className="flex flex-col items-start max-w-[500px] gap-y-5 justify-center  py-20">
        <h2 className="text-2xl text-blue-500">ABOUT US</h2>
        <h1 className="text-4xl textwhite_textdark font-bold">
          One of the Fastest Way to Business Growth
        </h1>
        <p className="text-lg text-gray-500 py-4 max-w-[900px]">
          InventuriX is an innovative IT solutions provider specializing in
          cloud migration, digital transformation, DevOps, full-stack
          development, UX/UI design, and cybersecurity. We empower businesses
          with tailored solutions that drive growth and efficiency in the
          digital age.
        </p>

        <Button className="bg-blue-500 px-4 py-2 text-blue-50 font-bold">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default AboutUs;
