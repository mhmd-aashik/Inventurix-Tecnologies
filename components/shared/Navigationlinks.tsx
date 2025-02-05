"use client";

import { navlinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navigationlinks = () => {
  const pathname = usePathname();
  console.log(pathname, "pathname");

  return (
    <ul className="flex space-x-4">
      {navlinks.map((navlink) => {
        const isActive = pathname === navlink.href;
        return (
          <li key={navlink.id}>
            <Link
              href={navlink.href}
              className={`text-lg ${
                isActive ? "text-blue-500 font-bold" : "textwhite_textdark"
              }`}
            >
              {navlink.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigationlinks;
