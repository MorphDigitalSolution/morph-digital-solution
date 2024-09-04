import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Services from "./components/Services";
import Process from "./components/Process";
import Widget from "./components/Widget";
import HeroHalf from "@/components/HeroHalf";
import Contact from "../components/Contact";
import Subscribe from "../components/Subscribe";

function page() {
  return (
    <div>
      <Header />
      <HeroHalf>Services</HeroHalf>
      <Services />
      <Process />
      <Contact />
      <div className="h-10"></div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default page;
