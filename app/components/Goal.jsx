import CircularProgress from "@/components/CircularProgress";
import TitlePillow from "@/components/TitlePillow";
import React from "react";

function Goal() {
  return (
    <div className="min-h-[420px] bg-blend-difference bg-left bg- neutral-700 text- neutral-300 bg-repeat-x bg- [url(https://demo.bosathemes.com/agence/wp-content/uploads/sites/35/2022/11/agency-img3.png)] bg- neutral-800">
      <div className="w-full min-h- [420px] h-full bg- neutral-800/90">
        <div className="grid lg:grid-cols-2 max-w-6xl mx-auto lg:pt-14 py-10">
          <div className="flex justify-center items-center overflow-hidden">
            <div className="relative">
              {/* <img
                src="img/circle.png"
                alt=""
                className="h-[400px] inv ert translate-y-2 bg-[#6F4E37]"
              /> */}
              <div className="size-[400px] bg-[#6f4e3751] rounded-full"></div>
              <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center text-center">
                <TitlePillow>Our Goal</TitlePillow>
                <div className="text-3xl lg:text-5xl font-extrabold py-3 px-5 capitalize text-[#6F4E37]">
                  <span className="text-amber-600">Missions </span>
                  we aim for you!
                </div>
                {/* <div className=" px-12">
                  We are dedicated to achieving your goals and exceeding
                  expectations through effective strategies.
                </div> */}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-8  text-lg">
            {/* <div className="flex flex-col gap-2 justify-center items-center">
              <CircularProgress currentCount={95} size={130} />
              <div className="font-semibold text-xl">Marketing</div>
              <div className="text-sm">
                Driving growth through strategic campaigns.
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <CircularProgress currentCount={90} size={130} />
              <div className="font-semibold text-xl">Solution</div>
              <div className="text-sm">
                Tailored strategies for effective, on-time outcomes.
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <CircularProgress currentCount={96} size={130} />
              <div className="font-semibold text-xl">Success</div>
              <div className="text-sm">
                Achieving top-notch results and client satisfaction.
              </div>
            </div> */}
            <div className="leading-[1.8]">
              Morph ​၏ ရည်ရွယ်ချက်မှာ လုပ်ငန်းရှင်များ တတ်နိုင်သည့်
              စျေးနှုန်းဖြင့် လုပ်ငန်းတခုချင်းအလိုက် သင့်လျော်သော Customize
              Digital Services ဝန်ဆောင်မှုများပေးရန်။ ရိုးရှင်းပြီး ထိရောက်သော
              ဒီဂျစ်တယ်ပြောင်းလဲမှု စနစ်များဖြင့် စီးပွားရေးလုပ်ငန်းများ
              တိုးတက်အောင်မြင်ရန်။ ရေရှည်တည်တံ့ပြီး အောင်မြင်သည့်
              စီးပွားရေးအဖြစ် ရပ်တည်နိုင်ရန် ဖြစ်သည်။
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goal;
