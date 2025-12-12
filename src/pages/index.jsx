import { useState } from "react";
import { Form } from "@/components/Form";
import { Filter } from "@/components/Filter";
import { Summary } from "@/components/Summary";
import { TaskContainer } from "@/components/TaskContainer";

export const Home = () => {
  const [taskList, setTaskList] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");

  const clearCompletedTasks = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to clear all completed tasks?"
    );

    if (!confirmClear) return;

    const remainingTasks = taskList.filter((task) => !task.isCompleted);
    setTaskList(remainingTasks);
  };

  const filteredTasks = taskList.filter((task) => {
    if (currentFilter === "active") return !task.isCompleted;
    if (currentFilter === "completed") return task.isCompleted;

    return true;
  });

  return (
    <div
      className="bg-white container flex justify-center items-start w-full h-7xl
     min-h-screen "
    >
      <div className="w-[377px] flex flex-col mt-60 ml-150 p-6 bg-white rounded-lg shadow gap-6">
        <h1 className="title font-semibold flex justify-center text-xl text-black">
          To-Do List
        </h1>

        <Form updateTaskList={setTaskList} taskListValue={taskList} />

        <Filter
          activeFilterValue={currentFilter}
          updateCurrentFilter={setCurrentFilter}
        />

        <TaskContainer
          filteredTasksValue={filteredTasks}
          taskListValue={taskList}
          updateTaskList={setTaskList}
        />

        {Boolean(taskList.length) && (
          <Summary
            handleClearCompletedTasks={clearCompletedTasks}
            taskListValue={taskList}
          />
        )}

        <div className="footer flex justify-center justify-self-end gap-1 mt-4 text-sm text-gray-500">
          <span>Powered by</span>
          <span className="text-blue-500">Sda</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
