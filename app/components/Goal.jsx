import TitlePillow from "@/components/TitlePillow";
import React from "react";

function Goal() {
  return (
    <div className="min-h-[420px] bg-blend-difference bg-left bg- neutral-700 text- neutral-300 bg-repeat-x bg- [url(https://demo.bosathemes.com/agence/wp-content/uploads/sites/35/2022/11/agency-img3.png)] bg- neutral-800">
      <div className="w-full h-full bg- neutral-800/90">
        <div className="grid lg:grid-cols-12 max-w-7xl mx-auto lg:pt-14 py-10">
          <div className="flex lg:col-span-4 justify-center items-center overflow-hidden">
            <div className="relative">
              {/* <img loading="lazy" 
                src="img/circle.png"
                alt=""
                className="h-[400px] inv ert translate-y-2 bg-[#6F4E37]"
              /> */}
              <div className="size-96 bg-[#6f4e3751] rounded-full"></div>
              <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center text-center lg:pt-12">
                <TitlePillow>Our Goal</TitlePillow>
                <div className="text-3xl lg:text-[2.8rem] lg:leading-[1.2] font-extrabold py-3 px-5 capitalize text-[#6F4E37]">
                  <span className="text-amber-600">Vision & Mission </span>
                  we aim for you!
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 lg:col-span-4 text-lg">
            <div className="text-xl lg:text-3xl pt-2 pb-1 font-semibold text-[#6F4E37]">
              Our Vision
            </div>
            <div className="">
              To become one of Myanmar’s most trusted Strategic Digital
              Transformation Growth Partners for Startup, SME & Healthcare
              Businesses.
            </div>
            <div className="text-xl lg:text-3xl pt-2 pb-1 font-semibold text-[#6F4E37] mt-6">
              Our Mission
            </div>
            <div className="">
              To simplify Digital Transformation by delivering Reliable,
              Systematic, Transparent, and Measurable One Stop Service Products
              Specialized to Startup, SME & Healthcare Businesses that create
              Real Business Value.
            </div>
          </div>
          <div className="p-8 lg:col-span-4 text-lg">
            <div className="text-xl lg:text-3xl pt-2 pb-1 font-semibold text-[#6F4E37]">
              Our Values
            </div>
            <ul className="">
              <li>
                ✔️Specialized focus to Startup, SME & Healthcare Businesses
              </li>
              <li>✔️One Stop Service Products</li>
              <li>✔️Measurable Results</li>
              <li>✔️Transparent Pricing</li>
              <li>✔️DICA Registered Company</li>
              <li>✔️SME Certified Company</li>
              <li>✔️Online Sales Certified Company</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goal;
