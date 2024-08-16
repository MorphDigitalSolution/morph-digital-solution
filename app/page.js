import Header from "@/components/Header";
import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Goal from "./components/Goal";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Review from "./components/Review";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <Hero />
        <Services />
        <About />
        <Goal />
        <Portfolio />
        <Team />
        <Review />
        <div className="h-screen"></div>
      </main>
    </>
  );
}
