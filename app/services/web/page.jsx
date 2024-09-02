import Subscribe from "@/app/components/Subscribe";
import Team from "@/app/components/Team";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroHalf from "@/components/HeroHalf";
import BoxReveal from "@/components/magicui/box-reveal";
import React from "react";
import { FaBusinessTime, FaPhone } from "react-icons/fa";

function page() {
  return (
    <div>
      <Header />
      <HeroHalf>Web Development Services</HeroHalf>
      <div className="relative bg-blend-difference bg-left bg-repeat-x bg-[url(https://demo.bosathemes.com/agence/wp-content/uploads/sites/35/2022/11/agency-img3.png)] bg-neutral-800">
        <div className="w-full h-full bg-neutral-800/90 flex pb-10">
          <div className="max-w-6xl w-full pt-16 lg:pb-20 text-center mx-auto text-neutral-100">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center w-full px-5 gap-10">
              <div className="flex items-center justify-center lg:justify-center md:justify-end">
                <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                  <div className="relative group rounded-3xl overflow-hidden h-64 w-[20rem] lg:w-[18.5rem] xl:w-[21rem] block">
                    <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-600"></div>
                    <div className="absolute w-full h-full top-0 left-0 p-2 bg-black/30 flex flex-col items-center justify-center">
                      <img
                        src="https://morph-digital-mm.vercel.app/img/chart.svg"
                        alt=""
                        className="size-20"
                      />
                      <div className="text-xl group-hover:text-amber-700">
                        Content Writing Service
                      </div>
                    </div>
                  </div>
                </BoxReveal>
              </div>
              <div className="flex items-center justify-center lg:justify-center md:justify-start">
                <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                  <div className="relative group rounded-3xl overflow-hidden h-64 w-[20rem] lg:w-[18.5rem] xl:w-[21rem] block">
                    <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-600"></div>
                    <div className="absolute w-full h-full top-0 left-0 p-2 bg-black/30 flex flex-col items-center justify-center">
                      <img
                        src="https://morph-digital-mm.vercel.app/img/marketing.svg"
                        alt=""
                        className="size-28 -mt-3"
                      />
                      <div className="text-xl group-hover:text-amber-700 -mt-5">
                        Social Media Management Service
                      </div>
                    </div>
                  </div>
                </BoxReveal>
              </div>
              <div className="flex items-center justify-center lg:justify-center md:justify-end">
                <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                  <div className="relative group rounded-3xl overflow-hidden h-64 w-[20rem] lg:w-[18.5rem] xl:w-[21rem] block">
                    <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-600"></div>
                    <div className="absolute w-full h-full top-0 left-0 p-2 bg-black/30 flex flex-col items-center justify-center">
                      <img
                        src="https://morph-digital-mm.vercel.app/img/business.svg"
                        alt=""
                        className="size-28 -mt-3"
                      />
                      <div className="text-xl group-hover:text-amber-700 -mt-5">
                        Online Reputation Management Plan Service
                      </div>
                    </div>
                  </div>
                </BoxReveal>
              </div>
              {/* </div>
            <div className="flex items-center lg:items-center sm:items-start flex-col lg:flex-row w-full px-5 gap-8 sm:gap-5 justify-center"> */}
              <div className="flex items-center justify-center lg:justify-center md:justify-start">
                <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                  <div className="relative group rounded-3xl overflow-hidden h-64 w-[20rem] lg:w-[18.5rem] xl:w-[21rem] block">
                    <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-600"></div>
                    <div className="absolute w-full h-full top-0 left-0 p-2 bg-black/30 flex flex-col items-center justify-center">
                      <img
                        src="https://morph-digital-mm.vercel.app/img/chart.svg"
                        alt=""
                        className="size-20"
                      />
                      <div className="text-xl group-hover:text-amber-700">
                        Crisis Communication Plan Service
                      </div>
                    </div>
                  </div>
                </BoxReveal>
              </div>
              <div className="flex items-center justify-center lg:justify-center md:justify-end">
                <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                  <div className="relative group rounded-3xl overflow-hidden h-64 w-[20rem] lg:w-[18.5rem] xl:w-[21rem] block">
                    <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-600"></div>
                    <div className="absolute w-full h-full top-0 left-0 p-2 bg-black/30 flex flex-col items-center justify-center">
                      <img
                        src="https://morph-digital-mm.vercel.app/img/marketing.svg"
                        alt=""
                        className="size-28 -mt-3"
                      />
                      <div className="text-xl group-hover:text-amber-700 -mt-5">
                        Data Analytics & Reporting Service
                      </div>
                    </div>
                  </div>
                </BoxReveal>
              </div>
              <div className="flex items-center justify-center lg:justify-center md:justify-start">
                <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                  <div className="relative group rounded-3xl overflow-hidden h-64 w-[20rem] lg:w-[18.5rem] xl:w-[21rem] block">
                    <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-600"></div>
                    <div className="absolute w-full h-full top-0 left-0 p-2 bg-black/30 flex flex-col items-center justify-center">
                      <img
                        src="https://morph-digital-mm.vercel.app/img/business.svg"
                        alt=""
                        className="size-28 -mt-3"
                      />
                      <div className="text-xl group-hover:text-amber-700 -mt-5">
                        Graphic Design Services
                      </div>
                    </div>
                  </div>
                </BoxReveal>
              </div>
              {/* </div>
            <div className="flex items-center lg:items-center sm:items-start flex-col lg:flex-row w-full px-5 gap-8 sm:gap-5 justify-center"> */}
              <div className="flex items-center justify-center lg:justify-center md:justify-end">
                <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                  <div className="relative group rounded-3xl overflow-hidden h-64 w-[20rem] lg:w-[18.5rem] xl:w-[21rem] block">
                    <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-600"></div>
                    <div className="absolute w-full h-full top-0 left-0 p-2 bg-black/30 flex flex-col items-center justify-center">
                      <img
                        src="https://morph-digital-mm.vercel.app/img/chart.svg"
                        alt=""
                        className="size-20"
                      />
                      <div className="text-xl group-hover:text-amber-700">
                        Boosting Service
                      </div>
                    </div>
                  </div>
                </BoxReveal>
              </div>
              <div className="flex items-center justify-center lg:justify-center md:justify-start">
                <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                  <div className="relative group rounded-3xl overflow-hidden h-64 w-[20rem] lg:w-[18.5rem] xl:w-[21rem] block">
                    <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-600"></div>
                    <div className="absolute w-full h-full top-0 left-0 p-2 bg-black/30 flex flex-col items-center justify-center">
                      <img
                        src="https://morph-digital-mm.vercel.app/img/marketing.svg"
                        alt=""
                        className="size-28 -mt-3"
                      />
                      <div className="text-xl group-hover:text-amber-700 -mt-5">
                        Video Marketing Service
                      </div>
                    </div>
                  </div>
                </BoxReveal>
              </div>
              <div className="flex items-center justify-center lg:justify-center md:justify-end">
                <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                  <div className="relative group rounded-3xl overflow-hidden h-64 w-[20rem] lg:w-[18.5rem] xl:w-[21rem] block">
                    <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-600"></div>
                    <div className="absolute w-full h-full top-0 left-0 p-2 bg-black/30 flex flex-col items-center justify-center">
                      <img
                        src="https://morph-digital-mm.vercel.app/img/business.svg"
                        alt=""
                        className="size-28 -mt-3"
                      />
                      <div className="text-xl group-hover:text-amber-700 -mt-5">
                        Script Writing Service
                      </div>
                    </div>
                  </div>
                </BoxReveal>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute -bottom-24 right-1/2 lg:translate-x-1/2 w-full px-5">
          <div className="text-neutral-100 flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-8 p-8 lg:p-10 lg:items-center max-w-6xl mx-auto bg-amber-700 lg:rounded-3xl">
            <FaPhone className="size-16 border border-white p-3 rounded-full" />
            <div className="lg:col-span-3">
              <div className="uppercase text-sm font-semibold">
                Get a free consultation
              </div>
              <div className="font-semibold text-xl">09 786 063 014</div>
            </div>
            <div className="border-s lg:col-span-5 border-white ps-12">
              Lorem ipsum dolor sit amet consectetur adipisars error doloremque
              vitae harum? Animius incidunt vero consectetur debitis accusantium
              porro!
            </div>
            <div className="col-span-3 flex justify-end">
              <a
                href="tel:+959786063014"
                className="bg-white text-black rounded-full py-3 px-5 hover:bg-amber-700 hover:text-neutral-100 duration-300"
              >
                Make appointment
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:h-32 bg-slate-100/50"></div>
      <Team />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default page;
