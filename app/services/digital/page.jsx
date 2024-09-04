"use client"
import React, { useState } from "react";
import Contact from "@/app/components/Contact";
import Subscribe from "@/app/components/Subscribe";
import Team from "@/app/components/Team";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroHalf from "@/components/HeroHalf";
import BoxReveal from "@/components/magicui/box-reveal";
import { m } from "framer-motion";

const services = [
  {
    title: "Digital PR Strategy or Plan",
    imgSrc: "https://morph-digital-mm.vercel.app/img/chart.svg",
    description: "မိမိရဲ့ Target Audience များကို Online ပေါ်မှ တဆင့် Brand Awareness လုပ်ရန်၊ Brand Visibility မြှင့်ရန်၊ Brand Reputation တည်ဆောက်ရန်အတွက် ",
    offerings: [
      "Content Marketing Plan",
      "Social Media Management Plan",
      "Online Reputation Management Plan",
      "Influencer Marketing Plan",
      "Crisis Communication Plan",
      "Data Analytics & Reporting"
    ]
  },
  {
    title: "Content Marketing Service",
    imgSrc: "https://morph-digital-mm.vercel.app/img/chart.svg",
    description: "မိမိရဲ့ Target Audience များကို မိမိ Brand အကြောင်း သိရှိရန်၊ Brand credibility တည်ဆောက်ရန်၊ Customer များနှင့် ရင်းနှီးမှု တည်ဆောက်ရန်၊ Search engine ranking တက်ရန်အတွက်",
    offerings: [
      "Video content များ",
      "Written content များ",
      "Visual content များ",
      "Audio content များ",
      "Script writing များ"
    ]
  },
  {
    title: "Boosting Service",
    imgSrc: "https://morph-digital-mm.vercel.app/img/chart.svg",
    description: "မိမိ brand ကို မိမိကြော်ငြာလိုတဲ့ Target Audience အလိုက် ရွေးချယ်ပြီး Boosting ကြော်ငြာ Run ပေးပါသည်။ Boosting ဝန်ဆောင်မှုကို",
    offerings: [
      "သက်သာသော Dollor Rate ဖြင့် ရယူနိုင်ခြင်း",
      "Boosting run ရန် မှန်ကန်သည့် platform ရွေးချယ်ပေးခြင်း",
      "ထိရောက်သည့် Display ကြော်ငြာများ၊ Search ကြော်ငြာများ၊ Video ကြော်ငြာများ ဖန်တီးပေးခြင်း",
      " Boosting Campign Performance Report ထုတ်ပေးခြင်း"
    ]
  },
  {
    title: "Graphic Design Service",
    imgSrc: "https://morph-digital-mm.vercel.app/img/chart.svg",
    description: "Providing various graphic design services.",
    offerings: [
      "Logo Design",
      "Name Card Design",
      "Social Media Post Design",
      "Printing Design (Flyer, Pamphlet (A4), X Stand, Vinyl, Poster, Backdrop)",
      "CV or Resume Form Design",
      "Presentation Design"
    ]
  },
  {
    title: "Social Media Management Service",
    imgSrc: "https://morph-digital-mm.vercel.app/img/chart.svg",
    description: "Social Media Platforms များ ဖြစ်သည့် Facebook Page, Facebook Acc, Instagram, LinkedIn, Telegram, Viber, Youtube, Tiktok နှင့် Wechat Acc များ ကိုင်ပေးပြီး ",
    offerings: [
      "Posting",
      "Commenting",
      "Message Replying",
      "Social Media Analytics & Reporting"
    ]
  },
  {
    title: "Influencer Marketing Service",
    imgSrc: "https://morph-digital-mm.vercel.app/img/chart.svg",
    description: "မိမိ Brand နဲ့ သင့်လျော်တဲ့ Influencer ကို",
    offerings: [
      "Choosing based on niche, audience demographics, engagement rate, and credibility",
      "Creating impactful Influencer Campaign Plans"
    ]
  },
  {
    title: "Video Marketing Service",
    imgSrc: "https://morph-digital-mm.vercel.app/img/chart.svg",
    description: "လူကြိုက်များတဲ့ Video ကြော်ငြာပုံစံနဲ့ မိမိ brand အကြောင်းကို သေချာ message ပေးနိုင်တဲ့ Video ကြော်ငြာ Campaign များ ရိုက်ကူးပေးပါသည်။ ",
    offerings: [
      "Webinars video",
      "Instructional or how-to video",
      "Company culture video",
      "Product demos video",
      "Testimonials video",
      "Humorous video",
      "Behind the scenes video",
      "Interview video",
      "Case studies video",
      "Script writing, Shooting, Editing, Post-production",
      "Video campaign performance report"
    ]
  },
  {
    title: "Online Reputation Management Service",
    imgSrc: "https://morph-digital-mm.vercel.app/img/chart.svg",
    description: "Monitoring and managing your brand's online reputation.",
    offerings: [
      "မိမိ Brand ကို Mention ခေါ်ထားသည့် သူများကို monitoring & tracking လုပ်ပြီး အကောင်းဆုံး ကိုင်တွယ်ဖြေရှင်းပေးခြင်း",
      "Negative reviews နှင့် Negative comment များကို အကောင်းဆုံး ကိုင်တွယ်ဖြေရှင်းပေးပြီး brand image ပြန်လည် တည်ဆောက်ပေးခြင်း",
      "Online ပေါ်တွင် ကောင်းသောဂုဏ်သတင်းနှင့် လူသိများထင်ရှားသည့် Brand အဖြစ် ဖန်တီးပေးခြင်း စသည့် ဝန်ဆောင်မှုများ ရယူနိုင်ပါသည်။"
    ]
  },
  {
    title: "Crisis Communication Plan Service",
    imgSrc: "https://morph-digital-mm.vercel.app/img/chart.svg",
    description: "ကိုယ့်လုပ်ငန်းမှာ ထင်မှတ်မထားတဲ့ Crisis တခုခုကြုံလာပြီဆိုရင်",
    offerings: [
      "လုပ်ငန်း ဂုဏ်သိက္ခာ မထိခိုက်အောင်",
      "အနှစ်နှစ်အလလ တည်ဆောက်ထားတဲ့ လုပ်ငန်းအပေါ် ယုံကြည်မှု မပျက်စီးအောင်",
      "Legal risk တွေကို လျော့ချနိုင်အောင်"
    ]
  },
  {
    title: "Data Analytics & Reporting Service",
    imgSrc: "https://morph-digital-mm.vercel.app/img/chart.svg",
    description: "Digital PR Campaigns လုပ်ဆောင်ရခြင်း ရည်ရွယ်ချက် အမျိုးမျိုး ရှိပါတယ်",
    offerings: [
      "Brand awareness ရချင်လိုလား",
      "Organization အပေါ် Online Reputation ကောင်းချင်လိုလား",
      "Lead generation အတွက်လား",
      "Industry Thought Leadership ဖြစ်ဖိုလား",
      "Crisis Management အတွက်လား",
      "",
      "Campaign တခုကို ဒီရည်ရွယ်ချက်တွေအတိုင်း လုပ်ဆောင်ပြီးရင် ",
      "Campaign ရဲ့ Impact က ဘယ်လိုအတိုင်းအတာအထိ အောင်မြင်မှုရှိခဲ့လဲ",
      "Audience engagement ဘယ်လိုရှိလဲ",
      "ငွေရင်းလိုက်တာနဲ့ ပြန်ရတာ ကာမိရဲ့လား",
      "ချမှတ်ထားတဲ့ KPIs တွေကို Hit ဖြစ်ရဲ့လား",
      "စတာတွေကို တိုင်းတာလိုရတဲ့ အချက်အလက်တွေနဲ့ တိုင်းတာပေးပြီး Campaign Performance report ထုတ်ပေးပါတယ်။ ",
      "",
      "Campaign Performance report တွင် နောက်တကြိမ် Campaign ကို ယခုထက် ပိုမိုကောင်းမွန်အောင် လုပ်ဆောင်နိုင်မည့် လက်တွေ့အသုံးချနိုင်သော Actionable recommendation plan များလဲ ပါဝင်ပါသည်။",
      "",
      "မိမိ Target Audience တွေက Email အသုံးပြုသူများ ဖြစ်ပါက Email Marketing ပြုလုပ်ခြင်းဖြင့် ကုန်ကျစရိတ် သက်သာစွာ ကြော်ငြာနိုင်ခြင်း",
    ]
  },
  {
    title: "Email Marketing Service",
    imgSrc: "https://morph-digital-mm.vercel.app/img/chart.svg",
    description: "Email Marketing ဝန်ဆောင်မှုတွင်",
    offerings: [
      "Email List စုပေးခြင်း",
      "Email campaign plan ရေးဆွဲပေးခြင်း",
      "Email campaign ပြုလုပ်ပေးခြင်း",
      "Email campaign performance report ထုတ်ပေးခြင်း"
    ]
  },
  {
    title: "SMS Marketing Service",
    imgSrc: "https://morph-digital-mm.vercel.app/img/chart.svg",
    description: "SMS Marketing ဝန်ဆောင်မှုတွင်",
    offerings: [
      "Short Message Service (SMS) List စုပေးခြင်း",
      "SMS campaign plan ရေးဆွဲပေးခြင်း",
      "SMS campaign ပြုလုပ်ပေးခြင်း",
      "SMS campaign performance report ထုတ်ပေးခြင်း"
    ]
  },
  {
    title: "Event Planning & Promotion Service",
    imgSrc: "https://morph-digital-mm.vercel.app/img/chart.svg",
    description: "Event ပွဲများမှ တဆင့် Positive brand image တည်ဆောက်လိုပါက၊  Customer relationship တည်ဆောက်လိုပါက၊ Leads generation ပြုလုပ်လိုပါက၊ အရောင်းမြှင့်တင်လိုပါက ဖော်ပြပါ Event ပွဲများ စီစဉ်ပေးပါသည်။",
    offerings: [
      "Product launches event များ",
      "Trade show event များ",
      "Conferences များ",
      "Charity events များ စီစဉ်ပေးပြီး",
      "အောင်မြင်တဲ့ Event ပွဲတခုဖြစ်အောင်",
      "Social media marketing, Email marketing, Influencer partnerships, PR, Collaborate Partner ရှာပေးခြင်း၊ Sponsorship ရှာပေးခြင်း၊ Event Performance Report ထုတ်ပေးခြင်း"
    ]
  },
  {
    title: "Digital Marketing Team Development & Training Service",
    imgSrc: "https://morph-digital-mm.vercel.app/img/chart.svg",
    description: "Digital Marketing Team Development & Training Serviceတွင် ",
    offerings: [
      "Digital Marketing In House Team ဖွဲစည်းပေးခြင်း",
      "Digital Marketing Training ပေးခြင်း",
      "Digital Marketing Latest Trends များအကြောင်း ပုံမှန် Sharing လုပ်ပေးခြင်း"
    ]
  },
  {
    title: "PowerPoint Presentation Designing & Writing Service",
    imgSrc: "https://morph-digital-mm.vercel.app/img/chart.svg",
    description: "Designing and writing PowerPoint presentations.",
    offerings: [
      "Power Point Presentation Design ဆွဲပေးခြင်း",
      "Power Point Presentation ရေးပေးခြင်း"
    ]
  },
  {
    title: "Chatbot Service",
    imgSrc: "https://morph-digital-mm.vercel.app/img/chart.svg",
    description: "Developing and managing chatbots for various platforms.",
    offerings: [
      "Messenger Chatbot",
      "Telegram Chatbot",
      "Viber Chatbot"
    ]
  },
  {
    title: "Company Profile Designing & Writing Service",
    imgSrc: "https://morph-digital-mm.vercel.app/img/chart.svg",
    description: "Designing and writing company profiles.",
    offerings: [
      "Company Profile Design ဆွဲပေးခြင်း",
      "Company Profile ရေးပေးခြင်း"
    ]
  }
];

