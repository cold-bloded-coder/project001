import React from "react";
import { Card } from "./Card";
import { WeekAttendence } from "./WeekAttendence";
import MediaQuery from "react-responsive";
import Mobile from "./Mobile";

const Attendence = () => {
  return (
    <div>
      <div className="">
        <MediaQuery maxWidth={425}>
          <Mobile></Mobile>
        </MediaQuery>
        <MediaQuery minWidth={769}>
          {/* <Card></Card>
        <WeekAttendence></WeekAttendence> */}
        </MediaQuery>
      </div>
    </div>
  );
};

export default Attendence;
