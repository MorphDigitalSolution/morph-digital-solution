import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import React from "react";

function AboutUs() {
  return (
    <div className="bg-amber-700 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 py-5 lg:pt-20 lg:pb-10">
          <div className="px-5 lg:col-span-2">
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="pb-2">
                <TitlePillow>About Us</TitlePillow>
              </div>
            </BoxReveal>
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="text-3xl lg:text-5xl font-extrabold lg:py-2 text- blue-950">
                One Stop 
                <span className="text-amber-600"> Digital Solution </span>
                Service Company
              </div>
            </BoxReveal>
          </div>
          <div className="lg:col-span-3 flex items-center justify-center lg:pt-2 text-neutral-200/80">
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="p-5 lg:ps-10 leading-[1.7]">
                Morph Website & Digital Marketing ကို စတင်ဖွဲ့စည်းခြင်းမှာ
                ရည်မှန်းချက်တစ်ခုသာ ရှိပါသည်။ အဆိုပါရည်မှန်းချက်မှာ (Startup)
                စီးပွားရေး လုပ်ငန်းများနှင့် အသေးစား၊ အလတ်စား (MSMEs)
                စီးပွားရေးလုပ်ငန်းများ​၏ ရည်မှန်းချက်များအောင်မြင်စေရန်အတွက်
                Digital နည်းပညာဖြင့် ပေါင်းကူးတံတားသဖွယ် ဆောင်ရွက်ပေးရန်ဖြစ်သည်။
                Morph သည် ဒီဂျစ်တယ်လိုအပ်ချက်များအားလုံးအတွက်
                တစ်နေရာတည်းမှဖြေရှင်းနိုင်သော ဝန်ဆောင်မှု (One Stop Digital
                Solution Services) ပေးသည့် Website, Digital Marketing နှင့်
                Business Registration Services Company တခုဖြစ်သည်။
                သင့်လုပ်ငန်းကို Digital Transformation ပြုလုပ်လိုပါက Morph ကိုသာ
                ဆက်သွယ်လိုက်ပါ။
              </div>
            </BoxReveal>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-x-5 px-10">
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="pb-12 px-4">
              <div className="p-2 rounded-3xl shadow-2xl shadow-black/15 bg-neutral-950/50 grid items-center grid-cols-3">
                <div className="p-4">
                  <div className="aspect-square rounded-full bg-amber-700">
                    <img
                      src="img/bestPrice.png"
                      alt=""
                      className="w-full h-full p-4 invert"
                    />
                  </div>
                </div>
                <div className="col-span-2 py-2">
                  {/* <div className="font-semibold text-lg">
                    Best Price Guaranteed
                  </div>
                  <div className="">
                    Lorem ipsum, dolor sit amet conser adipisicing.
                  </div> */}
                  <div className="font-semibold">
                    One-Stop Digital Partner for Startups and SMEs
                  </div>
                </div>
              </div>
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="pb-12 px-4">
              <div className="p-2 rounded-3xl shadow-2xl shadow-black/15 bg-neutral-950/50 grid items-center grid-cols-3">
                <div className="p-4">
                  <div className="aspect-square rounded-full bg-neutral-800">
                    <img
                      src="img/tool.png"
                      alt=""
                      className="w-full h-full p-5 invert"
                    />
                  </div>
                </div>
                <div className="col-span-2 py-2">
                  {/* <div className="font-semibold text-lg">Finance Analysis</div>
                  <div className="">
                    Lorem ipsum, dolor sit amet conser adipisicing.
                  </div> */}
                  <div className="font-semibold">
                    Your Partner in Digital Success: From Concept to Launch
                  </div>
                </div>
              </div>
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="pb-12 px-4">
              <div className="p-2 rounded-3xl shadow-2xl shadow-black/15 bg-neutral-950/50 grid items-center grid-cols-3">
                <div className="p-4">
                  <div className="aspect-square rounded-full bg-amber-700">
                    <img
                      src="img/team.png"
                      alt=""
                      className="w-full h-full p-4 invert"
                    />
                  </div>
                </div>
                <div className="col-span-2 py-2">
                  {/* <div className="font-semibold text-lg">Professional Team</div>
                  <div className="">
                    Lorem ipsum, dolor sit amet conser adipisicing.
                  </div> */}
                  <div className="font-semibold">
                    Affordable Digital Solutions for Every Stage of Growth
                  </div>
                </div>
              </div>
            </div>
          </BoxReveal>
        </div>
        {/* <div className="h-[280px] lg:h-[540px] relative">
          <img
            src="img/group.png"
            alt=""
            className="absolute top-20 lg:top-1/2 -translate-y-1/2 left-5 lg:left-0 object-cover h-[220px] lg:h-[450px] rounded-[28px]"
          />
          <img
            src="img/about3.png"
            alt=""
            className="absolute top-44 lg:top-1/2 -translate-y-1/2 right-0 border-[12px] border-white object-cover h-[180px] lg:h-[370px] rounded-[28px]"
          />
        </div> */}
      </div>
    </div>
  );
}

export default AboutUs;
