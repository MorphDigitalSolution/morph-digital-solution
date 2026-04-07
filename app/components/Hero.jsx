// import BoxReveal from "@/components/magicui/box-reveal";
import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <img
        src="img/heroSect.jpg"
        alt="hero image"
        loading="lazy"
        className="w-full h-full absolute z-10 object-cover object-top brightness-[] opacity-95"
      />
      <div className="min-h-screen relative z-20 py-12 lg:py-20 abso lute top-0 left-0 w-full h-full bg-[#422e20]/95 text-neutral-100 flex items-center justify-center">
        <div className="max-w-6xl flex flex-col items-center text-center pt-20 pb-10">
          <BoxReveal boxColor={"#b4530900"} duration={0.2}>
            <TitlePillow>Digital Solution</TitlePillow>
          </BoxReveal>
          <BoxReveal boxColor={"#b4530900"} duration={0.2}>
            <div className="text-4xl lg:text-6xl font-extrabold pt-6 px-5">
              One Stop Digital Solution
            </div>
            <div className="text-2xl lg:text-5xl font-extrabold pb-4 px-5 lg:pt-4">
              Services Product Agency
            </div>
          </BoxReveal>
          <div className="grid lg:grid-cols-2 text-white/85">
            <div className="px-5 py-3 leading-8 lg:px-10 lg:border-r-2">
              <BoxReveal
                className={"text-center lg:text-start"}
                boxColor={"#b4530900"}
                duration={0.2}
              >
                ကိုယ်ပိုင်စီးပွားရေး စလုပ်မယ့် လုပ်ငန်းသစ် (Startup) လုပ်ငန်း‌
                တွေ ၊ SME လုပ်ငန်းတွေနဲ့ Healthcare Business လုပ်ငန်းတွေရဲ့
                Digital လိုအပ်ချက်‌ တွေအားလုံးကို သေချာအထူးပြု‌ လေ့လာပြီး
                တစ်နေရာတည်းကနေ One Stop Services ပေးနေတဲ့ Website Development
                Services, AI Powered Digital Marketing Services, Business
                Registration Services, AI Agent Services နဲ့ AI Chatbot Services
                ပေးတဲ့  Company တစ်ခုပါရှင့်။
              </BoxReveal>
            </div>
            <div className="px-5 py-3 leading-8 lg:px-10">
              <BoxReveal
                className={"text-center lg:text-start"}
                boxColor={"#b4530900"}
                duration={0.2}
              >
                Morph Digital Solution က မြန်မာနိုင်ငံတွင်
                တရားဝင်လုပ်ငန်းလည်ပတ်နေတဲ့ DICA Registered Company, SME
                Certified Company, Online Sales Certified ရရှိထားတဲ့ Company
                တစ်ခုပါရှင့်။
              </BoxReveal>
            </div>
          </div>
          <div className="lg:px-24 p-4 text-lg lg:text-xl">
            <BoxReveal boxColor={"#b4530900"} duration={0.2}>
              Your Strategic Digital Transformation Growth Partner for Startup,
              SME & Healthcare Businesses.
            </BoxReveal>
          </div>
          <div className="flex gap-5">
            <BoxReveal boxColor={"#b4530900"} duration={0.2}>
              <Link
                href="/services"
                className="bg-amber-700 block uppercase text-sm font-semibold py-3 px-7 rounded-full hover:bg-amber-700 hover:text-neutral-100 duration-300"
              >
                See Services
              </Link>
            </BoxReveal>
            <BoxReveal boxColor={"#b4530900"} duration={0.2}>
              <Link
                href="/contact"
                className="bg-white text-black block uppercase text-sm font-semibold py-3 px-7 rounded-full hover:bg-amber-700 hover:text-neutral-100 duration-300"
              >
                Contact Us
              </Link>
            </BoxReveal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
