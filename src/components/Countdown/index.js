import { useEffect, useState } from "react";
import Form from "./Form";

const Component = () => {
  const [timeRemaining, setTimeRemaining] = useState(0);

  function handleSubmit(ev) {
    ev.preventDefault();

    setTimeRemaining(() => ev.target.elements[0].value);
  }

  // It is a reference to any side effects - such as re-rendering.
  useEffect(() => {
    if (timeRemaining > 0) {
      const intervalId = setInterval(() => {
        setTimeRemaining(() => timeRemaining - 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  });

  return (
    <>
      <Form submitHandler={handleSubmit} />

      {/* TODO: If timeRemaining < 3, make this text red. */}
      <p
        className={`mt-4 text-6xl text-center ${
          timeRemaining <= 3 && timeRemaining > 0
            ? "animate-ping text-red-500"
            : ""
        }`}
      >
        {timeRemaining}
      </p>
    </>
  );
};

export default Component;
