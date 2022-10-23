import React from "react";

import Header from "./Header";
import Card from "./Card";
import Attend from "./Attend";
import Calendar from "./Calendar";

const Attendence = () => {
  return (
    <div>
      <Header title="Attendence" />
      <div className="md:flex ">
        <Card />
        <Attend />
        <Calendar />

        {/* <Attend att={{abs: 21}}/> */}
      </div>
    </div>
  );
};

export default Attendence;
