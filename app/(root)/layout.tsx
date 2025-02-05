import EmblaCarousel from "@/components/home/EmblaCarousel";
import Header from "@/components/shared/Header";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bgwhite_bgdark textwhite_textdark">
      <Header />
      <EmblaCarousel />
      <div className="max-w-7xl mx-auto px-5">{children}</div>
    </div>
  );
};

export default RootLayout;
