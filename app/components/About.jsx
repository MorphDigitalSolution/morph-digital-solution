import TitlePillow from "@/components/TitlePillow";
import { FiCheckCircle } from "react-icons/fi";
import React from "react";
import BoxReveal from "@/components/magicui/box-reveal";
import Link from "next/link";

function About() {
  return (
    <>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 py-10">
        <div className="relative h-full min-h-[500px]">
          <img
            src="img/about1.png"
            alt=""
            className="absolute border-[12px] border-white top-10 right-2 h-[300px] lg:h-[480px] rounded-[40px]"
          />
          <img
            src="img/about2.png"
            alt=""
            className="absolute border-[12px] border-white bottom-10 left-12 lg:left-20 h-[200px] lg:h-[280px] rounded-[40px]"
          />
          <img
            src="img/about3.png"
            alt=""
            className="absolute border-[12px] border-white top-28 lg:top-24 left-5 lg:left-10 h-[200px] lg:h-[290px] aspect-square object-cover rounded-full"
          />
        </div>
        <div className="px-5 lg:px-16 lg:py-20">
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="pb-2">
              <TitlePillow>About Us</TitlePillow>
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="text-2xl lg:text-5xl font-extrabold py-2 lg:py-4 capitalize text-blue-950">
              <span className="text-amber-700">Introduction</span> to best
              digital agency
            </div>
          </BoxReveal>
          <div className="text-neutral-500/80">
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              We transform your ideas into powerful digital experiences that
              make a lasting impact.
            </BoxReveal>
          </div>
          <div className="grid lg:grid-cols-7 pt-8 gap-y-5">
            <div className="lg:col-span-4 space-y-1">
              <BoxReveal boxColor={"#b45309"} duration={0.5}>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-2xl text-amber-700" />
                  <div className="text- font-semibold">
                    Proven Success with Results
                  </div>
                </div>
              </BoxReveal>
              <BoxReveal boxColor={"#b45309"} duration={0.5}>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-2xl text-amber-700" />
                  <div className="text- font-semibold">
                    Expert Team of Specialists
                  </div>
                </div>
              </BoxReveal>
              <BoxReveal boxColor={"#b45309"} duration={0.5}>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-2xl text-amber-700" />
                  <div className="text- font-semibold">
                    Innovative and Creative Solutions
                  </div>
                </div>
              </BoxReveal>
              <BoxReveal boxColor={"#b45309"} duration={0.5}>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-2xl text-amber-700" />
                  <div className="text- font-semibold">
                    Strategies Backed by Data
                  </div>
                </div>
              </BoxReveal>
              <BoxReveal boxColor={"#b45309"} duration={0.5}>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-2xl text-amber-700" />
                  <div className="text- font-semibold">
                    Quick Turnaround Times
                  </div>
                </div>
              </BoxReveal>
              <BoxReveal boxColor={"#b45309"} duration={0.5}>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-2xl text-amber-700" />
                  <div className="text- font-semibold">
                    Tailored Solutions for Every Need
                  </div>
                </div>
              </BoxReveal>
            </div>
            <div className="lg:col-span-3 lg:pb-8 flex lg:justify-center">
              <div className="rounded-3xl aspect-square w-fit py-5 px-6 uppercase border-2 border-neutral-400 flex flex-col items-center justify-center">
                <div className="text-6xl font-bold text-amber-700">24</div>
                <div className="text-xl font-bold text-neutral-700/60">
                  Years
                </div>
                <div className="text-xs font-bold text-neutral-700/60">
                  of experience
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <Link
                href="/about"
                className="bg-amber-700 hover:bg-amber-800 duration-300 text-white uppercase py-3 px-6 block rounded-full mt-5"
              >
                More About Us
              </Link>
            </BoxReveal>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
