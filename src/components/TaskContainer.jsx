import React from "react";
import { Task } from "./Task";

export const TaskContainer = ({
  filteredTasksValue,
  taskListValue,
  updateTaskList,
}) => {
  const toggleCompleted = (taskId) => {
    const updatedList = taskListValue.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );

    updateTaskList(updatedList);
  };

  const deleteTask = (taskId) => {
    const updatedList = taskListValue.filter((task) => task.id !== taskId);
    updateTaskList(updatedList);
  };

  return (
    <div className="task-list">
      {filteredTasksValue.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleCompleted={toggleCompleted}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};
