import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import React from "react";
import { BiSolidStar } from "react-icons/bi";

function Review() {
  return (
    <div className="relative bg-blend-difference bg-left bg-repeat-x bg-[url(https://demo.bosathemes.com/agence/wp-content/uploads/sites/35/2022/11/agency-img3.png)] bg-neutral-800">
      <div className="w-full h-full bg-neutral-800/80 pt-20 lg:py-28 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-8 p-5 lg:items-center">
            <div className="">
              <BoxReveal boxColor={"#b45309"} duration={0.5}>
                <div className="pb-2">
                  <TitlePillow>Client Reviews</TitlePillow>
                </div>
              </BoxReveal>
              <BoxReveal boxColor={"#b45309"} duration={0.5}>
                <div className="text-4xl lg:text-5xl font-extrabold pt-2 lg:py-2 capitalize">
                  <span className="text-amber-700">Review's</span> of Clients
                </div>
              </BoxReveal>
            </div>
            <div className="max-w-md">
              <BoxReveal boxColor={"#b45309"} duration={0.5}>
                Hear directly from our clients about their experiences and the
                impact our services. Their honest reviews reflect our commitment
                to excellence and client satisfaction.
              </BoxReveal>
            </div>
            <BoxReveal boxColor={"#b45309"} duration={0.5}>
              <a
                href=""
                className="bg-white hover:bg-amber-700 hover:text-white duration-300 rounded-full py-3 px-6 text-black text-[0.9rem] flex text-center font-semibold uppercase"
              >
                View More
              </a>
            </BoxReveal>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 p-5">
            <div className="pt-20 lg:pt-24">
              <div className="bg-neutral-900 w-full rounded-3xl relative">
                <div className="absolute -top-10 left-12 size-20 border-[7px] border-neutral-800 overflow-hidden rounded-full bg-neutral-600">
                  <img
                    src="img/client3.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-10 pt-16">
                  <div className="border-b pb-5">
                    Morph transformed our online presence. Our new website
                    stands out and drives traffic effectively. Their expertise
                    has been crucial to our success.
                  </div>
                  <div className="grid grid-cols-5">
                    <div className="col-span-3 text-center">
                      <div className="font-semibold pt-4 text-lg">
                        Min Min Aung
                      </div>
                      <div className="text-sm">CEO of TechStartup Inc.</div>
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                      <BiSolidStar className="text-amber-700" />
                      <BiSolidStar className="text-amber-700" />
                      <BiSolidStar className="text-amber-700" />
                      <BiSolidStar className="text-amber-700" />
                      <BiSolidStar />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-20 lg:pt-24">
              <div className="bg-neutral-900 w-full rounded-3xl relative">
                <div className="absolute -top-10 left-12 size-20 border-[7px] border-neutral-800 overflow-hidden rounded-full bg-neutral-600">
                  <img
                    src="img/client2.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-10 pt-16">
                  <div className="border-b pb-5">
                    Morph made our business registration easy, saving us time
                    and stress. The website they built is a valuable asset.
                  </div>
                  <div className="grid grid-cols-5">
                    <div className="col-span-3 text-center">
                      <div className="font-semibold pt-4 text-lg">
                        Thida Soe
                      </div>
                      <div className="text-sm">
                        Founder of GreenEarth Solutions
                      </div>
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                      <BiSolidStar className="text-amber-700" />
                      <BiSolidStar className="text-amber-700" />
                      <BiSolidStar className="text-amber-700" />
                      <BiSolidStar className="text-amber-700" />
                      <BiSolidStar />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-20 lg:pt-24">
              <div className="bg-neutral-900 w-full rounded-3xl relative">
                <div className="absolute -top-10 left-12 size-20 border-[7px] border-neutral-800 overflow-hidden rounded-full bg-neutral-600">
                  <img
                    src="img/client1.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-10 pt-16">
                  <div className="border-b pb-5">
                    Morph improved our customer engagement and boosted sales.
                    Their e-commerce website and social media strategies are
                    spot on.
                  </div>
                  <div className="grid grid-cols-5">
                    <div className="col-span-3 text-center">
                      <div className="font-semibold pt-4 text-lg">
                        Su Su Myint
                      </div>
                      <div className="text-sm">
                        Owner of UrbanStyle Boutique
                      </div>
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                      <BiSolidStar className="text-amber-700" />
                      <BiSolidStar className="text-amber-700" />
                      <BiSolidStar className="text-amber-700" />
                      <BiSolidStar className="text-amber-700" />
                      <BiSolidStar className="text-amber-700" />
                    </div>
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

export default Review;
