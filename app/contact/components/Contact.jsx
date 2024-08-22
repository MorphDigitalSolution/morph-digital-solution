import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import { RiPagesLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import { LiaAwardSolid } from "react-icons/lia";
import { MdReviews } from "react-icons/md";
import NumberTicker from "@/components/magicui/number-ticker";

function Contact() {
  return (
    <>
      <div className="relative">
        <div className="relative w-full h-full z-10 bg-white/50 py-10 lg:pt-10 lg:pb-48">
          <div className="grid lg:grid-cols-2 max-w-6xl mx-auto h-full p-8">
            <div className="">
              <div className="max-w-md">
                <BoxReveal boxColor={"#b45309"} duration={0.5}>
                  <div className="pb-2">
                    <TitlePillow>Contact us</TitlePillow>
                  </div>
                </BoxReveal>
                <BoxReveal boxColor={"#b45309"} duration={0.5}>
                  <div className="text-4xl lg:text-5xl font-extrabold py-2 text-blue-950">
                    <span className="text-amber-700">Contact </span> & Join
                    Together
                  </div>
                </BoxReveal>
                <BoxReveal boxColor={"#b45309"} duration={0.5}>
                  <div className="max-w-sm mx-auto text-blue-950/70 py-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora vel dolor oribus alias praesentium error sunt aut
                    pariatur veniam.
                  </div>
                </BoxReveal>
                <BoxReveal boxColor={"#b45309"} duration={0.5}>
                  <div className="flex gap-4 w-72 py-4">
                    <div className="">
                      <div className="flex items-center justify-center p-5 aspect-square bg-black rounded-3xl text-white">
                        <IoLocationOutline className="text-3xl" />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="font-semibold text-lg">
                        Office Address :
                      </div>
                      <div className="text-zinc-600/80">
                        lqwei erw qer wehwt hrtw rhww rjwrh ehwrj ljerm.
                      </div>
                    </div>
                  </div>
                </BoxReveal>
                <BoxReveal boxColor={"#b45309"} duration={0.5}>
                  <div className="flex gap-4 w-72 py-4">
                    <div className="">
                      <div className="flex items-center justify-center p-5 aspect-square bg-black rounded-3xl text-white">
                        <IoLocationOutline className="text-3xl" />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="font-semibold text-lg">
                        Phone Number :
                      </div>
                      <div className="text-zinc-600/80">
                        lqwei erw qer wehwt hrtw rhww rjwrh ehwrj ljerm.
                      </div>
                    </div>
                  </div>
                </BoxReveal>
                <BoxReveal boxColor={"#b45309"} duration={0.5}>
                  <div className="flex gap-4 w-72 py-4">
                    <div className="">
                      <div className="flex items-center justify-center p-5 aspect-square bg-black rounded-3xl text-white">
                        <IoLocationOutline className="text-3xl" />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="font-semibold text-lg">
                        Office Address :
                      </div>
                      <div className="text-zinc-600/80">
                        lqwei erw qer wehwt hrtw rhww rjwrh ehwrj ljerm.
                      </div>
                    </div>
                  </div>
                </BoxReveal>
              </div>
            </div>
            <div className="flex flex-col lg:items-end">
              <img
                src="img/woman.png"
                alt=""
                className="w-full pt-4 px-2 lg:hidden"
              />
              <div className="w-full lg:w-[420px] h-[580px] bg-white rounded-3xl shadow-2xl shadow-black/10"></div>
              <div className="p-10 mt-20 bg-amber-700 rounded-3xl lg:hidden space-y-5">
                <div className="flex items-center text-white gap-2 justify-center flex-col">
                  <RiPagesLine className="text-7xl p-1" />
                  <div className="text-5xl font-bold ps-4">
                    <NumberTicker className="text-white" value={2} />
                    k+
                  </div>
                  <div className="">Completed Projects</div>
                </div>
                <div className="flex items-center text-white gap-2 justify-center flex-col">
                  <SlPeople className="text-7xl p-1" />
                  <div className="text-5xl font-bold ps-4">
                    <NumberTicker className="text-white" value={30} />
                    k+
                  </div>
                  <div className="">Happy Customers</div>
                </div>
                <div className="flex items-center text-white gap-2 justify-center flex-col">
                  <LiaAwardSolid className="text-7xl" />
                  <div className="text-5xl font-bold ps-4">
                    <NumberTicker className="text-white" value={12} />+
                  </div>
                  <div className="">Award Winning</div>
                </div>
                <div className="flex items-center text-white gap-2 justify-center flex-col">
                  <MdReviews className="text-7xl p-1" />
                  <div className="text-5xl font-bold ps-4">
                    <NumberTicker className="text-white" value={99} />%
                  </div>
                  <div className="">Satisfication Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute hidden lg:block z-20 top-8 left-0 w-full h-full p-5">
          <div className="max-w-6xl mx-auto h-full flex flex-col">
            <img
              src="img/woman.png"
              alt=""
              className="w-full h-[700px] object-contain"
            />
            <div className="p-10 bg-amber-700 rounded-3xl grid lg:grid-cols-4">
              <div className="flex items-center text-white gap-2 justify-center flex-col">
                <RiPagesLine className="text-7xl p-1" />
                <div className="text-5xl font-bold ps-4">
                  <NumberTicker className="text-white" value={2} />
                  k+
                </div>
                <div className="">Completed Projects</div>
              </div>
              <div className="flex items-center text-white gap-2 justify-center flex-col">
                <SlPeople className="text-7xl p-1" />
                <div className="text-5xl font-bold ps-4">
                  <NumberTicker className="text-white" value={30} />
                  k+
                </div>
                <div className="">Happy Customers</div>
              </div>
              <div className="flex items-center text-white gap-2 justify-center flex-col">
                <LiaAwardSolid className="text-7xl" />
                <div className="text-5xl font-bold ps-4">
                  <NumberTicker className="text-white" value={12} />+
                </div>
                <div className="">Award Winning</div>
              </div>
              <div className="flex items-center text-white gap-2 justify-center flex-col">
                <MdReviews className="text-7xl p-1" />
                <div className="text-5xl font-bold ps-4">
                  <NumberTicker className="text-white" value={99} />%
                </div>
                <div className="">Satisfication Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:h-44"></div>
    </>
  );
}

export default Contact;
