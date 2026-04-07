import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import React from "react";

function GroupClients() {
  return (
    <div className="relative">
      <div className="flex absolute top-0 left-0 w-full z-10 bg-[#422e20]/80 text-neutral-100 text-center h-full items-center justify-center flex-col">
        {/* <div className="">Hundreds of satisfied clients</div> */}
        <BoxReveal boxColor={"#b4530900"} duration={0.2}>
          <TitlePillow>Satisfied Customers</TitlePillow>
        </BoxReveal>
        <BoxReveal boxColor={"#b4530900"} duration={0.2}>
          <div className="text-4xl lg:text-[4.6rem] leading-[1.1] font-extrabold pt-3 lg:py-2">
            Hundreds of <span className="text-amber-600">Happy </span>
            Clients
          </div>
        </BoxReveal>
        <div className="lg:px-24 p-4 mx-auto max-w-5xl px-5">
          <BoxReveal boxColor={"#b4530900"} duration={0.2}>
            အသေးစား၊အလတ်စား စီးပွားရေးလုပ်ငန်းရှင်များ (MSMEs) များ​၏
            ဒီဂျစ်တယ်လိုအပ်ချက်များအားလုံးကို တစ်နေရာတည်းမှဖြေရှင်းနိုင်သော
            ဝန်ဆောင်မှုပေးသည့် Website, Digital Marketing နှင့် Business
            Registration Services Company တခုဖြစ်ပါတယ်။
          </BoxReveal>
        </div>
      </div>
      <img loading="lazy"  src="img/clientsGroup.png" alt="" className="" />
    </div>
  );
}

export default GroupClients;
