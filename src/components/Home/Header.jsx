import React from "react";
import { Icon } from "@iconify/react";

const Header = (props) => {
  return (
    <div className=" md:bg-white  bg-[#7A6BE4] md:shadow[2px_0_5px_rgba(0,0,0,0.5) rounded-full md:rounded-none px-5 py-2 text-center md:text-start">
        <span className="md:text-black text-white text-lg font-medium">{props.title}</span>
    </div>
  );
};

export default Header;
