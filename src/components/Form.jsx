import { useState } from "react";

export const Form = ({ updateTaskList, taskListValue }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTask = {
      id: Date.now(),
      text: inputValue,
      isCompleted: false,
    };

    updateTaskList([newTask, ...taskListValue]);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className=" flex gap-2.5">
      <input
        type="text"
        className="task-input form py-2 px-4 border rounded-md h-10 w-[280px]"
        placeholder="Add new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="px-3 py-1 rounded-md border transition bg-blue-500">
        Add
      </button>
    </form>
  );
};
