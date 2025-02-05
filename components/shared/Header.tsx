"use client";
import Image from "next/image";
import React from "react";
import darkLogo from "../../public/assets/icons/logo-dark.svg";
import lightLogo from "../../public/assets/icons/light-logo.svg";
import Navigationlinks from "./Navigationlinks";
import ThemeSwitcher from "./ThemeSwitcher";
import ScheduleBtn from "./btns/ScheduleBtn";

const Header = () => {
  return (
    <header className="bgwhite_bgdark">
      <nav className="flex justify-between items-center px-10 py-4">
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
        <div className="flex space-x-4 items-center">
          <Navigationlinks />
          <ThemeSwitcher />
          <ScheduleBtn />
        </div>
      </nav>
    </header>
  );
};

export default Header;
