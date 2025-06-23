import React from "react";

export default function FunkyButton({ label, bgColor = "bg-white", textColor = "text-black", border = "border-black", hoverBorder = "hover:border-accent"}) {
  return (
    <div className="relative w-40 h-10 group">
      <div className="absolute top-1 left-[-8px] w-full h-full rounded-[20px] bg-dark-text z-0 "></div>
      <div className= {`relative z-10 w-full h-full rounded-[20px] ${bgColor} ${textColor} ${border} ${hoverBorder} border-2 flex justify-center items-center select-none top-0 transition-transform duration-100 ease-in-out
    active:translate-x-[-8px] active:translate-y-[4px]`}>
        {label}
      </div>
    </div>
  );
}
