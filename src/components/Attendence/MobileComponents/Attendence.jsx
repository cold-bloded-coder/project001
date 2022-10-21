import React from "react";

const Attendence = (props) => {
  return (
    <div className="">
      <div className="flex">
        <div className="max-[320]:h[20vh] w-[40vw] h-[40vh] bg-[#EA4D90] box-border ml-6 mr-3 rounded-lg text-white  flex flex-col ">
          <div className="w-full h-2/6 text-base box-border flex items-center justify-center px-3">
            <span>Total Absent</span>
          </div>
          <div className="w-full h-4/6 flex justify-center items-center box-border pb-12 pr-2">
            <span className="text-7xl">{props.att.abs}</span>
          </div>
        </div>
        <div className="max-[320]:h[20vh] w-[40vw] h-[40vh] bg-[#21D2FF] box-border ml-6 mr-3 rounded-lg text-white flex flex-col ">
          <div className="w-full h-2/6 text-base box-border flex items-center justify-center px-3">
            <span>Total Absent</span>
          </div>
          <div className="w-full h-4/6 flex justify-center items-center box-border pb-12 pr-2">
            <span className="text-7xl">{props.att.abs}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendence;
