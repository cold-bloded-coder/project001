import React from "react";
import face from "./face.png"

const Card = () => {
  return (
    <div className="xl:h-[30vh] md:w-[19vw] md:h-[25vh] md:py-2 w-[90vw] md:flex md:flex-col md:items-center md:justify-around bg-white drop mx-auto md:mx-0 md:visible hidden">
      <div className="md:w-[30%] xl:w-[30%] xl:scale-[1.1]">
        <img src="https://pickaface.net/gallery/avatar/unr_handsomeboy_180407_1616_z233f.png"  alt="" className="w-fit rounded-lg"/>
      </div>
      <div className="flex flex-col justify-around items-center text">
        <span className="md:text-sm lg:text-xl transition ease-in-out">Manu M</span>
        <div className="md:text-xs lg:text-xl text-[rgba(2,2,2,.75)] transition ease-in-out flex flex-col justify-center items-center xl:flex-none">
          <span className="">Computer Science </span>
          <span className="">III sem</span>
        </div>
      </div>
    </div>
  )
}

export default Card
