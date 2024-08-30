import React from "react";

function TitlePillow({ children }) {
  return (
    <div className="bg-white border-2 hover:border-amber-900 border-transparent duration-300 shadow-md rounded-full py-2 px-4 gap-2 flex items-center w-fit">
      <div className="size-2 bg-amber-900 rounded-full"></div>
      <div className="uppercase text-[0.8rem] font-bold text-neutral-600/80">
        {children}
      </div>
      <div className="size-2 bg-amber-900 rounded-full"></div>
    </div>
  );
}

export default TitlePillow;
