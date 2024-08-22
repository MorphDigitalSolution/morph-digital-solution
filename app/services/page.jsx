import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Widget from "./components/Widget";

function page() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Process />
      <Footer />
    </div>
  );
}

export default page;
