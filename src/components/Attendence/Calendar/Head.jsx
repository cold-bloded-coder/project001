import React from "react";
import { Icon } from "@iconify/react";

const Head = (props) => {
  return (
    <div className="py-3 rounded-full w-[90vw] h-auto bg-white drop-shadow-lg  flex justify-around items-center mx-auto">
      <div className="w-[29px] h-[29px] hover:text-white hover:shadow-[0_0_10px_rgba(0,0,0,.3)] rounded-full flex justify-center items-center">
        <Icon
          icon="akar-icons:chevron-left"
          color="black"
          width="23"
          height="18"
        />
      </div>
      <div>
        <span className="font-semibold text-sm ">
          {props.date.month} - {props.date.year}
        </span>
      </div>
      <div className="w-[29px] h-[29px] hover:text-white hover:shadow-[0_0_10px_rgba(0,0,0,.3)] rounded-full flex justify-center items-center">
        <Icon
          icon="akar-icons:chevron-left"
          color="black"
          width="23"
          height="18"
          rotate={2}
        />
      </div>
    </div>
  );
};

export default Head;
