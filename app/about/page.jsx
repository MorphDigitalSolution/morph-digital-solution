import Header from "@/components/Header";
import React from "react";
import HeroHalf from "@/components/HeroHalf";
import AboutUs from "./components/AboutUs";
import Footer from "@/components/Footer";
import Team from "../components/Team";
import About from "../components/About";
import Subscribe from "../components/Subscribe";
import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import { FiCheckCircle } from "react-icons/fi";
import Link from "next/link";
import Contact from "../components/Contact";

function page() {
  return (
    <div>
      <Header />
      <HeroHalf>About Us</HeroHalf>
      <AboutUs />
      {/* <About /> */}
      <div className="bg-neutral-700 text-white relative">
        <div className="absolute w-full h-full top-0 left-0 bg-neutral-800/90"></div>
        <div className="max-w-7xl relative mx-auto grid lg:grid-cols-2 py-10">
          <div className="relative h-full min-h-[500px]">
            <img
              src="img/about1.png"
              alt=""
              className="absolute border-[12px] border-white top-5 right-2 h-[300px] lg:h-[480px] rounded-[40px]"
            />
            <img
              src="img/about2.png"
              alt=""
              className="absolute border-[12px] border-white bottom-0 left-12 lg:left-20 h-[200px] lg:h-[280px] rounded-[40px]"
            />
            <img
              src="img/about3.png"
              alt=""
              className="absolute border-[12px] border-white top-28 lg:top-24 left-5 lg:left-10 h-[200px] lg:h-[290px] aspect-square object-cover rounded-full"
            />
          </div>
          <div className="px-5 lg:px-16 lg:pt-20 lg:pb-5">
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="pb-2">
                <TitlePillow>Morph's Value</TitlePillow>
              </div>
            </BoxReveal>
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="text-2xl lg:text-5xl font-extrabold py-2 lg:py-4 capitalize text -blue-950">
                <span className="text-amber-900">Values</span> we keep
                {/* Morph ​၏ တန်ဖိုးထားမှုများ */}
              </div>
            </BoxReveal>
            <div className="text-neutral-400/80">
              <BoxReveal boxColor={"#b45309"} duration={0.5}>
                Morph ​၏ တန်ဖိုးထားမှုများ
              </BoxReveal>
            </div>
            <div className="grid lg:grid- cols-7 pt-8 gap-y-5">
              <div className="lg:col- span-5 space-y-1 leading-[1.8]">
                <BoxReveal boxColor={"#b45309"} duration={0.5}>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-2xl text- amber-900" />
                    <div className="text- font- semibold">
                      တီထွင်ဖန်တီးမှု (Innovation)
                    </div>
                  </div>
                </BoxReveal>
                <BoxReveal boxColor={"#b45309"} duration={0.5}>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-2xl text- amber-900" />
                    <div className="text- font- semibold">
                      ရိုးသားမြင်သာမှု (Integrity)
                    </div>
                  </div>
                </BoxReveal>
                <BoxReveal boxColor={"#b45309"} duration={0.5}>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-2xl text- amber-900" />
                    <div className="text- font- semibold">
                      ထူးချွန်မှု (Excellence)
                    </div>
                  </div>
                </BoxReveal>
                <BoxReveal boxColor={"#b45309"} duration={0.5}>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-2xl text- amber-900" />
                    <div className="text- font- semibold">
                      ဖောက်သည်အခြေပြုမှု (Customer - Centricity)
                    </div>
                  </div>
                </BoxReveal>
                <BoxReveal boxColor={"#b45309"} duration={0.5}>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-2xl text- amber-900" />
                    <div className="text- font- semibold">
                      ပူးပေါင်းဆောင်ရွက်မှု (Collaboration)
                    </div>
                  </div>
                </BoxReveal>
                <BoxReveal boxColor={"#b45309"} duration={0.5}>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-2xl text- amber-900" />
                    <div className="text- font- semibold">
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
        <div className="max-w-7xl relative mx-auto grid lg:grid-cols-5 py-10">
          <div className="px-5 lg:px-16 lg:py-20 lg:col-span-3">
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="pb-2">
                <TitlePillow>Morph's Strategy</TitlePillow>
              </div>
            </BoxReveal>
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="text-2xl lg:text-5xl font-extrabold py-2 lg:py-4 capitalize text -blue-950">
                <span className="text-amber-900">Process</span> we follow
              </div>
            </BoxReveal>
            <div className="text-neutral-400/80">
              <BoxReveal boxColor={"#b45309"} duration={0.5}>
                Morph ၏ ဒီဂျစ်တယ် Transformation ဆောင်ရွက်မှု လုပ်ငန်းစဉ်
              </BoxReveal>
            </div>
            <div className="grid lg:grid- cols-7 pt-8 gap-y-5">
              <div className="lg:col- span-5 space-y-1 leading-[1.8]">
                <BoxReveal boxColor={"#b45309"} duration={0.5}>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-2xl text- amber-900" />
                    <div className="text- font- semibold">
                      Step 1. အခြေခံအကြံပြုမှု (Initial Consultation)
                    </div>
                  </div>
                </BoxReveal>
                <BoxReveal boxColor={"#b45309"} duration={0.5}>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-2xl text- amber-900" />
                    <div className="text- font- semibold">
                      Step 2. နည်းဗျူဟာ ဖန်တီးခြင်း (Strategy Development)
                    </div>
                  </div>
                </BoxReveal>
                <BoxReveal boxColor={"#b45309"} duration={0.5}>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-2xl text- amber-900" />
                    <div className="text- font- semibold">
                      Step 3. ဒီဇိုင်းနှင့် အစီအစဉ် (Design&Planning)
                    </div>
                  </div>
                </BoxReveal>
                <BoxReveal boxColor={"#b45309"} duration={0.5}>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-2xl text- amber-900" />
                    <div className="text- font- semibold">
                      Step 4. အကောင်အထည်ဖော်ခြင်း (Implementation)
                    </div>
                  </div>
                </BoxReveal>
                <BoxReveal boxColor={"#b45309"} duration={0.5}>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-2xl text- amber-900" />
                    <div className="text- font- semibold">
                      Step 5. စမ်းသပ်ခြင်းနှင့် အရည်အသွေး သတ်မှတ်ခြင်း (Testing
                      & Quality Assurance)
                    </div>
                  </div>
                </BoxReveal>
                <BoxReveal boxColor={"#b45309"} duration={0.5}>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-2xl text- amber-900" />
                    <div className="text- font- semibold">
                      Step 6. Final Delivery & Launch
                    </div>
                  </div>
                </BoxReveal>
                <BoxReveal boxColor={"#b45309"} duration={0.5}>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-2xl text- amber-900" />
                    <div className="text- font- semibold">
                      Step 7. Post Launch Support & Optimization
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
          <div className="relative h-full min-h-[500px] lg:col-span-2">
            <img
              src="img/about1.png"
              alt=""
              className="absolute border-[12px] border-white top-10 left-0 h-[300px] lg:h-[480px] rounded-[40px]"
            />
            <img
              src="img/about2.png"
              alt=""
              className="absolute border-[12px] border-white bottom-10 left-12 lg:left-16 h-[200px] lg:h-[280px] rounded-[40px]"
            />
            <img
              src="img/about3.png"
              alt=""
              className="absolute border-[12px] border-white top-28 lg:top-24 right-5 lg:right-0 h-[200px] lg:h-[290px] aspect-square object-cover rounded-full"
            />
          </div>
        </div>
      </div>
      <Team />
      <Contact />
      <div className="h-20 bg-neutral-700"></div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default page;
