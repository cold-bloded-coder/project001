import React from "react";
import { Card } from "./Card";
import { WeekAttendence } from "./WeekAttendence";
import MediaQuery from "react-responsive";
import Mobile from "./Mobile";
import Navbar from "../Navbar";

const Attendence = () => {
  return (
    <div>
      <div className="">
        <MediaQuery maxWidth={425}>
          <Mobile></Mobile>
        </MediaQuery>
        <div className="flex">

            <Card></Card>
            <WeekAttendence></WeekAttendence>
        </div>
      </div>
    </div>
  );
};

export default Attendence;
