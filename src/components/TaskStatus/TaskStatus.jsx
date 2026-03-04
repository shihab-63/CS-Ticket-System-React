import React from "react";

const TaskStatus = () => {
  return (
    <>
      <div className="bg-gray-200 h-40 border-gray-400 border border-dashed  mt-12 p-3 rounded-2xl">
        <h1 className="text-2xl font-semibold">Task Status</h1>
        <div className="text-center mt-3 p-5">
          <p className="text-lg font-semibold">No Tasks In Progress!</p>
          <h2 className="text-lg text-gray-500">Click on a ticket to start working!</h2>
        </div>
      </div>
    </>
  );
};

export default TaskStatus;
