import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Services from "./components/Services";
import Process from "./components/Process";
import Widget from "./components/Widget";
import HeroHalf from "@/components/HeroHalf";

function page() {
  return (
    <div>
      <Header />
      <HeroHalf>Services</HeroHalf>
      <Services />
      <Process />
      <Footer />
    </div>
  );
}

export default page;
