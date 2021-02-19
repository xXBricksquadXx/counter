import { useState } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <main className="container mx-auto flex flex-col items-center">
      <h1 className="text-3xl font-bold uppercase">Todo</h1>
      <form className="flex flex-col items-center mt-2">
        <div className="flex flex-col items-center mt-2">
          <label htmlFor="todo">What needs to be done?</label>
          <input type="text" id="todo" />
        </div>

        <button
          type="submit"
          className="bg-indigo-700 text-indigo-200 rounded mt-4 px-4 py-2"
        >
          Add #{todoList.length + 1}
        </button>
      </form>
    </main>
  );
};

export default Todo;
