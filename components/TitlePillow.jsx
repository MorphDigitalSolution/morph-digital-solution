import React from "react";

function TitlePillow({ children }) {
  return (
    <div className="bg-white shadow-md rounded-full py-2 px-4 gap-2 flex items-center w-fit">
      <div className="size-2 bg-amber-700 rounded-full"></div>
      <div className="uppercase text-[0.8rem] font-bold text-neutral-600/80">
        {children}
      </div>
      <div className="size-2 bg-amber-700 rounded-full"></div>
    </div>
  );
}

export default TitlePillow;
