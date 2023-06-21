import { useState, useEffect } from "react";
import moment from "moment";

export default function CountDown() {
  let [duration, setDuration] = useState();

  useEffect(() => {
    let currDuration = duration; //avoid elint warning ;)
    setDuration(moment().day(7).hour(23).minute(59).second(10).diff(moment()));
    // caculate time fromm now until upcomming sunday(weekend), 1000ms=1s
    setInterval(() => {
      setDuration((currDuration -= 1000));
    }, 1000);
  }, [duration]);

  const formatNumber = (num) => (num > 9 ? "" + num : "0" + num); // format time (ex: 4=>04)

  return (
    <div className="flex relative justify-center my-1">
      <div className="p-3 border-orange-600 border-4 rounded-2xl">
        <div className="px-5 inline-block py-4 mx-1 bg-yellow-200 ">
          <span className="font-bold text-3xl">
            {formatNumber(moment.duration(duration).days())}
          </span>
          <span className="block text-center text-sm">DAYS</span>
        </div>
        <div className="px-5 inline-block py-4 mx-1 bg-yellow-200 ">
          <span className="font-bold text-3xl">
            {formatNumber(moment.duration(duration).hours())}
          </span>
          <span className="block text-center text-sm">HRS</span>
        </div>
        <div className="px-5 inline-block py-4 mx-1 bg-yellow-200 ">
          <span className="font-bold text-3xl">
            {formatNumber(moment.duration(duration).minutes())}
          </span>
          <span className="block text-center text-sm">MINS</span>
        </div>
        <div className="px-5 inline-block py-4 mx- bg-yellow-200 ">
          <span className="font-bold text-3xl">
            {formatNumber(moment.duration(duration).seconds())}
          </span>
          <span className="block text-center text-sm">SECS</span>
        </div>
      </div>
      <div className="absolute font-tiltwrap px-5 text-lg bg-white bottom-0 translate-y-3 text-center">
        Left
      </div>
    </div>
  );
}
