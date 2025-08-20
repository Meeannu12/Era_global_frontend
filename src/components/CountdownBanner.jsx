import React, { useState, useEffect } from "react";

const CountdownBanner = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = null; // Countdown finished
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return <div className="text-center text-2xl sm:text-3xl md:text-4xl font-bold p-4 text-red-600">Countdown Finished!</div>;

  return (
    <div
      className="text-center text-xl sm:text-2xl md:text-4xl lg:text-6xl font-extrabold p-2 sm:p-0 text-white bg-red-500 rounded-lg my-4"
    >
      {timeLeft.days} days: {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
      {timeLeft.seconds}s (Coming Live)
    </div>
  );
};

export default CountdownBanner;
