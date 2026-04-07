import Header from "@/components/Header";
import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Goal from "./components/Goal";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Subscribe from "./components/Subscribe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <main className="bg-white min-h-screen">
        <Hero />
        <Goal />
        {/* <About /> */}
        <Services />
        <Portfolio />
        {/* <Team /> */}
        {/* <Review /> */}
        {/* <Blog /> */}
        <Contact />
        <div className="h-20 bg- neutral-700"></div>
        <Subscribe />
        <Footer />
      </main>
    </div>
  );
}
