import React from "react";
import ShowCounter from "../components/Home/ShowCounter";
import ExpiredNotice from "../components/Home/ExpiredNotice";
import { useCountdown } from "./useCountdown";

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice/>
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
