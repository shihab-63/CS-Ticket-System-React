import React from "react";

const ResolvedTask = () => {
  return (
    <>
      <div className="bg-gray-200 border-gray-400/10 border border-dashed mt-12 p-3 rounded-2xl">
        <h1 className="text-2xl font-semibold ">Resolved Task</h1>
        <div className="text-center mt-3 p-5">
          <p className="text-lg font-semibold text-gray-600">
            No Completed Tasks Found!
          </p>
          <h2 className="text-lg text-gray-500">
            Click on a ticket to start working!
          </h2>
        </div>
      </div>
    </>
  );
};

export default ResolvedTask;
