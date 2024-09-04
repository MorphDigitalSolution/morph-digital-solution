import Contact from "@/app/components/Contact";
import Subscribe from "@/app/components/Subscribe";
import Team from "@/app/components/Team";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroHalf from "@/components/HeroHalf";
import BoxReveal from "@/components/magicui/box-reveal";
import React from "react";
import { FaBusinessTime, FaPhone } from "react-icons/fa";

function page() {
  return (
    <div>
      <Header />
      <HeroHalf>Web Development Services</HeroHalf>
      <div className="relative bg-blend-difference bg-left bg-repeat-x bg- [url(https://demo.bosathemes.com/agence/wp-content/uploads/sites/35/2022/11/agency-img3.png)] bg -neutral-800">
        <div className="w-full h-full bg-neutral- 800/90 flex pb-10">
          <div className="max-w-6xl w-full pt-16 lg:pb-20 text-center mx-auto text- neutral-100">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center w-full px-5 gap-10">
              <div className="flex items-center justify-center shadow-md rounded-3xl border-2 border-[#6f4e37] hover:shadow-lg duration-300 hover:bg-[#6f4e37] lg:justify-center md:justify-end">
                <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                  <div className="relative group rounded-3xl overflow-hidden h-72 w-[20rem] lg:w-[18.5rem] xl:w-[21rem] block">
                    {/* <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-600"></div> */}
                    <div className="absolute w-full h-full top-0 left-0 p-2 flex flex-col items-center justify-center">
                      <img
                        src="https://morph-digital-mm.vercel.app/img/chart.svg"
                        alt=""
                        className="group-hover:brightness-0 group-hover:invert size-20"
                      />
                      <div className="text-xl group-hover:text-white text-[#6f4e37]">
                        Blog Website
                      </div>
                      <div className="text-sm pt-5 leading-[1.8] pb-3 group-hover:text-neutral-200">
                        ကိုယ်ပိုင် အတွေးအခေါ်များ၊ ထင်မြင်ချက်များ (သို့) အတွေ့အကြုံများကို မျှဝေရာတွင် အသုံးပြုကြပြီး Content အသစ်များကို ပုံမှန်တင်နိုင်သည့် Blog Website များ ရေးဆွဲဆပးပါတယ်ရှင်။
                      </div>
                    </div>
                  </div>
                </BoxReveal>
              </div>
              <div className="flex items-center justify-center shadow-md rounded-3xl border-2 border-[#6f4e37] hover:shadow-lg duration-300 hover:bg-[#6f4e37] lg:justify-center md:justify-start">
                <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                  <div className="relative group rounded-3xl overflow-hidden h-72 w-[20rem] lg:w-[18.5rem] xl:w-[21rem] block">
                    {/* <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-600"></div> */}
                    <div className="absolute w-full h-full top-0 left-0 p-2 flex flex-col items-center justify-center">
                      <img
                        src="https://morph-digital-mm.vercel.app/img/marketing.svg"
                        alt=""
                        className="group-hover:brightness-0 group-hover:invert size-28 -mt-3"
                      />
                      <div className="text-xl group-hover:text-white text-[#6f4e37] -mt-5">
                        Portfolio Website
                      </div>
                      <div className="text-sm pt-5 leading-[1.8] pb-3 group-hover:text-neutral-200">
                        အနုပညာရှင်များ၊ ဒီဇိုင်နာများနှင့် Freelancers များ၏ လက်ရာများ၊ ကျွမ်းကျင်မှုများနှင့် အောင်မြင်မှုများကို ပြသလိုသည့် Portfolio Website များ ရေးဆွဲပေးပါတယ်ရှင်။                      </div>
                    </div>
                  </div>
                </BoxReveal>
              </div>
              <div className="flex items-center justify-center shadow-md rounded-3xl border-2 border-[#6f4e37] hover:shadow-lg duration-300 hover:bg-[#6f4e37] lg:justify-center md:justify-end">
                <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                  <div className="relative group rounded-3xl overflow-hidden h-72 w-[20rem] lg:w-[18.5rem] xl:w-[21rem] block">
                    {/* <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-600"></div> */}
                    <div className="absolute w-full h-full top-0 left-0 p-2 flex flex-col items-center justify-center">
                      <img
                        src="https://morph-digital-mm.vercel.app/img/business.svg"
                        alt=""
                        className="group-hover:brightness-0 group-hover:invert size-28 -mt-3"
                      />
                      <div className="text-xl group-hover:text-white text-[#6f4e37] -mt-5">
                        Business / Corporate Website
                      </div>
                      <div className="text-sm pt-5 leading-[1.8] pb-3 group-hover:text-neutral-200">
                        လုပ်ငန်းတစ်ခု (သို့) ကုမ္ပဏီတစ်ခု၏ ထုတ်ကုန်များ၊ ဝန်ဆောင်မှုများ၊ ရည်မှန်းချက်များနှင့် ဆက်သွယ်ရန် အချက်အလက်များကို ထုတ်ဖော်ပြသနိုင်သည့် Business Website / Corporate Website များ ရေးဆွဲပေးပါတယ်ရှင်။
                      </div>
                    </div>
                  </div>
                </BoxReveal>
              </div>
              {/* </div>
            <div className="flex items-center lg:items-center sm:items-start flex-col lg:flex-row w-full px-5 gap-8 sm:gap-5 justify-center"> */}
              <div className="flex items-center justify-center shadow-md rounded-3xl border-2 border-[#6f4e37] hover:shadow-lg duration-300 hover:bg-[#6f4e37] lg:justify-center md:justify-start">
                <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                  <div className="relative group rounded-3xl overflow-hidden h-72 w-[20rem] lg:w-[18.5rem] xl:w-[21rem] block">
                    {/* <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-600"></div> */}
                    <div className="absolute w-full h-full top-0 left-0 p-2 flex flex-col items-center justify-center">
                      <img
                        src="https://morph-digital-mm.vercel.app/img/chart.svg"
                        alt=""
                        className="group-hover:brightness-0 group-hover:invert size-20"
                      />
                      <div className="text-xl group-hover:text-white text-[#6f4e37]">
                        E-commerce Website
                      </div>
                      <div className="text-sm pt-5 leading-[1.8] pb-3 group-hover:text-neutral-200">
                        အွန်လိုင်းပေါ်မှတဆင့် ထုတ်ကုန်များ (သို့) ဝန်ဆောင်မှုများကို ရောင်းဝယ်နိုင်သည့် (ဥပမာ - Amazon, Shopify) တို့လို E-commerce Website များ ရေးဆွဲပေးပါတယ်ရှင်။                      </div>
                    </div>
                  </div>
                </BoxReveal>
              </div>
              <div className="flex items-center justify-center shadow-md rounded-3xl border-2 border-[#6f4e37] hover:shadow-lg duration-300 hover:bg-[#6f4e37] lg:justify-center md:justify-end">
                <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                  <div className="relative group rounded-3xl overflow-hidden h-72 w-[20rem] lg:w-[18.5rem] xl:w-[21rem] block">
                    {/* <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-600"></div> */}
                    <div className="absolute w-full h-full top-0 left-0 p-2 flex flex-col items-center justify-center">
                      <img
                        src="https://morph-digital-mm.vercel.app/img/marketing.svg"
                        alt=""
                        className="group-hover:brightness-0 group-hover:invert size-28 -mt-3"
                      />
                      <div className="text-xl group-hover:text-white text-[#6f4e37] -mt-5">
                        School or University Website
                      </div>
                      <div className="text-sm pt-5 leading-[1.8] pb-3 group-hover:text-neutral-200">
                        ပညာရေးအဖွဲ့အစည်းများ၊ သင်တန်းများ၊ ကျောင်းဝင်ခွင့်များနှင့် အခမ်းအနားများအကြောင်း အချက်အလက်များကို မျှဝေနိုင်သည့် School or University Website များ ရေးဆွဲပေးပါတယ်ရှင်။                      </div>
                    </div>
                  </div>
                </BoxReveal>
              </div>
              <div className="flex items-center justify-center shadow-md rounded-3xl border-2 border-[#6f4e37] hover:shadow-lg duration-300 hover:bg-[#6f4e37] lg:justify-center md:justify-start">
                <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                  <div className="relative group rounded-3xl overflow-hidden h-72 w-[20rem] lg:w-[18.5rem] xl:w-[21rem] block">
                    {/* <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-600"></div> */}
                    <div className="absolute w-full h-full top-0 left-0 p-2 flex flex-col items-center justify-center">
                      <img
                        src="https://morph-digital-mm.vercel.app/img/business.svg"
                        alt=""
                        className="group-hover:brightness-0 group-hover:invert size-28 -mt-3"
                      />
                      <div className="text-xl group-hover:text-white text-[#6f4e37] -mt-5">
                        Online Learning Platform
                      </div>
                      <div className="text-sm pt-5 leading-[1.8] pb-3 group-hover:text-neutral-200">
                        ကမ္ဘာတဝန်းလုံးမှ အင်တာနက်အသုံးပြုနိုင်သူတိုင်း ဝင်ရောက်လေ့လာနိုင်သည့် (ဥပမာ - Coursera, Udemy) Website များလို ပညာရေးအတွက် သင်တန်းများနှင့် သင်ခန်းစာများကို သင်ကြားပေးနိုင်သည့် Online Learning Platform များ ရေးဆွဲပေးပါတယ်ရှင်။                      </div>
                    </div>
                  </div>
                </BoxReveal>
              </div>
              {/* </div>
            <div className="flex items-center lg:items-center sm:items-start flex-col lg:flex-row w-full px-5 gap-8 sm:gap-5 justify-center"> */}
              <div className="flex items-center justify-center shadow-md rounded-3xl border-2 border-[#6f4e37] hover:shadow-lg duration-300 hover:bg-[#6f4e37] lg:justify-center md:justify-end">
                <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                  <div className="relative group rounded-3xl overflow-hidden h-72 w-[20rem] lg:w-[18.5rem] xl:w-[21rem] block">
                    {/* <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-600"></div> */}
                    <div className="absolute w-full h-full top-0 left-0 p-2 flex flex-col items-center justify-center">
                      <img
                        src="https://morph-digital-mm.vercel.app/img/chart.svg"
                        alt=""
                        className="group-hover:brightness-0 group-hover:invert size-20"
                      />
                      <div className="text-xl group-hover:text-white text-[#6f4e37]">
                        Nonprofit Organization Websites
                      </div>
                      <div className="text-sm pt-5 leading-[1.8] pb-3 group-hover:text-neutral-200">
                        Red Cross ကဲ့သို့ လှူဒါန်းမှုများကို လက်ခံကာ အဖွဲ့အစည်း၏ လှုပ်ရှားမှုများအကြောင်း အချက်အလက်များကို ဝေမျှပေးနိုင်သည့် Nonprofit Organization Websites များ ရေးဆွဲပေးပါတယ်ရှင်။                      </div>
                    </div>
                  </div>
                </BoxReveal>
              </div>
              <div className="flex items-center justify-center shadow-md rounded-3xl border-2 border-[#6f4e37] hover:shadow-lg duration-300 hover:bg-[#6f4e37] lg:justify-center md:justify-start">
                <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                  <div className="relative group rounded-3xl overflow-hidden h-72 w-[20rem] lg:w-[18.5rem] xl:w-[21rem] block">
                    {/* <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-600"></div> */}
                    <div className="absolute w-full h-full top-0 left-0 p-2 flex flex-col items-center justify-center">
                      <img
                        src="https://morph-digital-mm.vercel.app/img/marketing.svg"
                        alt=""
                        className="group-hover:brightness-0 group-hover:invert size-28 -mt-3"
                      />
                      <div className="text-xl group-hover:text-white text-[#6f4e37] -mt-5">
                        Promotional Page
                      </div>
                      <div className="text-sm pt-5 leading-[1.8] pb-3 group-hover:text-neutral-200">
                        Campaign များပြုလုပ်ရာတွင် လိုအပ်သော (ဥပမာ အချိုရည်ဗူးအခွံပါ Code နံပါတ်ကို သက်ဆိုင်ရာ Website တွင် ရိုက်ထည့်ပြီး ဆုမဲထုတ်ယူရသော) Landing Page များ ရေးဆွဲပေးပါတယ်ရှင်။                      </div>
                    </div>
                  </div>
                </BoxReveal>
              </div>
              <div className="flex items-center justify-center shadow-md rounded-3xl border-2 border-[#6f4e37] hover:shadow-lg duration-300 hover:bg-[#6f4e37] lg:justify-center md:justify-end">
                <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                  <div className="relative group rounded-3xl overflow-hidden h-72 w-[20rem] lg:w-[18.5rem] xl:w-[21rem] block">
                    {/* <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-600"></div> */}
                    <div className="absolute w-full h-full top-0 left-0 p-2 flex flex-col items-center justify-center">
                      <img
                        src="https://morph-digital-mm.vercel.app/img/business.svg"
                        alt=""
                        className="group-hover:brightness-0 group-hover:invert size-28 -mt-3"
                      />
                      <div className="text-xl group-hover:text-white text-[#6f4e37] -mt-5">
                        Web Application
                      </div>
                      <div className="text-sm pt-5 leading-[1.8] pb-3 group-hover:text-neutral-200">
                        Web Applications များ (ဥပမာ အီးမေးလ် ကို Website မှတဆင့် အသုံးပြုနိုင်သလို Application မှတဆင့်လဲ အသုံးပြုနိုင်သည့်) ဝဘ်ပလက်ဖောင်းများ ရေးဆွဲပေးပါတယ်ရှင်။                      </div>
                    </div>
                  </div>
                </BoxReveal>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute z-20 -bottom-24 right-1/2 lg:translate-x-1/2 w-full px-5">
          <div className="text-neutral-100 flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-8 p-8 lg:p-10 lg:items-center max-w-6xl mx-auto bg-amber-700 lg:rounded-3xl">
            <FaPhone className="size-16 border border-white p-3 rounded-full" />
            <div className="lg:col-span-3">
              <div className="uppercase text-sm font-semibold">
                Get a free consultation
              </div>
              <div className="font-semibold text-xl">09 786 063 014</div>
            </div>
            <div className="border-s lg:col-span-5 border-white ps-12">
              Lorem ipsum dolor sit amet consectetur adipisars error doloremque
              vitae harum? Animius incidunt vero consectetur debitis accusantium
              porro!
            </div>
            <div className="col-span-3 flex justify-end">
              <a
                href="tel:+959786063014"
                className="bg-white text-black rounded-full py-3 px-5 hover:bg-amber-700 hover:text-neutral-100 duration-300"
              >
                Make appointment
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="lg:h-32 bg-slate-100/50"></div> */}
      {/* <Team /> */}
      <Contact />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default page;
