import Contact from "@/app/components/Contact";
import Subscribe from "@/app/components/Subscribe";
import Team from "@/app/components/Team";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroHalf from "@/components/HeroHalf";
import BoxReveal from "@/components/magicui/box-reveal";
import React from "react";

const services = [
  {
    title: "Blog Website",
    description:
      "ကိုယ်ပိုင် အတွေးအခေါ်များ၊ ထင်မြင်ချက်များ (သို့) အတွေ့အကြုံများကို မျှဝေရာတွင် အသုံးပြုကြပြီး Content အသစ်များကို ပုံမှန်တင်နိုင်သည့် Blog Website များ ရေးဆွဲဆပေးပါတယ်ရှင်။",
    imgSrc: "https://morph-digital-mm.vercel.app/img/chart.svg",
    // justifyContent: "md:justify-end",
  },
  {
    title: "Portfolio Website",
    description:
      "အနုပညာရှင်များ၊ ဒီဇိုင်နာများနှင့် Freelancers များ၏ လက်ရာများ၊ ကျွမ်းကျင်မှုများနှင့် အောင်မြင်မှုများကို ပြသလိုသည့် Portfolio Website များ ရေးဆွဲပေးပါတယ်ရှင်။",
    imgSrc: "https://morph-digital-mm.vercel.app/img/marketing.svg",
    // justifyContent: "md:justify-start",
  },
  {
    title: "Business / Corporate Website",
    description:
      "လုပ်ငန်းတစ်ခု (သို့) ကုမ္ပဏီတစ်ခု၏ ထုတ်ကုန်များ၊ ဝန်ဆောင်မှုများ၊ ရည်မှန်းချက်များနှင့် ဆက်သွယ်ရန် အချက်အလက်များကို ထုတ်ဖော်ပြသနိုင်သည့် Business Website / Corporate Website များ ရေးဆွဲပေးပါတယ်ရှင်။",
    imgSrc: "https://morph-digital-mm.vercel.app/img/business.svg",
    // justifyContent: "md:justify-end",
  },
  {
    title: "E-commerce Website",
    description:
      "အွန်လိုင်းပေါ်မှတဆင့် ထုတ်ကုန်များ (သို့) ဝန်ဆောင်မှုများကို ရောင်းဝယ်နိုင်သည့် (ဥပမာ - Amazon, Shopify) တို့လို E-commerce Website များ ရေးဆွဲပေးပါတယ်ရှင်။",
    imgSrc: "https://morph-digital-mm.vercel.app/img/chart.svg",
    // justifyContent: "md:justify-start",
  },
  {
    title: "School or University Website",
    description:
      "ပညာရေးအဖွဲ့အစည်းများ၊ သင်တန်းများ၊ ကျောင်းဝင်ခွင့်များနှင့် အခမ်းအနားများအကြောင်း အချက်အလက်များကို မျှဝေနိုင်သည့် School or University Website များ ရေးဆွဲပေးပါတယ်ရှင်။",
    imgSrc: "https://morph-digital-mm.vercel.app/img/marketing.svg",
    // justifyContent: "md:justify-end",
  },
  {
    title: "Online Learning Platform",
    description:
      "ကမ္ဘာတဝန်းလုံးမှ အင်တာနက်အသုံးပြုနိုင်သူတိုင်း ဝင်ရောက်လေ့လာနိုင်သည့် (ဥပမာ - Coursera, Udemy) Website များလို ပညာရေးအတွက် သင်တန်းများနှင့် သင်ခန်းစာများကို သင်ကြားပေးနိုင်သည့် Online Learning Platform များ ရေးဆွဲပေးပါတယ်ရှင်။",
    imgSrc: "https://morph-digital-mm.vercel.app/img/business.svg",
    // justifyContent: "md:justify-start",
  },
  {
    title: "Nonprofit Organization Websites",
    description:
      "Red Cross ကဲ့သို့ လှူဒါန်းမှုများကို လက်ခံကာ အဖွဲ့အစည်း၏ လှုပ်ရှားမှုများအကြောင်း အချက်အလက်များကို ဝေမျှပေးနိုင်သည့် Nonprofit Organization Websites များ ရေးဆွဲပေးပါတယ်ရှင်။",
    imgSrc: "https://morph-digital-mm.vercel.app/img/chart.svg",
    // justifyContent: "md:justify-end",
  },
  {
    title: "Promotional Page",
    description:
      "Campaign များပြုလုပ်ရာတွင် လိုအပ်သော (ဥပမာ အချိုရည်ဗူးအခွံပါ Code နံပါတ်ကို သက်ဆိုင်ရာ Website တွင် ရိုက်ထည့်ပြီး ဆုမဲထုတ်ယူရသော) Landing Page များ ရေးဆွဲပေးပါတယ်ရှင်။",
    imgSrc: "https://morph-digital-mm.vercel.app/img/marketing.svg",
    // justifyContent: "md:justify-start",
  },
  {
    title: "Web Application",
    description:
      "Web Applications များ (ဥပမာ အီးမေးလ် ကို Website မှတဆင့် အသုံးပြုနိုင်သလို Application မှတဆင့်လဲ အသုံးပြုနိုင်သည့်) ဝဘ်ပလက်ဖောင်းများ ရေးဆွဲပေးပါတယ်ရှင်။",
    imgSrc: "https://morph-digital-mm.vercel.app/img/business.svg",
    // justifyContent: "md:justify-end",
  },
];

