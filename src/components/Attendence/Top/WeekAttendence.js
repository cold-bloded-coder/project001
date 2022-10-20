import React from "react";
import { WeekCard } from "./WeekCard";
import { ProgressBar } from "./ProgressBar";

export function WeekAttendence() {
  return (
    <div className="w-56 flex flex-col bg-white drop-shadow-[0_0_20px_rgba(0,0,0,.25)]">
      <div className="flex flex-row justify-around items-center w-full h-1/2 my-auto ">
        <WeekCard title="Total classes" value="18"></WeekCard>
        <WeekCard title="Attended" value="12"></WeekCard>
      </div>
      <ProgressBar title="Percentage"></ProgressBar>
    </div>
  );
}
