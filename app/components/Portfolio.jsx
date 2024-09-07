import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import React from "react";

function Portfolio() {
  return (
    <div className="p-8 lg:py-16 mt-16 lg:mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="p-5">
          <div className="flex gap-2 items-center justify-center flex-col text-center">
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="pb-2">
                <TitlePillow>Our Portfolio</TitlePillow>
              </div>
            </BoxReveal>
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="text-4xl lg:text-5xl font-extrabold lg:py-2 text-[#6F4E37]">
                <span className="text-amber-600">Activities</span> We Completed
              </div>
            </BoxReveal>
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="text-center max-w-xl mx-auto text-[#6F4E37b1]">
                Explore our successful projects that highlight our expertise and
                commitment to delivering effective exceptional results.
              </div>
            </BoxReveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8 md:px-10 lg:pt-16 py-8 w-full">
            <div className="group">
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <img
                  src="img/web1.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2 rounded-3xl"
                />
                <div className="text-center pt-1 text-sm">Regan Travel</div>
              </BoxReveal>
            </div>
            <div className="group">
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <img
                  src="img/web2.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2 rounded-3xl"
                />
                <div className="text-center pt-1 text-sm">
                  Rocket Plastic Factory
                </div>
              </BoxReveal>
            </div>
            <div className="group">
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <img
                  src="img/web3.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2 rounded-3xl"
                />
                <div className="text-center pt-1 text-sm">
                  Miss Shwebo Group Co.,Ltd
                </div>
              </BoxReveal>
            </div>
            <div className="group">
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <img
                  src="img/web4.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2 rounded-3xl"
                />
                <div className="text-center pt-1 text-sm">DivaGlobalize</div>
              </BoxReveal>
            </div>
            <div className="group">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/web5.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2 rounded-3xl"
                />
                <div className="text-center pt-1 text-sm">
                  Global Food Safety Academy Myanmar
                </div>
              </BoxReveal>
            </div>
            <div className="group">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/web6.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2 rounded-3xl"
                />
                <div className="text-center pt-1 text-sm">
                  Morph Website & Digital Marketing
                </div>
              </BoxReveal>
            </div>
            <div className="sm:col-span-2 lg:col-span-3 flex items-center justify-center">
              <a href="/portfolio" className="bg-amber-600 text-white px-8 text-sm rounded-full uppercase hover:bg-amber-700 py-2">See More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
