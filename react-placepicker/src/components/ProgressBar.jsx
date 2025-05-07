import React, { useEffect, useState } from "react";

const ProgressBar = ({ timer }) => {
  const [remaningTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL STARTED");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      console.log("INTERVAL CLEARED");
      clearInterval(interval);
    };
  }, []);

  return <progress value={remaningTime} max={timer} />;
};

export default ProgressBar;
