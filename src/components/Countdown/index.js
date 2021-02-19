import { useEffect, useState } from "react";

const Component = () => {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // It is a reference to any side effects - such as re-rendering.
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(() => timeRemaining - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return <p>{timeRemaining} seconds</p>;
};

export default Component;
