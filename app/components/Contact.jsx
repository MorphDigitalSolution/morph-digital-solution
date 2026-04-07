import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import { RiPagesLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import { LiaAwardSolid } from "react-icons/lia";
import { MdReviews } from "react-icons/md";
import NumberTicker from "@/components/magicui/number-ticker";
import MessageForm from "@/components/MessageForm";
import { FiPhoneCall } from "react-icons/fi";
import { LucideMailOpen } from "lucide-react";

function  Contact() {
  return (
    <div className="relative">
      <img
        src="https://morph-digital-mm.vercel.app/img/whiteOffice.png"
        alt=""
        className="absolute in vert top-0 left-0 w-full h-full object-cover object-right"
      />
      <div className="relative bg-white/50 text-[#6F4E37] w-full h-full bg -neutral-800/80 text- neutral-100 py-10 lg:pt-28 lg:pb-48">
        <div className="grid lg:grid-cols-2 max-w-7xl lg:px-20 mx-auto h-full p-8">
          <div className="">
            <div className="max-w-md">
              <BoxReveal boxColor={"#b45309"} duration={0.5}>
                <div className="pb-2">
                  <TitlePillow>Contact us</TitlePillow>
                </div>
              </BoxReveal>
              <BoxReveal boxColor={"#b45309"} duration={0.5}>
                <div className="text-4xl lg:text-5xl font-extrabold py-2 text-[#6F4E37]">
                  <span className="text-amber-600">Contact </span> & Join
                  Together
                </div>
              </BoxReveal>
              <BoxReveal boxColor={"#b45309"} duration={0.5}>
                <div className="max-w-[25rem] mx-auto text-[#6f4e37b1] py-2">
                  Morph ​၏ ဝန်ဆောင်မှုများအကြောင်း အချက်အလက်များပိုမိုလိုအပ်ပါက
                  (သို့မဟုတ်) မေးခွန်းများရှိပါက (သို့မဟုတ်)
                  အစည်းအဝေးချိန်းဆိုလိုပါက အောက်ပါ ဖောင်ကို
                  ဖြည့်ပေးနိုင်ပါတယ်ရှင်။ Morph Team မှ
                  ချက်ချင်းဆက်သွယ်ပေးပါမယ်ရှင့်။
                </div>
              </BoxReveal>
              <BoxReveal boxColor={"#b45309"} duration={0.5}>
                <div className="flex gap-4 w-72 py-4">
                  <div className="">
                    <div className="flex items-center justify-center bg-neutral-700 p-5 aspect-square rounded-3xl text-neutral-100">
                      <IoLocationOutline className="text-3xl" />
                    </div>
                  </div>
                  <div className=" text-black/60">
                    <div className="font-semibold text-[#6f4e37] text-lg">
                      Office Address :
                    </div>
                    <div className="text- neutral-600">
                      65 လမ်း၊ 105 x 106 လမ်း၊ ချမ်းမြသာစည်မြို့နယ်၊ မန္တလေး
                    </div>
                  </div>
                </div>
              </BoxReveal>
              <BoxReveal boxColor={"#b45309"} duration={0.5}>
                <div className="flex gap-4 w-72 py-4">
                  <div className="">
                    <div className="flex items-center justify-center bg-neutral-700 p-5 aspect-square rounded-3xl text-neutral-100">
                      <FiPhoneCall className="text-3xl pt-1" />
                    </div>
                  </div>
                  <div className=" text-black/60">
                    <div className="font-semibold text-[#6f4e37] text-lg">Phone Number :</div>
                    <div className="text- neutral-600">09 940 004 046</div>
                  </div>
                </div>
              </BoxReveal>
              <BoxReveal boxColor={"#b45309"} duration={0.5}>
                <div className="flex gap-4 w-72 py-4">
                  <div className="">
                    <div className="flex items-center justify-center bg-neutral-700 p-[1.4rem] aspect-square rounded-3xl text-neutral-100">
                      <LucideMailOpen className="text-3xl" />
                    </div>
                  </div>
                  <div className=" text-black/60">
                    <div className="font-semibold text-[#6f4e37] text-lg">Mail Address :</div>
                    <div className="text- neutral-600">
                      morphdigitalsolution@ gmail.com
                    </div>
                  </div>
                </div>
              </BoxReveal>
            </div>
          </div>
          <div className="flex flex-col lg:items-end">
            <img
              src="https://morph-digital-mm.vercel.app/img/LinThandar.png"
              alt=""
              className=" brightness-110 saturate-150 w-full max-w-xs mx-auto block pt-4 px-2 lg:hidden object-cover max-h-[600px] object-top"
            />
            <div className="w-full lg:w-[390px] h-[600px] bg-white bg- neutral-950/70 rounded-3xl shadow-2xl shadow-black/10">
              <MessageForm className="w-full h-full p-10" />
            </div>
            <div className="p-10 mt-10 bg-amber-700 rounded-3xl lg:hidden gap-6 grid grid-cols-2">
              <div className="flex items-center text-center h-full text-neutral-100 gap-2 justify-center flex-col">
                <RiPagesLine className="text-6xl p-1" />
                <div className="text-3xl font-bold ps-4">
                  <NumberTicker className="text-neutral-100" value={2} />
                  k+
                </div>
                <div className="">Completed Projects</div>
              </div>
              <div className="flex items-center text-center h-full text-neutral-100 gap-2 justify-center flex-col">
                <SlPeople className="text-6xl p-1" />
                <div className="text-3xl font-bold ps-4">
                  <NumberTicker className="text-neutral-100" value={30} />
                  k+
                </div>
                <div className="">Happy Customers</div>
              </div>
              <div className="flex items-center text-center h-full text-neutral-100 gap-2 justify-center flex-col">
                <LiaAwardSolid className="text-6xl" />
                <div className="text-3xl font-bold ps-4">
                  <NumberTicker className="text-neutral-100" value={12} />+
                </div>
                <div className="">Award Winning</div>
              </div>
              <div className="flex items-center text-center h-full text-neutral-100 gap-2 justify-center flex-col">
                <MdReviews className="text-6xl p-1" />
                <div className="text-3xl font-bold ps-4">
                  <NumberTicker className="text-neutral-100" value={99} />%
                </div>
                <div className="">Satisfication Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute pointer-events-none hidden lg:block z-10 top-20 left-0 w-full h-full p-5">
        <div className="max-w-7xl mx-auto h-full flex flex-col">
          <img
            src="https://morph-digital-mm.vercel.app/img/LinThandar.png"
            alt=""
            className=" brightness-110 saturate-150 w-full h-[700px] pt-5 object-contain"
          />
          <div className="p-10 bg-amber-700 rounded-3xl grid lg:grid-cols-4">
            <div className="flex items-center text-neutral-100 gap-2 justify-center flex-col">
              <RiPagesLine className="text-7xl p-1" />
              <div className="text-5xl font-bold ps-4">
                <NumberTicker className="text-neutral-100" value={2} />
                k+
              </div>
              <div className="">Completed Projects</div>
            </div>
            <div className="flex items-center text-neutral-100 gap-2 justify-center flex-col">
              <SlPeople className="text-7xl p-1" />
              <div className="text-5xl font-bold ps-4">
                <NumberTicker className="text-neutral-100" value={120} />+
              </div>
              <div className="">Happy Customers</div>
            </div>
            <div className="flex items-center text-neutral-100 gap-2 justify-center flex-col">
              <LiaAwardSolid className="text-7xl" />
              <div className="text-5xl font-bold ps-4">
                <NumberTicker className="text-neutral-100" value={12} />+
              </div>
              <div className="">Award Winning</div>
            </div>
            <div className="flex items-center text-neutral-100 gap-2 justify-center flex-col">
              <MdReviews className="text-7xl p-1" />
              <div className="text-5xl font-bold ps-4">
                <NumberTicker className="text-neutral-100" value={99} />%
              </div>
              <div className="">Satisfication Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
