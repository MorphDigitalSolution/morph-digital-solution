"use client"
import React, { useState } from "react";
import Contact from "@/app/components/Contact";
import Subscribe from "@/app/components/Subscribe";
import Team from "@/app/components/Team";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroHalf from "@/components/HeroHalf";
import BoxReveal from "@/components/magicui/box-reveal";
import { FaBusinessTime, FaPhone } from "react-icons/fa";

// Modal component to display service details
const Modal = ({ isOpen, onClose, service }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 p-5 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-xl">
        <h2 className="text-2xl font-semibold mb-4">{service.text}</h2>
        <ul className="mb-4">
          {service.description.map((desc, index) => (
            <li key={index} className="mb-2">
              {desc}
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 block ms-auto px-4 py-2 bg-[#6f4e37] text-white rounded-full hover:bg-[#8e6e4e] transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const services = [
  {
    imgSrc: "https://morph-digital-mm.vercel.app/img/chart.svg",
    text: "Company ဖွဲ့စည်းတည်ထောင်ခြင်းနှင့် မှတ်ပုံတင်ခြင်း",
    description: [
      "✦ စတင်အကြံပေးခြင်း (Initial Consultation)",
      "✦ စာရွက်စာတမ်းများ ပြင်ဆင်ခြင်း (Document Preparation)",
      "✦ အမည်မှတ်ပုံတင်ခြင်း (Name Registration) ",
      "✦ တင်သွင်းခြင်းနှင့် နောက်ဆက်တွဲ စစ်ဆေးခြင်း (Submission & Follow-Up)",
    ]
  },
  {
    imgSrc: "https://morph-digital-mm.vercel.app/img/marketing.svg",
    text: "SME Member Card လျှောက်ပေးခြင်း",
    description: [
      "အသေးစားနှင့် အလတ်စားစီးပွားရေး လုပ်ငန်းများအတွက် SME အဖွဲ့ဝင်ကတ် လျှောက်ထားခြင်းဖြင့် အခွန်လျှော့ချခြင်းနှင့် အရင်းအနှီးရရှိခြင်း အပြင် အကျိုးခံစားခွင့်များစွာ ရရှိနိုင်ပါသည်။",
    ]
  },
  {
    imgSrc: "https://morph-digital-mm.vercel.app/img/business.svg",
    text: "Online Sales မှတ်ပုံတင်လျှောက်ပေးခြင်း",
    description: [
      "အွန်လိုင်းတွင် လုပ်ကိုင်ရန် ရည်ရွယ်ပါက e-commerce စည်းမျဉ်းများနှင့် ကိုက်ညီအောင် အွန်လိုင်းရောင်းချမှုလိုင်စင်များလျှောက်ထားနိုင်ပါသည်။",
    ]
  },
  {
    imgSrc: "https://morph-digital-mm.vercel.app/img/business.svg",
    text: "ပို့ကုန်သွင်းကုန် လိုင်စင်/ ပါမစ်လျှောက်ပေးခြင်း",
    description: [
      "နိုင်ငံတကာကုန်သွယ်မှုတွင် ပါဝင်နေသော လုပ်ငန်းများအတွက် Import လိုင်စင်နှင့် Export လိုင်စင်များကို အခွန်နှင့် ကုန်သွယ်ရေး စည်းမျဉ်းများနှင့် အညီ ဆောင်ရွက်ပေးပါသည်။",
    ]
  },
  {
    imgSrc: "https://morph-digital-mm.vercel.app/img/chart.svg",
    text: "လုပ်ငန်းလိုင်စင်လျှောက်ပေးခြင်း",
    description: [
      "သင့်လုပ်ငန်းစဉ်၏ သက်ဆိုင်ရာ လိုင်စင်များရရှိစေရန် ဆောင်ရွက်ပေးပါသည်။",
    ]
  },
  {
    imgSrc: "https://morph-digital-mm.vercel.app/img/marketing.svg",
    text: "အခွန်အခွန် တင်သွင်းခြင်းဝန်ဆောင်မှု",
    description: [
      "သင့်လုပ်ငန်းအတွက် အခွန်မှတ်ပုံတင်ခြင်း၊ Taxpayer Identification Number (TIN) ရရှိစေရန်နှင့် အခွန်စည်းမျဉ်းများအတိုင်း ကိုက်ညီအောင် လုပ်ဆောင်ပေးပါသည်။",
    ]
  },
  {
    imgSrc: "https://morph-digital-mm.vercel.app/img/business.svg",
    text: "မူပိုင်ခွင့် မှတ်ပုံတင်ခြင်းဝန်ဆောင်မှု",
    description: [
      "✦ ကုန်အမှတ်တံဆိပ် မူပိုင်ခွင့်၊ ဝန်ဆောင်မှုတံဆိပ် မူပိုင်ခွင့် လျှောက်ပေးခြင်း",
      "✦ တီထွင်မှု မူပိုင်ခွင့် (သို) အသေးစားတီထွင်မှု မူပိုင်ခွင့် လျှောက်ပေးခြင်း",
      "✦ စက်မှုဒီဇိုင်း မူပိုင်ခွင့်လျှောက်ပေးခြင်း",
      "✦ စာပေနှင့် အနုပညာမူပိုင်ခွင့်လျှောက်ပေးခြင်းများ ဆောင်ရွက်ပေးပါသည်။",
    ]
  },
  {
    imgSrc: "https://morph-digital-mm.vercel.app/img/business.svg",
    text: "FDA လျှောက်ပေးခြင်း",
    description: [
      "အစားအသောက်၊ ဆေးဝါးသို့မဟုတ် အလှကုန်ထုတ်လုပ်မှုတွင် ပါဝင်သော လုပ်ငန်းများအတွက် FDA စည်းမျဉ်းများနှင့် ကိုက်ညီမှု ရရှိစေရန် ကူညီပေးပါသည်။ လိုအပ်သော လျှောက်လွှာများကို ပြင်ဆင်ပြီး သက်ဆိုင်ရာ လက်မှတ်များရအောင် ဆောင်ရွက်ပေးပါသည်။",
    ]
  },
  {
    imgSrc: "https://morph-digital-mm.vercel.app/img/chart.svg",
    text: "မြန်မာနိုင်ငံကူး လက်မှတ် (Passport) Online Booking လျှောက်ပေးခြင်း",
    description: [
      "ဝန်ထမ်းများ သို့မဟုတ် လုပ်ငန်းကိုယ်စားပြုသူများအတွက် ခရီးလမ်းကြောင်းများ စီစဉ်သွားလာနိုင်ရန် Passport Online Booking ယူပေးပါသည်။",
    ]
  },
  {
    imgSrc: "https://morph-digital-mm.vercel.app/img/marketing.svg",
    text: "ယဉ်မောင်းလိုင်စင်နှင့် မော်တော်ယဉ်မှတ်ပုံတင်ပေးခြင်း",
    description: [
      "✦ သင့်လုပ်ငန်းအတွက် ယာဉ်လိုအပ်ပါက ယာဉ်များမှတ်ပုံတင်ခြင်းနှင့် ဝန်ထမ်းများအတွက် ယာဉ်မောင်းလိုင်စင်ရရှိရန် ကူညီပေးပါသည်။",
      "✦ ယဉ်မောင်းလိုင်စင် သက်တမ်းတိုးရက်ချိန်းယူပေးခြင်း",
      "✦ ယဉ်စည်းကမ်း၊ လမ်းစည်းကမ်း သင်တန်း ရက်ချိန်းယူပေးခြင်း",
      "✦ မော်တော်ယဉ် မှတ်ပုံတင်ထားခြင်း ရှိ၊ မရှိ စစ်ဆေးရန်အတွက် ရက်ချိန်းယူပေးခြင်း",
      "✦ မော်တော်ယဉ် အခြားအပြောင်းအလဲအတွက် ရက်ချိန်းယူပေးခြင်း",
      "✦ မော်တော်ယဉ် နယ်ဝင်/ နယ်ထွက် ရက်ချိန်းယူပေးခြင်း",
    ]
  },
];


function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div>
      <Header />
      <HeroHalf>Business Registration Services</HeroHalf>
      <div className="relative bg-blend-difference bg-left bg-repeat-x">
        <div className="w-full h-full flex pb-10">
          <div className="max-w-7xl w-full pt-16 px-5 gap-y-8 lg:pb-20 grid sm:grid-cols-2 lg:grid-cols-4 text-center mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center lg:items-center sm:items-start flex-col lg:flex-row w-full px-2 gap-8 lg:gap-0 sm:gap-5 justify-center"
              >
                <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                  <div className="p-5">
                    <div
                      className="relative group rounded-3xl overflow-hidden border-[2px] border-[#6f4e37] shadow-md hover:bg-[#6f4e37] duration-300 hover:shadow-lg h-64 w-[80vw] sm:w-[40vw] lg:w-[20vw] block"
                      onClick={() => handleServiceClick(service)}
                    >
                      <div className="absolute cursor-pointer w-full h-full top-0 left-0 p-2 flex flex-col items-center justify-center">
                        <img
                          src={service.imgSrc}
                          alt=""
                          className="group-hover:brightness-0 group-hover:invert size-28 -mt-3"
                        />
                        <div className="text-xl group-hover:text-white text-[#6f4e37] -mt-5">
                          {service.text}
                        </div>
                        <div className="text-sm pt-2 underline text-blue-600">ပိုမိုဖတ်ရှုရန်</div>
                      </div>
                    </div>
                  </div>
                </BoxReveal>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        service={selectedService}
      />
      <Contact />
      <div className="h-10"></div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Page;