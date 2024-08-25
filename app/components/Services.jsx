import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import React from "react";
import { FaPhone } from "react-icons/fa";

function Services() {
  return (
    <>
      <div className="lg:h-[780px] relative bg-blend-difference bg-left bg-repeat-x bg-[url(https://demo.bosathemes.com/agence/wp-content/uploads/sites/35/2022/11/agency-img3.png)] bg-neutral-800">
        <div className="w-full h-full bg-neutral-800/90 pt-20 lg:py-28">
          <div className="max-w-6xl flex flex-col text-center items-center justify-center mx-auto text-white">
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="">
                <TitlePillow>Service List</TitlePillow>
              </div>
            </BoxReveal>
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="text-3xl lg:text-5xl font-extrabold p-5">
                <span className="text-amber-700">Services </span>
                we can help you with!
              </div>
            </BoxReveal>
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <div className="max-w-4xl px-4">
                Explore a range of tailored services designed to meet your
                needs. From innovative digital strategies to comprehensive
                support, we’re here to help you succeed.
              </div>
            </BoxReveal>
            <div className="flex flex-col lg:flex-row w-full p-10 lg:pt-14 mt-5 gap-8 xl:gap-10 items-center justify-center">
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <a
                  href=""
                  className="relative group rounded-3xl overflow-hidden h-64 w-72 md:w-[500px] lg:w-72 xl:w-80 block"
                >
                  <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-600"></div>
                  <div className="absolute w-full h-full top-0 left-0 bg-black/30 flex flex-col items-center justify-center">
                    <img src="img/chart.svg" alt="" className="size-24" />
                    <div className="text-2xl group-hover:text-amber-700 font-semibold">
                      Website Development
                    </div>
                  </div>
                </a>
              </BoxReveal>
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <a
                  href=""
                  className="relative group rounded-3xl overflow-hidden h-64 w-72 md:w-[500px] lg:w-72 xl:w-80 block"
                >
                  <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-600"></div>
                  <div className="absolute w-full h-full top-0 left-0 bg-black/30 flex flex-col items-center justify-center">
                    <img
                      src="img/marketing.svg"
                      alt=""
                      className="size-32 -mt-3"
                    />
                    <div className="text-2xl group-hover:text-amber-700 font-semibold -mt-5">
                      Digital Marketing
                    </div>
                  </div>
                </a>
              </BoxReveal>
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <a
                  href=""
                  className="relative group rounded-3xl overflow-hidden h-64 w-72 md:w-[500px] lg:w-72 xl:w-80 block"
                >
                  <div className="absolute z-0 -top-1/3 right-1/2 translate-x-1/2 rounded-full size-48 bg-neutral-600"></div>
                  <div className="absolute w-full h-full top-0 left-0 bg-black/30 flex flex-col items-center justify-center">
                    <img
                      src="img/business.svg"
                      alt=""
                      className="size-32 -mt-3"
                    />
                    <div className="text-2xl group-hover:text-amber-700 font-semibold -mt-5">
                      Business Registration
                    </div>
                  </div>
                </a>
              </BoxReveal>
            </div>
          </div>
        </div>
        <div className="lg:absolute -bottom-24 right-1/2 lg:translate-x-1/2 w-full px-5">
          <div className="text-white flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-8 p-8 lg:p-10 lg:items-center max-w-6xl mx-auto bg-amber-700 lg:rounded-3xl">
            <FaPhone className="size-16 border border-white p-3 rounded-full" />
            <div className="lg:col-span-3">
              <div className="uppercase text-sm font-semibold">
                Get a free consultation
              </div>
              <div className="font-semibold text-xl">09 786 063 014</div>
            </div>
            <div className="border-s lg:col-span-5 border-white ps-12">
              Ready to elevate your digital presence? Schedule a consultation to
              explore customized strategies and solutions designed to bring your
              vision to life.
            </div>
            <div className="col-span-3 flex justify-end">
              <a
                href="tel:+959786063014"
                className="bg-white text-black rounded-full py-3 px-5 hover:bg-amber-950 hover:text-white duration-300"
              >
                Make appointment
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:h-32"></div>
    </>
  );
}

export default Services;
