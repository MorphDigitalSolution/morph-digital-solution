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
              <TitlePillow>Morph's Value</TitlePillow>
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="text-2xl lg:text-5xl font-extrabold py-2 lg:py-4 capitalize text-blue-950">
              <span className="text-amber-900">Values</span> we keep
              {/* Morph ​၏ တန်ဖိုးထားမှုများ */}
            </div>
          </BoxReveal>
          <div className="text-neutral-600/80">
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              Morph ​၏ တန်ဖိုးထားမှုများ
            </BoxReveal>
          </div>
          <div className="grid lg:grid- cols-7 pt-8 gap-y-5">
            <div className="lg:col- span-5 space-y-1 leading-[1.8]">
              <BoxReveal boxColor={"#b45309"} duration={0.5}>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-2xl text-amber-900" />
                  <div className="text- font-semibold">
                    တီထွင်ဖန်တီးမှု (Innovation)
                  </div>
                </div>
              </BoxReveal>
              <BoxReveal boxColor={"#b45309"} duration={0.5}>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-2xl text-amber-900" />
                  <div className="text- font-semibold">
                    ရိုးသားမြင်သာမှု (Integrity)
                  </div>
                </div>
              </BoxReveal>
              <BoxReveal boxColor={"#b45309"} duration={0.5}>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-2xl text-amber-900" />
                  <div className="text- font-semibold">
                    ထူးချွန်မှု (Excellence)
                  </div>
                </div>
              </BoxReveal>
              <BoxReveal boxColor={"#b45309"} duration={0.5}>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-2xl text-amber-900" />
                  <div className="text- font-semibold">
                    ဖောက်သည်အခြေပြုမှု (Customer - Centricity)
                  </div>
                </div>
              </BoxReveal>
              <BoxReveal boxColor={"#b45309"} duration={0.5}>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-2xl text-amber-900" />
                  <div className="text- font-semibold">
                    ပူးပေါင်းဆောင်ရွက်မှု (Collaboration)
                  </div>
                </div>
              </BoxReveal>
              <BoxReveal boxColor={"#b45309"} duration={0.5}>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-2xl text-amber-900" />
                  <div className="text- font-semibold">
                    လျင်မြန်စွာပြောင်းလဲနိုင်မှု (Adability)
                  </div>
                </div>
              </BoxReveal>
            </div>
            {/* <div className="lg:col-span-2 lg:ps-3 text-center lg:pb-8 flex lg:justify-center">
              <div className="rounded-3xl aspect-square w-fit py-5 px-6 uppercase border-2 border-neutral-400 flex flex-col items-center justify-center">
                <div className="text-6xl font-bold text-amber-900">24</div>
                <div className="text-xl font-bold text-neutral-700/60">
                  Years
                </div>
                <div className="text-xs font-bold text-neutral-700/60">
                  of experience
                </div>
              </div>
            </div> */}
          </div>
          <div className="">
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <Link
                href="/about"
                className="bg-amber-900 hover:bg-amber-900 duration-300 text-neutral-300 uppercase py-3 px-6 block rounded-full mt-5"
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
