import { useEffect, useState } from "react";
import Form from "./Form";

// This fxn. is not dependent on any state in the component
function handleSubmit(ev) {
  ev.preventDefault();
  console.log("submitted!");
}

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

  return (
    <>
      <Form submitHandler={handleSubmit} />
      <p className="mt-4 text-6xl text-center">{timeRemaining} seconds</p>
    </>
  );
};

export default Component;
