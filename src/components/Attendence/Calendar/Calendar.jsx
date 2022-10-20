import React from "react";
import Body from "./Body";
import Head from "./Head";
import Event from "./Event";

const Calendar = () => {
  return (
    <div>
      <Head date={{ month: "December", year: 2022 }}></Head>
      <div className="w-full h-8"></div>
      <Body></Body>
      <Event name="Raksha Bandhan" date={{value: 15, day: "Thu", month: "Jan", year: 2022}}></Event>
      <Event name="Dassera" date={{value: 5, day: "Fri", month: "Feb", year: 2022}}></Event>
      <Event name="Republic Day" date={{value: 26, day: "Mon", month: "Jan", year: 2022}}></Event>
    </div>
  );
};

export default Calendar;
