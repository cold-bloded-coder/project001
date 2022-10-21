import React from "react";
import face from "./face.png"

export function Card() {
  return (
    <div className={`w-[14vw] h-[34vh] ${"bg-green-300"}`}>
      <div>
        <img src={face} alt="" className="w-16 rounded-full"/>
      </div>
      <div className="">
        <span className="text-sm font-thin my-1">Manu M</span>
        <div className="text-xs ">
          <span className="text-gray-700 font-extralight">Computer Science </span>
          <span className="text-gray-700 font-extralight">III sem</span>
        </div>
      </div>
    </div>
  );
}
