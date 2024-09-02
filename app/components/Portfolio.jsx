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
              <div className="text-center max-w-xl mx-auto text-[#6F4E37b1]">
                Explore our successful projects that highlight our expertise and
                commitment to delivering effective exceptional results.
              </div>
            </BoxReveal>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 lg:pt-16 py-8 w-full">
            <div className="relative rounded-3xl aspect-square overflow-hidden group">
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <img
                  src="img/p6.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-700 h-full object-cover"
                />
              </BoxReveal>
              <a
                href="#"
                className="absolute top-0 left-0 w-full h-full text-neutral-100 bg-black/40 duration-500 p-5 gap-4 opacity-0 hover:opacity-100 flex items-center justify-center text-center flex-col"
              >
                <div className="font-semibold text-xl">Digital Marketing</div>
                <div className="">
                  Lorem ipsum dolor sit amwere wqet consecur adiig elweit. Atquq
                  verv astwqetis nihil iste laboreo.
                </div>
              </a>
            </div>
            <div className="relative rounded-3xl aspect-square overflow-hidden group">
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <img
                  src="img/p5.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-700 h-full object-cover"
                />
              </BoxReveal>
              <a
                href="#"
                className="absolute top-0 left-0 w-full h-full text-neutral-100 bg-black/40 duration-500 p-5 gap-4 opacity-0 hover:opacity-100 flex items-center justify-center text-center flex-col"
              >
                <div className="font-semibold text-xl">Digital Marketing</div>
                <div className="">
                  Lorem ipsum dolor sit amwere wqet consecur adiig elweit. Atquq
                  verv astwqetis nihil iste laboreo.
                </div>
              </a>
            </div>
            <div className="relative rounded-3xl aspect-square overflow-hidden group">
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <img
                  src="img/p4.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-700 h-full object-cover"
                />
              </BoxReveal>
              <a
                href="#"
                className="absolute top-0 left-0 w-full h-full text-neutral-100 bg-black/40 duration-500 p-5 gap-4 opacity-0 hover:opacity-100 flex items-center justify-center text-center flex-col"
              >
                <div className="font-semibold text-xl">Digital Marketing</div>
                <div className="">
                  Lorem ipsum dolor sit amwere wqet consecur adiig elweit. Atquq
                  verv astwqetis nihil iste laboreo.
                </div>
              </a>
            </div>
            <div className="relative rounded-3xl aspect-square overflow-hidden group">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/p3.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-700 h-full object-cover"
                />
              </BoxReveal>
              <a
                href="#"
                className="absolute top-0 left-0 w-full h-full text-neutral-100 bg-black/40 duration-500 p-5 gap-4 opacity-0 hover:opacity-100 flex items-center justify-center text-center flex-col"
              >
                <div className="font-semibold text-xl">Digital Marketing</div>
                <div className="">
                  Lorem ipsum dolor sit amwere wqet consecur adiig elweit. Atquq
                  verv astwqetis nihil iste laboreo.
                </div>
              </a>
            </div>
            <div className="relative rounded-3xl aspect-square overflow-hidden group">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/p2.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-700 h-full object-cover"
                />
              </BoxReveal>
              <a
                href="#"
                className="absolute top-0 left-0 w-full h-full text-neutral-100 bg-black/40 duration-500 p-5 gap-4 opacity-0 hover:opacity-100 flex items-center justify-center text-center flex-col"
              >
                <div className="font-semibold text-xl">Digital Marketing</div>
                <div className="">
                  Lorem ipsum dolor sit amwere wqet consecur adiig elweit. Atquq
                  verv astwqetis nihil iste laboreo.
                </div>
              </a>
            </div>
            <div className="relative rounded-3xl aspect-square overflow-hidden group">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/p1.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-700 h-full object-cover"
                />
              </BoxReveal>
              <a
                href="#"
                className="absolute top-0 left-0 w-full h-full text-neutral-100 bg-black/40 duration-500 p-5 gap-4 opacity-0 hover:opacity-100 flex items-center justify-center text-center flex-col"
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
