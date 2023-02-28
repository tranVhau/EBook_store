import React from "react";
import Marquee from "react-fast-marquee";

function AlertCross() {
  return (
    <Marquee
      className="bg-red-600 text-yellow-400 font-semibold"
      speed={90}
      gradientWidth={20}
    >
      <span>crossing alert</span>
    </Marquee>
  );
}

export default AlertCross;
