import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";
import darkLogo from "../../public/assets/icons/logo-dark.svg";
import lightLogo from "../../public/assets/icons/light-logo.svg";

const Footer = () => {
  return (
    <footer className="textwhite_textdark py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <Image
            src={lightLogo}
            alt="Inventurix Tecnologies"
            width={200}
            height={100}
            className="dark:hidden"
          />
          <Image
            src={darkLogo}
            alt="Inventurix Tecnologies"
            width={200}
            height={100}
            className="hidden dark:block"
          />
          <h4 className="text-lg w-80 mt-4 text-center md:text-left">
            Making the world a better place through constructing
          </h4>
          <div className="flex mt-4 space-x-4">
            <SocialIcon url="https://www.vimeo.com" className="!w-6 !h-6" />
            <SocialIcon url="https://www.meetup.com" className="!w-6 !h-6" />
            <SocialIcon url="https://www.pinterest.com" className="!w-6 !h-6" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-20">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.id}>
              <h4 className="text-xl font-semibold mb-4">{footerLink.title}</h4>
              <ul className="space-y-2">
                {footerLink.links.map((link) => (
                  <li key={link.id} className="hover:underline">
                    {link.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const footerLinks = [
  {
    id: 1,
    title: "IT Servers",

    links: [
      {
        id: 1,
        title: "Managed IT",
      },
      {
        id: 2,
        title: "IT Support",
      },
      {
        id: 3,
        title: "Products",
      },
      {
        id: 4,
        title: "Contact Us",
      },
    ],
  },
  {
    id: 2,
    title: "Resources",

    links: [
      {
        id: 1,
        title: "Blog",
      },
    ],
  },
  {
    id: 3,
    title: "Support",

    links: [
      {
        id: 1,
        title: "Forum Support",
      },
      {
        id: 2,
        title: "Help & FAQ",
      },
      {
        id: 3,
        title: "Contact Us",
      },
      {
        id: 4,
        title: "Privacy Policy",
      },
    ],
  },
];
