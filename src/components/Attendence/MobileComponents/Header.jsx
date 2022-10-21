import React from "react";
import { Icon } from "@iconify/react";
import Calendar from "../Calendar/Calendar";

const Header = (props) => {
  return (
    <div className="h-15 w-100vw py-2.5 bg-[#7A6BE4] flex justify-center items-center rounded-lg relative z-[-2]">
        <span className="text-white text-lg font-medium pb-5">{props.title}</span>
    </div>
  );
};

export default Header;
