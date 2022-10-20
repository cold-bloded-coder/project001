import React from "react";
import { WeekCard } from "./WeekCard";
import { ProgressBar } from "./ProgressBar";

export function WeekAttendence() {
  return (
    <div className="w-56 flex flex-col justify-around bg-slate-200">
      <div className="flex flex-row justify-around items-center w-full h-2/3 ">
        <WeekCard title="Total classes" value="18"></WeekCard>
        <WeekCard title="Attended" value="12"></WeekCard>
      </div>
      <ProgressBar title="Percentage"></ProgressBar>
    </div>
  );
}
