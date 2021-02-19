import PropTypes from "prop-types";

const Form = ({ submitHandler }) => {
  return (
    <form
      className="container mx-auto flex flex-col items-center pt-4"
      onSubmit={submitHandler}
    >
      <label htmlFor="start-timer" className="sr-only">
        Start Countdown:
      </label>
      <input type="number" id="start-timer" placeholder="How much time?" />

      <button
        type="submit"
        className="bg-indigo-800 text-indigo-300 rounded mt-4 px-4 py-2"
      >
        Start!
      </button>
    </form>
  );
};

Form.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default Form;
