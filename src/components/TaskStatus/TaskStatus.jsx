import React from "react";

const TaskStatus = ({ status, handleResolved }) => {
  return (
    <>
      <div className="bg-gray-200 border-gray-400/10 border border-dashed  mt-12 p-3 rounded-2xl">
        <h1 className="text-2xl text-center font-semibold">Task Status</h1>

        {status.length === 0 ? (
          <div className="text-center mt-3 p-5">
            <p className="text-lg font-semibold text-gray-600">
              No Completed Tasks Found!
            </p>
            <h2 className="text-lg text-gray-500">
              Click on a ticket to start working!
            </h2>
          </div>
        ) : (
          status.map((card) => (
            <div
              key={card.id}
              className="bg-[#FAF6C9] rounded-xl mt-3 py-5 px-3 w-full"
            >
              <h1 className="text-xl font-semibold">{card.title}</h1>
              <button
                onClick={() => handleResolved(card)}
                className="bg-[#02A53B] w-full mt-5 py-1 rounded-lg active:scale-95 transition-all px-2 text-lg text-white cursor-pointer text-center"
              >
                Complete
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default TaskStatus;
