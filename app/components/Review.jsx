import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import React from "react";

function Review() {
  return (
    <div className="relative bg-blend-difference bg-left bg-repeat-x bg-[url(https://demo.bosathemes.com/agence/wp-content/uploads/sites/35/2022/11/agency-img3.png)] bg-neutral-800">
      <div className="w-full h-full bg-neutral-800/80 pt-20 lg:py-28 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-8 p-5 lg:items-center">
            <div className="">
              <BoxReveal boxColor={"#b45309"} duration={0.5}>
                <div className="pb-2">
                  <TitlePillow>Client Reviews</TitlePillow>
                </div>
              </BoxReveal>
              <BoxReveal boxColor={"#b45309"} duration={0.5}>
                <div className="text-4xl lg:text-5xl font-extrabold lg:py-2 capitalize">
                  <span className="text-amber-700">Review's</span> of Clients
                </div>
              </BoxReveal>
            </div>
            <div className="max-w-md">
              <BoxReveal boxColor={"#b45309"} duration={0.5}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium veritatis rweqda aspernatur fuga consectetur omnis
                minima tempore ipsa, provident sed esse harum!
              </BoxReveal>
            </div>
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <a
                href=""
                className="bg-white block rounded-full py-3 px-6 text-black text-[0.9rem] font-semibold uppercase"
              >
                View More
              </a>
            </BoxReveal>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 p-5 pb-20">
            <div className="pt-20 lg:pt-24">
              <div className="bg-neutral-900 w-full h-64 rounded-3xl relative">
                <div className="absolute -top-10 left-12 size-20 border-[7px] border-neutral-800 rounded-full bg-neutral-600"></div>
              </div>
            </div>
            <div className="pt-20 lg:pt-24">
              <div className="bg-neutral-900 w-full h-64 rounded-3xl relative">
                <div className="absolute -top-10 left-12 size-20 border-[7px] border-neutral-800 rounded-full bg-neutral-600"></div>
              </div>
            </div>
            <div className="pt-20 lg:pt-24">
              <div className="bg-neutral-900 w-full h-64 rounded-3xl relative">
                <div className="absolute -top-10 left-12 size-20 border-[7px] border-neutral-800 rounded-full bg-neutral-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
