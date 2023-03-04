import { useState, useEffect } from "react";
import moment from "moment";

export default function CountDown() {
  const [duration, setDuration] = useState(
    moment.duration(moment().endOf("week").diff(moment()))
  );
  const interval = 1000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDuration(
        moment.duration(duration.asMilliseconds() - interval, "milliseconds")
      );
    }, interval);
    return () => clearInterval(intervalId);
  }, [duration]);

  return (
    <div>
      {duration.days()} days {duration.hours()} hours {duration.minutes()}{" "}
      minutes {duration.seconds()} seconds
    </div>
  );
}
