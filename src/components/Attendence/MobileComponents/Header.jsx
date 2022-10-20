import React from "react";
import { Icon } from "@iconify/react";

const Header = (props) => {
  return (
    <div className="h-12 w-100vw pt-2.5 bg-[#7A6BE4] flex items-center rounded-t-2xl">
      <div className="w-2/3 h-full flex items-center">
        <span className="text-white text-lg font-medium pl-8 pt-2">{props.title}</span>
      </div>
      <div className="pr-8 w-1/3 h-full flex justify-end">
        <Icon
          icon="charm:menu-hamburger"
          color="white"
          width="29"
          height="34"
        />
      </div>
    </div>
  );
};

export default Header;