const Modal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 bg-black p-5 bg-opacity-50 flex justify-center items-center pt-20">
      <div className="relative bg-white p-8 rounded-2xl max-w-4xl mx-auto">
        <button
          className="absolute top-1 right-4 text-black text-3xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4 text-[#6F4E37]">{service.title}</h2>
        <p>{service.description}</p>
        <ul className="mt-4 list -disc list-inside">
          {service.offerings.map((offering, index) => (
            <li className="leading-[1.4rem]" key={index}>{offering}</li>
          ))}
        </ul>
        <div className="pt-2">စသည့် ဝန်ဆောင်မှုများ ရယူနိုင်ပါသည်။</div>
      </div>
    </div>
  );
};

function Page() {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <div>
      <Header />
      <HeroHalf>Digital Marketing Services</HeroHalf>
      <div className="relative bg-blend-difference bg-left bg-repeat-x">
        <div className="w-full h-full flex pb-10">
          <div className="max-w-7xl w-full pt-16 px-5 gap-y-8 lg:pb-20 grid sm:grid-cols-2 lg:grid-cols-3 text-center mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center lg:items-center sm:items-end flex-col lg:flex-row w-full px-5 gap-8 sm:gap-5 lg:gap-0 justify-center"
                onClick={() => handleServiceClick(service)}
              >
                <div className="p-5">
                  <div className="shadow-md hover:shadow-lg rounded-3xl duration-300 border-2 border-[#6f4e37] hover:bg-[#6f4e37] cursor-pointer">
                    <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                      <div className="relative group rounded-3xl overflow-hidden h-64 w-72 md:w-[350px] lg:w-72 xl:w-96 block">
                        <div className="absolute w-full h-full top-0 left-0 p-2 flex flex-col items-center justify-center">
                          <img
                            src={service.imgSrc}
                            alt={service.title}
                            className="group-hover:brightness-0 group-hover:invert size-20"
                          />
                          <div className="text-xl group-hover:text-white text-[#6f4e37]">
                            {service.title}
                          </div>
                          <div className="text-sm pt-2 underline text-blue-600">ပိုမိုဖတ်ရှုရန်</div>
                        </div>
                      </div>
                    </BoxReveal>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Contact />
      <Subscribe />
      <Footer />

      {/* Modal Component */}
      <Modal service={selectedService} onClose={handleCloseModal} />
    </div>
  );
}

export default Page;