function page() {
  return (
    <div>
      <Header />
      <HeroHalf>Web Development Services</HeroHalf>
      <div className="relative bg-blend-difference bg-left bg-repeat-x bg -[url(https://demo.bosathemes.com/agence/wp-content/uploads/sites/35/2022/11/agency-img3.png)] bg -neutral-800">
        <div className="w-full h-full bg- neutral-800/90 flex">
          <div className="max-w-6xl w-full pt-16 lg:pb-20 text-center mx-auto text -neutral-100">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center w-full px-5 gap-10">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center shadow-md rounded-3xl border-2 border-[#6f4e37] hover:shadow-lg duration-300 hover:bg-[#6f4e37]`}
                >
                  <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                    <div className="relative group rounded-3xl overflow-hidden h-72 w-[20rem] lg:w-[18.5rem] xl:w-[21rem] block">
                      <div className="absolute w-full h-full top-0 left-0 p-2 flex flex-col items-center justify-center">
                        <img
                          src={service.imgSrc}
                          alt={service.title}
                          className="group-hover:brightness-0 group-hover:invert size-20"
                        />
                        <div className="text-xl group-hover:text-white text-[#6f4e37]">
                          {service.title}
                        </div>
                        <div className="text-sm pt-5 leading-[1.8] pb-3 group-hover:text-neutral-200">
                          {service.description}
                        </div>
                      </div>
                    </div>
                  </BoxReveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#6F4E37] text-3xl lg:text-4xl font-semibold text-center pb-8">Other Services</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full p-5 my-10 lg:mt-0 gap-8 items-center justify-center">
        <a
          href="/services/digital"
          className="border-[3px] border-[#6F4E37b1] text-[#6F4E37b1] hover:text-white/80 hover:bg-[#6F4E37] duration-300 bg-white shadow-xl relative group rounded-3xl overflow-hidden h-80 lg:h-[420px] xl:h-[320px] block w-full"
        >
          <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-800 opacity-0"></div>
          <div className="absolute w-full h-full top-0 left-0 p-5 bg- black/30 flex flex-col items-center text-center justify-center">
            <img
              src="https://morph-digital-mm.vercel.app/img/marketing.svg"
              alt=""
              className="size-24 group-hover:brightness-0 group-hover:invert"
            />
            <div className="text-2xl group-hover:text-white text-[#6f4e37] font-semibold">
              Digital Marketing
            </div>
            <div className="text-sm pt-5 text-left pb-3 leading-[1.9]">
              Morph Strategy ဖြင့် သင့် Brand ကို သုံးစွဲမည့် Customer များထံ
              သင့် Brand အကြောင်းသိရှိစေရန်နှင့် သင့် Brand တန်ဖိုး
              မြှင့်တက်စေရန်အတွက် ဒီဂျစ်တယ်မားကက်တင်း
              ဝန်ဆောင်မှုများရယူနိုင်ပါတယ်။ Content ဖန်တီးခြင်း၊ Social Media
              စီမံခန့်ခွဲမှု၊ Email Marketing နှင့် Data Analytics များအထိ
              ဝန်ဆောင်မှုပေးပါတယ်။
            </div>
          </div>
        </a>
        <a
          href="/services/business"
          className="border-[3px] border-[#6F4E37b1] text-[#6F4E37b1] hover:text-white/80 hover:bg-[#6F4E37] duration-300 bg-white shadow-xl relative group rounded-3xl overflow-hidden h-80 lg:h-[420px] xl:h-[320px] block w-full"
        >
          <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-800 opacity-0"></div>
          <div className="absolute w-full h-full top-0 left-0 p-5 bg- black/30 flex flex-col items-center text-center justify-center">
            <img
              src="https://morph-digital-mm.vercel.app/img/business.svg"
              alt=""
              className="size-24 group-hover:brightness-0 group-hover:invert"
            />
            <div className="text-2xl group-hover:text-white text-[#6f4e37] font-semibold">
              Business Registration
            </div>
            <div className="text-sm pt-5 text-left pb-3 leading-[1.9]">
              စီးပွားရေး စတင်ခြင်းနှင့် စီမံခန့်ခွဲခြင်းလုပ်ငန်းစဉ်များ
              တရားဝင်လည်ပတ်နိုင်ရန်အတွက် Morph ​၏ Business Registration
              Specialist နှင့်အခမဲ့ တိုင်ပင်ဆွေးနွေးနိုင်ပါတယ်။
              ကုမ္ပဏီဖွဲ့စည်းခြင်း၊ လိုင်စင်လျှောက်ထားမှုများ၊
              အခွန်ပြန်လည်ပေးဆောင်မှု၊ မူပိုင်ခွင့်မှတ်ပုံတင်မှုများနှင့်
              အခြားသောစီးပွားရေးမှတ်ပုံတင်ခြင်း ဝန်ဆောင်မှုများကို ကျွန်ုပ်တို့
              ဆောင်ရွက်ပေးပါတယ်။
            </div>
          </div>
        </a>
      </div>
      {/* <Team /> */}
      <Contact />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default page;
