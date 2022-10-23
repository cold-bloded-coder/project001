import React from "react";
import { Icon } from "@iconify/react";

const Head = (props) => {
  return (
    <div className=" bg-white text-[#7A6BE4] flex justify-around items-center rounded-full xl:p-3 md:p-2.5 p-2">
      <div className="rounded-full">
        <Icon
          icon="akar-icons:chevron-left"
          color="#7A6BE4"
          width="23"
          height="18"
        />
      </div>
      <div>
        <span className="font-semibold text-sm ">
          {props.date.month} - {props.date.year}
        </span>
      </div>
      <div className="rounded-full">
        <Icon
          icon="akar-icons:chevron-left"
          color="#7A6BE4"
          width="23"
          height="18"
          rotate={2}
        />
      </div>
    </div>
  );
};

Head.defaultProps = {
  date: {
    month: "January",
    year: 2022
  }
}

export default Head;
