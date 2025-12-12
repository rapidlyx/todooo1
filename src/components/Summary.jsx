import React from "react";

export const Summary = ({ handleClearCompletedTasks, taskListValue }) => {
  const completedCount = taskListValue.filter(
    (task) => task.isCompleted
  ).length;

  return (
    <div className="summary flex justify-between items-center mt-4 text-sm text-gray-600">
      <span>{completedCount} task completed</span>

      <button
        onClick={handleClearCompletedTasks}
        className="clear text-[#EF4444] hover:truncate"
      >
        Clear Completed
      </button>
    </div>
  );
};
