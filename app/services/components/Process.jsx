import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import React from "react";

function Process() {
  return (
    <div className="p-8 lg:py-16 bg- slate-100/50">
      <div className="max-w-6xl mx-auto">
        <div className="p-5">
          <div className="flex gap-2 items-center justify-center flex-col text-center">
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="pb-2">
                <TitlePillow>Our Process</TitlePillow>
              </div>
            </BoxReveal>
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="text-4xl lg:text-5xl font-extrabold lg:py-2 text-[#6F4E37]">
                <span className="text-amber-600">Process</span> We Follow
              </div>
            </BoxReveal>
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="text-center max-w-xl mx-auto text-[#6F4E37b1]">
                ကျွန်ုပ်တို့၏ လုပ်ငန်းစဉ်များအရ ထိရောက်စွာ အကောင်အထည်ဖော်ပေးပါတယ်။ အကြံပေးစဉ်းစားမှတ်ယူမှစ၍ လုပ်ဆောင်ချက်အထိ ကျွန်ုပ်တို့သည် သင့်လိုအပ်ချက်များကို ထိရောက်စွာဖြည့်ဆည်းပေးပါတယ်။
              </div>
            </BoxReveal>
          </div>
        </div>
      </div>
      <div className="lg:h-[450px] relative flex flex-col items-center justify-end pb-10">
        <img loading="lazy"  src="img/arrow.png" alt="" className="w-full" />
        <div className="lg:absolute top-0 left-0 w-full h-full">
          <div className="max-w-6xl mx-auto grid gap-y-10 lg:grid-cols-3 h-full py-10 lg:pt-16">
            <div className="flex items-center justify-center">
              <div className="size-[260px] flex items-center justify-center text-center p-6 relative rounded-full border-[6px] border-neutral-300 hover:border-amber-900 duration-500 bg-white ring-[18px] ring-white">
                <div className="absolute top-0 right-0 size-16 bg-amber-700 rounded-full text-3xl font-bold text-neutral-100 flex items-center justify-center">
                  01
                </div>
                <div className="">
                  <div className="font-semibold text-xl py-3 text-[#6F4E37]">
                    Research Project
                  </div>
                  <div className="text-neutral-800/40">
                    သင့်လိုအပ်ချက်များကိုနားလည်စေရန် ကျွန်ုပ်တို့၏ စီမံကိန်းကို ထုတ်ဖော်လေ့လာပါတယ်။
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center lg:pt-20">
              <div className="size-[260px] flex items-center justify-center text-center p-6 relative rounded-full border-[6px] border-neutral-300 hover:border-amber-900 duration-500 bg-white ring-[18px] ring-white">
                <div className="absolute top-0 right-0 size-16 bg-amber-700 rounded-full text-3xl font-bold text-neutral-100 flex items-center justify-center">
                  02
                </div>
                <div className="">
                  <div className="font-semibold text-xl py-3 text-[#6F4E37]">
                    Evaluate Plans
                  </div>
                  <div className="text-neutral-800/40">
                    သင့်ရဲ့ရည်မှန်းချက်များနှင့် ကိုက်ညီအောင် ကျွန်ုပ်တို့၏ အစီအစဉ်များကို စိစစ်ဆန်းစစ်ပါတယ်။
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="size-[260px] flex items-center justify-center text-center p-6 relative rounded-full border-[6px] border-neutral-300 hover:border-amber-900 duration-500 bg-white ring-[18px] ring-white">
                <div className="absolute top-0 right-0 size-16 bg-amber-700 rounded-full text-3xl font-bold text-neutral-100 flex items-center justify-center">
                  03
                </div>
                <div className="">
                  <div className="font-semibold text-xl py-3 text-[#6F4E37]">
                    Best Results
                  </div>
                  <div className="text-neutral-800/40">
                    အကောင်းဆုံးရလဒ်များရရှိစေရန် စီမံကိန်းကို တိတိကျကျ အကောင်အထည်ဖော်ဆောင်ရွက်ပါတယ်။
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
