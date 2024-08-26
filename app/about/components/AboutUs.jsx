import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import React from "react";

function AboutUs() {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 py-5 lg:py-20">
          <div className="px-5">
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="pb-2">
                <TitlePillow>About Us</TitlePillow>
              </div>
            </BoxReveal>
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="text-3xl lg:text-5xl font-extrabold lg:py-2 text-blue-950">
                <span className="text-amber-700">Introduction</span> To Best
                Digital Agency!
              </div>
            </BoxReveal>
          </div>
          <div className="flex items-center justify-center lg:pt-10 text-slate-400">
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="p-5 lg:ps-10">
                Morph is a leading digital marketing agency specializing in SEO,
                SEM, content marketing, and social media strategies to grow your
                online presence and drive business success. Our expert team
                works closely with clients to deliver solutions that enhance
                brand visibility, attract qualified leads, and foster customer
                engagement.
              </div>
            </BoxReveal>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-x-5 pb-10 px-10">
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="pb-12 px-4">
              <div className="p-2 rounded-3xl shadow-2xl shadow-black/15 grid items-center grid-cols-3">
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
                  <div className="font-semibold text-lg">
                    Best Price Guaranteed
                  </div>
                  <div className="">
                    Lorem ipsum, dolor sit amet conser adipisicing.
                  </div>
                </div>
              </div>
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="pb-12 px-4">
              <div className="p-2 rounded-3xl shadow-2xl shadow-black/15 grid items-center grid-cols-3">
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
                  <div className="font-semibold text-lg">Finance Analysis</div>
                  <div className="">
                    Lorem ipsum, dolor sit amet conser adipisicing.
                  </div>
                </div>
              </div>
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="pb-12 px-4">
              <div className="p-2 rounded-3xl shadow-2xl shadow-black/15 grid items-center grid-cols-3">
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
                  <div className="font-semibold text-lg">Professional Team</div>
                  <div className="">
                    Lorem ipsum, dolor sit amet conser adipisicing.
                  </div>
                </div>
              </div>
            </div>
          </BoxReveal>
        </div>
        <div className="h-[280px] lg:h-[540px] relative">
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
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
