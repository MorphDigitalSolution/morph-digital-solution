import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import React from "react";

function Portfolio() {
  return (
    <div className="p-8 lg:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="p-5">
          <div className="flex gap-2 items-center justify-center flex-col text-center">
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="pb-2">
                <TitlePillow>Our Portfolio</TitlePillow>
              </div>
            </BoxReveal>
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="text-4xl lg:text-5xl font-extrabold lg:py-2 text-blue-950">
                <span className="text-amber-700">Activities</span> We Completed
              </div>
            </BoxReveal>
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="text-center max-w-xl mx-auto text-blue-950/70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                vel dolor oribus alias praesentium error sunt aut pariatur
                veniam digni.
              </div>
            </BoxReveal>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 py-8 w-full">
            <div className="bg-slate-200 relative rounded-3xl aspect-square overflow-hidden">
              <a
                href="#"
                className="absolute top-0 left-0 w-full h-full text-white bg-black/40 duration-300 p-5 gap-4 opacity-0 hover:opacity-100 flex items-center justify-center text-center flex-col"
              >
                <div className="font-semibold text-xl">Digital Marketing</div>
                <div className="">
                  Lorem ipsum dolor sit amwere wqet consecur adiig elweit. Atquq
                  verv astwqetis nihil iste laboreo.
                </div>
              </a>
            </div>
            <div className="bg-slate-200 relative rounded-3xl aspect-square overflow-hidden">
              <a
                href="#"
                className="absolute top-0 left-0 w-full h-full text-white bg-black/40 duration-300 p-5 gap-4 opacity-0 hover:opacity-100 flex items-center justify-center text-center flex-col"
              >
                <div className="font-semibold text-xl">Digital Marketing</div>
                <div className="">
                  Lorem ipsum dolor sit amwere wqet consecur adiig elweit. Atquq
                  verv astwqetis nihil iste laboreo.
                </div>
              </a>
            </div>
            <div className="bg-slate-200 relative rounded-3xl aspect-square overflow-hidden">
              <a
                href="#"
                className="absolute top-0 left-0 w-full h-full text-white bg-black/40 duration-300 p-5 gap-4 opacity-0 hover:opacity-100 flex items-center justify-center text-center flex-col"
              >
                <div className="font-semibold text-xl">Digital Marketing</div>
                <div className="">
                  Lorem ipsum dolor sit amwere wqet consecur adiig elweit. Atquq
                  verv astwqetis nihil iste laboreo.
                </div>
              </a>
            </div>
            <div className="bg-slate-200 relative rounded-3xl aspect-square overflow-hidden">
              <a
                href="#"
                className="absolute top-0 left-0 w-full h-full text-white bg-black/40 duration-300 p-5 gap-4 opacity-0 hover:opacity-100 flex items-center justify-center text-center flex-col"
              >
                <div className="font-semibold text-xl">Digital Marketing</div>
                <div className="">
                  Lorem ipsum dolor sit amwere wqet consecur adiig elweit. Atquq
                  verv astwqetis nihil iste laboreo.
                </div>
              </a>
            </div>
            <div className="bg-slate-200 relative rounded-3xl aspect-square overflow-hidden">
              <a
                href="#"
                className="absolute top-0 left-0 w-full h-full text-white bg-black/40 duration-300 p-5 gap-4 opacity-0 hover:opacity-100 flex items-center justify-center text-center flex-col"
              >
                <div className="font-semibold text-xl">Digital Marketing</div>
                <div className="">
                  Lorem ipsum dolor sit amwere wqet consecur adiig elweit. Atquq
                  verv astwqetis nihil iste laboreo.
                </div>
              </a>
            </div>
            <div className="bg-slate-200 relative rounded-3xl aspect-square overflow-hidden">
              <a
                href="#"
                className="absolute top-0 left-0 w-full h-full text-white bg-black/40 duration-300 p-5 gap-4 opacity-0 hover:opacity-100 flex items-center justify-center text-center flex-col"
              >
                <div className="font-semibold text-xl">Digital Marketing</div>
                <div className="">
                  Lorem ipsum dolor sit amwere wqet consecur adiig elweit. Atquq
                  verv astwqetis nihil iste laboreo.
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
