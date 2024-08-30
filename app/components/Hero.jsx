// import BoxReveal from "@/components/magicui/box-reveal";
import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="h-[850px] relative overflow-hidden">
      <img
        src="img/heroSect.jpg"
        alt="hero image"
        className="w-full h-full object-cover object-top brightness-[0.4] opacity-95"
      />
      <div className="absolute top-0 left-0 w-full h-full text-neutral-300 bg-neutral-800/5 flex items-center justify-center">
        <div className="max-w-5xl flex flex-col items-center text-center pt-20">
          <BoxReveal boxColor={"#b4530900"} duration={0.2}>
            <TitlePillow>Digital Solution</TitlePillow>
          </BoxReveal>
          <BoxReveal boxColor={"#b4530900"} duration={0.2}>
            <div className="text-4xl lg:text-[4.6rem] leading-[1.1] font-extrabold pt-3 lg:py-2">
              One Stop <span className="text-amber-900">Digital Solution </span>
              Service Company
            </div>
          </BoxReveal>
          <div className="lg:px-24 p-4">
            <BoxReveal boxColor={"#b4530900"} duration={0.2}>
              အသေးစား၊အလတ်စား စီးပွားရေးလုပ်ငန်းရှင်များ (MSMEs) များ​၏
              ဒီဂျစ်တယ်လိုအပ်ချက်များအားလုံးကို တစ်နေရာတည်းမှဖြေရှင်းနိုင်သော
              ဝန်ဆောင်မှုပေးသည့် Website, Digital Marketing နှင့် Business
              Registration Services Company တခုဖြစ်သည်။
            </BoxReveal>
          </div>
          <div className="flex gap-5">
            <BoxReveal boxColor={"#b4530900"} duration={0.2}>
              <Link
                href="/services"
                className="bg-amber-900 block uppercase text-sm font-semibold py-3 px-7 rounded-full hover:bg-amber-900 hover:text-neutral-300 duration-300"
              >
                See Services
              </Link>
            </BoxReveal>
            <BoxReveal boxColor={"#b4530900"} duration={0.2}>
              <Link
                href="/contact"
                className="bg-white text-black block uppercase text-sm font-semibold py-3 px-7 rounded-full hover:bg-amber-900 hover:text-neutral-300 duration-300"
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
