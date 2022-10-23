import React from "react";

const Event = (props) => {
  return (
    <div className="w-[90vw] mx-auto my-3 rounded-md p-3 shadow-[-1px_-1px_8px_rgba(0,0,0,.3)] flex justify-between">
      <div className="flex flex-col w-5/6 h-full">
        <span className="text-xl">{props.name}</span>
        <span>
          {props.date.day} - {props.date.value}th {props.date.month}{" "}
          {props.date.year}
        </span>
      </div>
      <div id="div1" className="w-[15%] my-1 flex justify-center items-center rounded-lg bg-[#7A6BE4]">
        <span className="text-xl font-bold text-white">{props.date.value}</span>
      </div>
    </div>
  );
};


export default Event;
