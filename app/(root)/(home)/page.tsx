import AboutUs from "@/components/home/AboutUs";
import Accordion from "@/components/home/Accordion";
import ClientMap from "@/components/home/ClientMap";
import LogoMarquee from "@/components/home/LogoMarquee";
import Proucts from "@/components/home/Proucts";
import Resources from "@/components/home/Resources";
import Footer from "@/components/shared/Footer";
import FooterBanner from "@/components/shared/FooterBanner";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Proucts />
      <AboutUs />
      <LogoMarquee />
      <ClientMap />
      <Resources />
      <Accordion />
      <Footer />
      <FooterBanner />
    </div>
  );
};

export default HomePage;
