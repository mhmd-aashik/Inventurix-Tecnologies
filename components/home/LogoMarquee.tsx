import React from "react";
import Marquee from "react-fast-marquee";
import StackIcon from "tech-stack-icons";

const LogoMarquee = () => {
  const logos = [
    "docker",
    "aws",
    "azure",
    "ec2",
    "alacritty",
    "streamlit",
    "python",
    "algorand",
    "typescript",
    "tailwindcss",
    "nodejs",
  ];

  return (
    <Marquee className="w-full py-10">
      {logos.map((logo) => (
        <StackIcon grayscale key={logo} name={logo} className="h-20 mx-10  " />
      ))}
    </Marquee>
  );
};

export default LogoMarquee;
