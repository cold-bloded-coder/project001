import React from "react";
import face from "./face.png"

export function Card() {
  return (
    <div className="w-44 h-48 flex flex-col items-center justify-around bg-gradient-to-b from-slate-300 to-slate-100">
      <div>
        <img src={face} alt="" className="w-16 "/>
      </div>
      <div className="font-pop flex flex-col items-center">
        <span className="text-sm font-thin my-1">Manu M</span>
        <div className="text-xs flex flex-col justify-center items-center">
          <span className="text-gray-700 font-extralight">Computer Science </span>
          <span className="text-gray-700 font-extralight">III sem</span>
        </div>
      </div>
    </div>
  );
}
