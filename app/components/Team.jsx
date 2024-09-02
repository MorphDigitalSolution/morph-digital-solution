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
          {/* <div className="bg-white shadow-xl relative rounded-3xl overflow-hidden">
              <img src="https://morph-digital-mm.vercel.app/img/member1.png" alt="" className="w-full aspect-square object-cover object-top" />
              <div className="p-5 relative text-center">
                <div className="absolute -top-10 left-0 px-5 w-full">
                  <div className="bg-amber-700 h-20 rounded-2xl flex flex-col items-center justify-center text-neutral-100">
                    <div className="font-semibold text-lg">Lin Thandar</div>
                    <div className="text-sm font-semibold">Founder, CEO</div>
                  </div>
                </div>
                <div className="flex justify-center pt-9 gap-3 text-3xl">
                  <a
                    href=""
                    className="hover:bg-amber-700 rounded-full border border-neutral-400 hover:text-neutral-100 duration-300 hover:scale-110 text-blue-950 hover:border-amber-900"
                  >
                    <FaFacebook className="p-[0.35rem]" />
                  </a>
                  <a
                    href=""
                    className="hover:bg-amber-700 rounded-full border border-neutral-400 hover:text-neutral-100 duration-300 hover:scale-110 text-blue-950 hover:border-amber-900"
                  >
                    <FaLinkedin className="p-[0.35rem]" />
                  </a>
                  <a
                    href=""
                    className="hover:bg-amber-700 rounded-full border border-neutral-400 hover:text-neutral-100 duration-300 hover:scale-110 text-blue-950 hover:border-amber-900"
                  >
                    <FaTelegram className="p-[0.35rem]" />
                  </a>
                  <a
                    href=""
                    className="hover:bg-amber-700 rounded-full border border-neutral-400 hover:text-neutral-100 duration-300 hover:scale-110 text-blue-950 hover:border-amber-900"
                  >
                    <FaTwitter className="p-[0.35rem]" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-xl relative rounded-3xl overflow-hidden">
              <img src="https://morph-digital-mm.vercel.app/img/woman.png" alt="" className="w-full aspect-square object-cover object-top" />
              <div className="p-5 relative text-center">
                <div className="absolute -top-10 left-0 px-5 w-full">
                  <div className="bg-amber-700 h-20 rounded-2xl flex flex-col items-center justify-center text-neutral-100">
                    <div className="font-semibold text-lg">Aye Chan</div>
                    <div className="text-sm font-semibold">
                      Chief Operating Officer
                    </div>
                  </div>
                </div>
                <div className="flex justify-center pt-9 gap-3 text-3xl">
                  <a
                    href=""
                    className="hover:bg-amber-700 rounded-full border border-neutral-400 hover:text-neutral-100 duration-300 hover:scale-110 text-blue-950 hover:border-amber-900"
                  >
                    <FaFacebook className="p-[0.35rem]" />
                  </a>
                  <a
                    href=""
                    className="hover:bg-amber-700 rounded-full border border-neutral-400 hover:text-neutral-100 duration-300 hover:scale-110 text-blue-950 hover:border-amber-900"
                  >
                    <FaLinkedin className="p-[0.35rem]" />
                  </a>
                  <a
                    href=""
                    className="hover:bg-amber-700 rounded-full border border-neutral-400 hover:text-neutral-100 duration-300 hover:scale-110 text-blue-950 hover:border-amber-900"
                  >
                    <FaTelegram className="p-[0.35rem]" />
                  </a>
                  <a
                    href=""
                    className="hover:bg-amber-700 rounded-full border border-neutral-400 hover:text-neutral-100 duration-300 hover:scale-110 text-blue-950 hover:border-amber-900"
                  >
                    <FaTwitter className="p-[0.35rem]" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-xl relative rounded-3xl overflow-hidden">
              <img src="https://morph-digital-mm.vercel.app/img/member3.png" alt="" className="w-full aspect-square object-cover object-top" />
              <div className="p-5 relative text-center">
                <div className="absolute -top-10 left-0 px-5 w-full">
                  <div className="bg-amber-700 h-20 rounded-2xl flex flex-col items-center justify-center text-neutral-100">
                    <div className="font-semibold text-lg">Thiri</div>
                    <div className="text-sm font-semibold">
                      Head of Digital Marketing
                    </div>
                  </div>
                </div>
                <div className="flex justify-center pt-9 gap-3 text-3xl">
                  <a
                    href=""
                    className="hover:bg-amber-700 rounded-full border border-neutral-400 hover:text-neutral-100 duration-300 hover:scale-110 text-blue-950 hover:border-amber-900"
                  >
                    <FaFacebook className="p-[0.35rem]" />
                  </a>
                  <a
                    href=""
                    className="hover:bg-amber-700 rounded-full border border-neutral-400 hover:text-neutral-100 duration-300 hover:scale-110 text-blue-950 hover:border-amber-900"
                  >
                    <FaLinkedin className="p-[0.35rem]" />
                  </a>
                  <a
                    href=""
                    className="hover:bg-amber-700 rounded-full border border-neutral-400 hover:text-neutral-100 duration-300 hover:scale-110 text-blue-950 hover:border-amber-900"
                  >
                    <FaTelegram className="p-[0.35rem]" />
                  </a>
                  <a
                    href=""
                    className="hover:bg-amber-700 rounded-full border border-neutral-400 hover:text-neutral-100 duration-300 hover:scale-110 text-blue-950 hover:border-amber-900"
                  >
                    <FaTwitter className="p-[0.35rem]" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-xl relative rounded-3xl overflow-hidden">
              <img src="https://morph-digital-mm.vercel.app/img/member4.png" alt="" className="w-full aspect-square object-cover object-top" />
              <div className="p-5 relative text-center">
                <div className="absolute -top-10 left-0 px-5 w-full">
                  <div className="bg-amber-700 h-20 rounded-2xl flex flex-col items-center justify-center text-neutral-100">
                    <div className="font-semibold text-lg">Htet Myat</div>
                    <div className="text-sm font-semibold">
                      Lead Web Developer
                    </div>
                  </div>
                </div>
                <div className="flex justify-center pt-9 gap-3 text-3xl">
                  <a
                    href=""
                    className="hover:bg-amber-700 rounded-full border border-neutral-400 hover:text-neutral-100 duration-300 hover:scale-110 text-blue-950 hover:border-amber-900"
                  >
                    <FaFacebook className="p-[0.35rem]" />
                  </a>
                  <a
                    href=""
                    className="hover:bg-amber-700 rounded-full border border-neutral-400 hover:text-neutral-100 duration-300 hover:scale-110 text-blue-950 hover:border-amber-900"
                  >
                    <FaLinkedin className="p-[0.35rem]" />
                  </a>
                  <a
                    href=""
                    className="hover:bg-amber-700 rounded-full border border-neutral-400 hover:text-neutral-100 duration-300 hover:scale-110 text-blue-950 hover:border-amber-900"
                  >
                    <FaTelegram className="p-[0.35rem]" />
                  </a>
                  <a
                    href=""
                    className="hover:bg-amber-700 rounded-full border border-neutral-400 hover:text-neutral-100 duration-300 hover:scale-110 text-blue-950 hover:border-amber-900"
                  >
                    <FaTwitter className="p-[0.35rem]" />
                  </a>
                </div>
              </div>
              </div> */}
          <div className="relative bg-neutral-900/60 backdrop-blur-[2px] lg:px-20 text-center py-20 z-10 flex flex-col items-center justify-center">
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="pb-2">
                <TitlePillow>Our Team</TitlePillow>
              </div>
            </BoxReveal>
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="text-4xl lg:text-5xl font-extrabold py-2 text-neutral-100">
                <span className="text-amber-700">Team</span> Members
              </div>
            </BoxReveal>
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="max-w-xl mx-auto text-neutral-200/80 leading-[1.8]">
                Members များသည် ကျွမ်းကျင်မှုများနှင့် အတွေ့အကြုံများ အပြည့်အဝ
                ရှိပြီး လုပ်ငန်းများ​၏ ဒီဂျစ်တယ် ပြောင်းလဲမှုများကို လက်တွေ့ကျကျ
                ပြုလုပ်ဆောင်ရွက်ပေးနေပါသည်။
              </div>
            </BoxReveal>
          </div>
          <div className="absolute w-full z-0 h-full top-0 left-0">
            <img
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
