const Form = () => (
  <form className="container mx-auto flex flex-col items-center pt-4">
    <label htmlFor="start-timer" className="sr-only">
      Start Countdown:
    </label>
    <input type="number" id="start-timer" placeholder="How much time?" />

    <button
      type="submit"
      className="bg-green-500 text-white rounded mt-4 px-4 py-2"
    >
      Start!
    </button>
  </form>
);

export default Form;
