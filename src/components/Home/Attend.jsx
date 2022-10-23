import React from "react";

const Attend = (props) => {
  return (
    <div className="flex justify-around md:w-[30%] md:h-[25vh] xl:h-[30vh] w-[100vw] box-border gap-3 md:my-0 my-4">
      <div className="md:h-full md:w-[50%] w-[40%] h-[25vh]
       md:text-[#EA4D90] md:bg-white
        md:hover:text-white md:hover:bg-[#EA4D90]
        text-white bg-[#EA4D90] 
        drop md:rounded-lg rounded-md p-4 flex flex-col justify-around items-center
        ">
        <div >
          <span className="md:text-sm xl:text-xl scale-105">Total Absent</span>
        </div>
        <div className="">
          <span className="md:text-7xl xl:text-9xl text-8xl">{props.attendence.abs}</span>
        </div>
      </div>
      <div className="md:h-full md:w-[50%] w-[40%] h-[25vh]
       md:text-[#21D2FF] md:bg-white
        md:hover:text-white md:hover:bg-[#21D2FF]
        text-white bg-[#21D2FF] 
        drop md:rounded-lg rounded-md p-4 flex flex-col justify-around items-center
        ">
        <div >
          <span className="md:text-sm xl:text-xl scale-105">Total Absent</span>
        </div>
        <div className="">
          <span className="md:text-7xl xl:text-9xl text-8xl">{props.attendence.abs}</span>
        </div>
      </div>
    </div>
  );
};


Attend.defaultProps = {
  attendence : {
    abs: 5, 
    prs: 15
  }
}

export default Attend;