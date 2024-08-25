import CircularProgress from "@/components/CircularProgress";
import TitlePillow from "@/components/TitlePillow";
import React from "react";

function Goal() {
  return (
    <div className="min-h-[400px] my-12 bg-blend-difference bg-left bg-repeat-x bg-[url(https://demo.bosathemes.com/agence/wp-content/uploads/sites/35/2022/11/agency-img3.png)] bg-neutral-800">
      <div className="w-full h-full bg-neutral-800/90">
        <div className="grid lg:grid-cols-2 max-w-6xl mx-auto">
          <div className="flex justify-center items-center overflow-hidden">
            <div className="relative">
              <img
                src="img/circle.png"
                alt=""
                className="h-[400px] scale-110 opacity-40"
              />
              <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center text-center">
                <TitlePillow>Our Goal</TitlePillow>
                <div className="text-3xl lg:text-5xl font-extrabold py-3 px-5 capitalize text-white">
                  <span className="text-amber-700">Missions </span>
                  we aim for you!
                </div>
                <div className="text-white px-12">
                  We are dedicated to achieving your goals and exceeding
                  expectations through effective strategies.
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 p-8 items-center text-white text-center">
            <div className="flex flex-col gap-2 justify-center items-center">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goal;
