import Header from "@/components/Header";
import Hero from "./components/Hero";
import ContactInfo from "./components/Info";
import Contact from "./components/Contact";
import Footer from "@/components/Footer";
import Subscribe from "../components/Subscribe";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ContactInfo />
      <Contact />
      <Subscribe />
      <Footer />
    </>
  );
}
