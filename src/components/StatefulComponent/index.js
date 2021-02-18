import { useEffect, useState } from "react";

function StatefulComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(() => seconds + 1);
    }, 1000);

    //A return on a useEffect cleans up and memory leaks
    return () => {
      clearInterval(intervalId);
    };
  });

  return <p>Seconds: {seconds}</p>;
}

export default StatefulComponent;
