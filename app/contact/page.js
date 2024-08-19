import Header from "@/components/Header";
import Hero from "./components/Hero";
import ContactInfo from "./components/Info";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <Hero />
        <ContactInfo />
        <Contact />
      </main>
    </>
  );
}
