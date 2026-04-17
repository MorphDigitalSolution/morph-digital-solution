import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import React from "react";
import { FaPhone } from "react-icons/fa";

function Services() {
  return (
    <>
      <div className="relative text- neutral-300 bg-left bg- slate-50 bg-repeat-x bg-[url(https://demo.bosathemes.com/agence/wp-content/uploads/sites/35/2022/11/agency-img3.png)]">
        <div className="w-full h-full pb-24 bg-white/80 bg- neutral-800/90">
          <div className="max-w- xl flex flex-col items-center justify-center mx-auto text- white">
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="py-2">
                <TitlePillow>Service List</TitlePillow>
              </div>
            </BoxReveal>
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="text-3xl lg:text-5xl font-extrabold p-5 text-[#6F4E37]">
                <span className="text-amber-600">Services </span>
                we can help you with!
              </div>
            </BoxReveal>
            {/* <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="max-w-4xl px-4">
                Explore a range of tailored services designed to meet your
                needs. From innovative digital strategies to comprehensive
                support, we’re here to help you succeed.
              </div>
            </BoxReveal> */}
            <div className="flex flex-col lg:flex-row w-full mt-5 md:gap-0 xl:gap-0 items-center justify-center">
              <BoxReveal
                className={"w-full"}
                boxColor={"#b4530900"}
                duration={0.5}
              >
                <div className="py-8 px-4 w-full">
                  <a
                    href="/services/web"
                    className=" border-[3px] border-[#6F4E37b1] text-[#6F4E37b1] hover:text-white/80 hover:bg-[#6F4E37] duration-300 bg-white bg- neutral-950/30 shadow-xl relative group rounded-3xl overflow-hidden h-[440px] md:h-96 w-full block"
                  >
                    <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-800 opacity-0"></div>
                    <div className="absolute w-full h-full top-0 left-0 p-5 bg- black/30 flex flex-col items-center text-center justify-center">
                      <img
                        loading="lazy"
                        src="img/chart.svg"
                        alt=""
                        className="size-24 group-hover:brightness-0 group-hover:invert pt-5"
                      />
                      <div className="text-2xl group-hover:text-white text-[#6F4E37] font-semibold">
                        Website Development
                      </div>
                      <div className="text-sm pt-5 text-left pb-3">
                        သင့် Brand ကို ကိုယ်စားပြုပြီး သင့် Customer တွေကို
                        ဆွဲဆောင်နိုင်မည့် ဝဘ်ဆိုက်များ တည်ဆောက်ပေးပါတယ်။ Blog
                        ဝဘ်ဆိုက်များ၊ E Commerce Platform များ၊ Corporate
                        ဝဘ်ဆိုက်များနှင့် Web Application များအထိ
                        အသုံးပြုရလွယ်ကူပြီး ဖုန်းနှင့်ကြည့်ကြည့်၊ Tablet
                        နှင့်ကြည့်ကြည့်၊ Computer နှင့်ကြည့်ကြည့်
                        ကြည့်ရလွယ်ကူသည့်၊ ဆွဲဆောင်မှုရှိသည့် ဝဘ်ဆိုက်များကို
                        ဖန်တီးပေးပါတယ်။
                      </div>
                    </div>
                  </a>
                </div>
              </BoxReveal>
              <BoxReveal
                className={"w-full"}
                boxColor={"#b4530900"}
                duration={0.5}
              >
                <div className="py-8 px-4 w-full">
                  <a
                    href="/services/digital"
                    className=" border-[3px] border-[#6F4E37b1] text-[#6F4E37b1] hover:text-white/80 hover:bg-[#6F4E37] duration-300 bg-white bg- neutral-950/30 shadow-xl relative group rounded-3xl overflow-hidden h-[440px] md:h-96 w-full block"
                  >
                    <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-800 opacity-0"></div>
                    <div className="absolute w-full h-full top-0 left-0 p-5 bg- black/30 flex flex-col items-center text-center justify-center">
                      <img
                        loading="lazy"
                        src="img/marketing.svg"
                        alt=""
                        className="size-24 group-hover:brightness-0 group-hover:invert"
                      />
                      <div className="text-2xl group-hover:text-white text-[#6F4E37] font-semibold">
                        Digital Marketing
                      </div>
                      <div className="text-sm pt-5 text-left pb-3">
                        Morph Strategy ဖြင့် သင့် Brand ကို သုံးစွဲမည့် Customer
                        များထံ သင့် Brand အကြောင်းသိရှိစေရန်နှင့် သင့် Brand
                        တန်ဖိုး မြှင့်တက်စေရန်အတွက် ဒီဂျစ်တယ်မားကက်တင်း
                        ဝန်ဆောင်မှုများရယူနိုင်ပါတယ်။ Content ဖန်တီးခြင်း၊
                        Social Media စီမံခန့်ခွဲမှု၊ Email Marketing နှင့် Data
                        Analytics များအထိ ဝန်ဆောင်မှုပေးပါတယ်။
                      </div>
                    </div>
                  </a>
                </div>
              </BoxReveal>
              <BoxReveal
                className={"w-full"}
                boxColor={"#b4530900"}
                duration={0.5}
              >
                <div className="py-8 px-4 w-full">
                  <a
                    href="/services/business"
                    className=" border-[3px] border-[#6F4E37b1] text-[#6F4E37b1] hover:text-white/80 hover:bg-[#6F4E37] duration-300 bg-white bg- neutral-950/30 shadow-xl relative group rounded-3xl overflow-hidden h-[440px] md:h-96 w-full block"
                  >
                    <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-800 opacity-0"></div>
                    <div className="absolute w-full h-full top-0 left-0 p-5 bg- black/30 flex flex-col items-center text-center justify-center">
                      <img
                        loading="lazy"
                        src="img/business.svg"
                        alt=""
                        className="size-24 group-hover:brightness-0 group-hover:invert"
                      />
                      <div className="text-2xl group-hover:text-white text-[#6F4E37] font-semibold">
                        Business Registration
                      </div>
                      <div className="text-sm pt-5 text-left pb-3">
                        စီးပွားရေး စတင်ခြင်းနှင့်
                        စီမံခန့်ခွဲခြင်းလုပ်ငန်းစဉ်များ
                        တရားဝင်လည်ပတ်နိုင်ရန်အတွက် Morph ​၏ Business
                        Registration Consultant နှင့်အခမဲ့
                        တိုင်ပင်ဆွေးနွေးနိုင်ပါတယ်။ ကုမ္ပဏီဖွဲ့စည်းခြင်း၊
                        လိုင်စင်လျှောက်ထားမှုများ၊ အခွန်ပြန်လည်ပေးဆောင်မှု၊
                        မူပိုင်ခွင့်မှတ်ပုံတင်မှုများနှင့်
                        အခြားသောစီးပွားရေးမှတ်ပုံတင်ခြင်း ဝန်ဆောင်မှုများကို
                        ကျွန်ုပ်တို့ ဆောင်ရွက်ပေးပါတယ်။
                      </div>
                    </div>
                  </a>
                </div>
              </BoxReveal>
              {/* <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <a
                  href="/services/digital"
                  className="relative group rounded-3xl overflow-hidden h-[440px] md:h-96 w-full block"
                >
                  <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-800 opacity-0"></div>
                  <div className="absolute w-full h-full top-0 left-0 p-5 bg- black/30 flex flex-col items-center justify-center">
                    <img loading="lazy" 
                      src="img/marketing.svg"
                      alt=""
                      className="size-32 -mt-3"
                    />
                    <div className="text-2xl group-hover:text-white text-[#6F4E37] font-semibold -mt-5">
                      Digital Marketing
                    </div>
                  </div>
                </a>
              </BoxReveal>
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <a
                  href="/services/business"
                  className="relative group rounded-3xl overflow-hidden h-[440px] md:h-96 w-full block"
                >
                  <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-800 opacity-0"></div>
                  <div className="absolute w-full h-full top-0 left-0 p-5 bg- black/30 flex flex-col items-center justify-center">
                    <img loading="lazy" 
                      src="img/business.svg"
                      alt=""
                      className="size-32 -mt-3"
                    />
                    <div className="text-2xl group-hover:text-white text-[#6F4E37] font-semibold -mt-5">
                      Business Registration
                    </div>
                  </div>
                </a>
              </BoxReveal> */}
            </div>
          </div>
        </div>
        <div className="lg:absolute z-20 -bottom-24 right-1/2 lg:translate-x-1/2 w-full px-5">
          <div className="text-neutral-100 flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-8 p-8 lg:p-10 lg:items-center max-w-7xl mx-auto bg-amber-700 lg:rounded-3xl">
            <FaPhone className="size-16 border border-white p-3 rounded-full" />
            <div className="lg:col-span-3">
              <div className="uppercase text-sm font-semibold">
                Get a free consultation
              </div>
              <div className="font-semibold text-xl">09 940 004 046</div>
            </div>
            <div className="border-s lg:col-span-5 border-white ps-12">
              Ready to elevate your digital presence? Schedule a consultation to
              explore customized strategies and solutions designed to bring your
              vision to life.
            </div>
            <div className="col-span-3 flex justify-end">
              <a
                href="tel:+959940004046"
                className="bg-white text-black rounded-full py-3 px-5 hover:bg-amber-800 hover:text-neutral-100 duration-300"
              >
                Make appointment
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg :h-32 bg-neutral -800"></div>
    </>
  );
}

export default Services;
