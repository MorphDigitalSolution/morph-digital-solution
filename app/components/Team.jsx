import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

function Team() {
  return (
    <div className="">
      <div className="">
        <div className="relative w-full">
          <div className="relative bg-[#6f4e378e] backdrop-blur-[2px] lg:px-20 text-center py-20 z-10 flex flex-col items-center justify-center">
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="pb-2">
                <TitlePillow>Our Team</TitlePillow>
              </div>
            </BoxReveal>
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="text-4xl lg:text-5xl font-extrabold py-2 text-neutral-100">
                <span className="text-amber-600">Team</span> Members
              </div>
            </BoxReveal>
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="max-w-xl mx-auto text-neutral-200/80 leading-[1.8] px-5">
                Members များသည် ကျွမ်းကျင်မှုများနှင့် အတွေ့အကြုံများ အပြည့်အဝ
                ရှိပြီး လုပ်ငန်းများ​၏ ဒီဂျစ်တယ် ပြောင်းလဲမှုများကို လက်တွေ့ကျကျ
                ပြုလုပ်ဆောင်ရွက်ပေးနေပါတယ်
              </div>
            </BoxReveal>
          </div>
          <div className="absolute w-full z-0 h-full top-0 left-0">
            <img loading="lazy" 
              src="img/morphTeam.png"
              alt=""
              className="object-cover w-full h-full brightness-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
