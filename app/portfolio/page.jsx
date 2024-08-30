import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroHalf from "@/components/HeroHalf";
import React from "react";
import Subscribe from "../components/Subscribe";
import BoxReveal from "@/components/magicui/box-reveal";
import GroupClients from "./components/GroupClients";
import Contact from "../components/Contact";

function page() {
  return (
    <div>
      <Header />
      <HeroHalf>Portfolio</HeroHalf>
      <div className="p-8 lg:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="p-5">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8 md:px-10 lg:pt-16 py-8 w-full">
              <div className="relative w-fit rounded-3xl aspect-square overflow-hidden group">
                <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                  <img
                    src="img/p6.png"
                    alt=""
                    className="w-full group-hover:scale-105 duration-700 h-full object-cover"
                  />
                </BoxReveal>
                <a
                  href="#"
                  className="absolute top-0 left-0 w-full h-full text-neutral-300 bg-black/40 rounded-3xl duration-500 p-5 gap-4 opacity-0 hover:opacity-100 flex items-center justify-center text-center flex-col"
                >
                  <div className="font-semibold text-xl">Digital Marketing</div>
                  <div className="">
                    Lorem ipsum dolor sit amwere wqet consecur adiig elweit.
                    Atquq verv astwqetis nihil iste laboreo.
                  </div>
                </a>
              </div>
              <div className="relative w-fit rounded-3xl aspect-square overflow-hidden group">
                <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                  <img
                    src="img/p5.png"
                    alt=""
                    className="w-full group-hover:scale-105 duration-700 h-full object-cover"
                  />
                </BoxReveal>
                <a
                  href="#"
                  className="absolute top-0 left-0 w-full h-full text-neutral-300 bg-black/40 rounded-3xl duration-500 p-5 gap-4 opacity-0 hover:opacity-100 flex items-center justify-center text-center flex-col"
                >
                  <div className="font-semibold text-xl">Digital Marketing</div>
                  <div className="">
                    Lorem ipsum dolor sit amwere wqet consecur adiig elweit.
                    Atquq verv astwqetis nihil iste laboreo.
                  </div>
                </a>
              </div>
              <div className="relative w-fit rounded-3xl aspect-square overflow-hidden group">
                <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                  <img
                    src="img/p4.png"
                    alt=""
                    className="w-full group-hover:scale-105 duration-700 h-full object-cover"
                  />
                </BoxReveal>
                <a
                  href="#"
                  className="absolute top-0 left-0 w-full h-full text-neutral-300 bg-black/40 rounded-3xl duration-500 p-5 gap-4 opacity-0 hover:opacity-100 flex items-center justify-center text-center flex-col"
                >
                  <div className="font-semibold text-xl">Digital Marketing</div>
                  <div className="">
                    Lorem ipsum dolor sit amwere wqet consecur adiig elweit.
                    Atquq verv astwqetis nihil iste laboreo.
                  </div>
                </a>
              </div>
              <div className="relative w-fit rounded-3xl aspect-square overflow-hidden group">
                <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                  <img
                    src="img/p3.png"
                    alt=""
                    className="w-full group-hover:scale-105 duration-700 h-full object-cover"
                  />
                </BoxReveal>
                <a
                  href="#"
                  className="absolute top-0 left-0 w-full h-full text-neutral-300 bg-black/40 rounded-3xl duration-500 p-5 gap-4 opacity-0 hover:opacity-100 flex items-center justify-center text-center flex-col"
                >
                  <div className="font-semibold text-xl">Digital Marketing</div>
                  <div className="">
                    Lorem ipsum dolor sit amwere wqet consecur adiig elweit.
                    Atquq verv astwqetis nihil iste laboreo.
                  </div>
                </a>
              </div>
              <div className="relative w-fit rounded-3xl aspect-square overflow-hidden group">
                <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                  <img
                    src="img/p2.png"
                    alt=""
                    className="w-full group-hover:scale-105 duration-700 h-full object-cover"
                  />
                </BoxReveal>
                <a
                  href="#"
                  className="absolute top-0 left-0 w-full h-full text-neutral-300 bg-black/40 rounded-3xl duration-500 p-5 gap-4 opacity-0 hover:opacity-100 flex items-center justify-center text-center flex-col"
                >
                  <div className="font-semibold text-xl">Digital Marketing</div>
                  <div className="">
                    Lorem ipsum dolor sit amwere wqet consecur adiig elweit.
                    Atquq verv astwqetis nihil iste laboreo.
                  </div>
                </a>
              </div>
              <div className="relative w-fit rounded-3xl aspect-square overflow-hidden group">
                <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                  <img
                    src="img/p1.png"
                    alt=""
                    className="w-full group-hover:scale-105 duration-700 h-full object-cover"
                  />
                </BoxReveal>
                <a
                  href="#"
                  className="absolute top-0 left-0 w-full h-full text-neutral-300 bg-black/40 rounded-3xl duration-500 p-5 gap-4 opacity-0 hover:opacity-100 flex items-center justify-center text-center flex-col"
                >
                  <div className="font-semibold text-xl">Digital Marketing</div>
                  <div className="">
                    Lorem ipsum dolor sit amwere wqet consecur adiig elweit.
                    Atquq verv astwqetis nihil iste laboreo.
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GroupClients />
      <Contact />
      <div className="h-20"></div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default page;
