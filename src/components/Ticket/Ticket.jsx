import React from "react";
import { CiCalendar } from "react-icons/ci";

const Ticket = ({ ticket, handleLifting }) => {
  const { id, title, customer, description, priority, status, createdAt } =
    ticket;

  const handlePriority = (priority) => {
    if (priority === "HIGH PRIORITY") return `text-red-600`;
    if (priority === "MEDIUM PRIORITY") return `text-yellow-500`;
    return `text-green-600`;
  };

  return (
    <div className="">
      <div
        onClick={() => handleLifting(ticket)}
        className="bg-white cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:shadow-xl p-4 rounded-xl"
      >
        <div className="flex justify-between items-center">
          <h1 className="md:text-xl font-bold md:font-semibold line-clamp-1 pr-2">
            {title}
          </h1>

          <div
            className={`flex py-1 px-3 rounded-2xl items-center gap-1.5 whitespace-nowrap 
            ${status === "Open" ? "bg-[#B9F8CF]" : status === "In-Progress" ? "bg-[#FEF6C7]" : "bg-teal-100"}`}
          >

            <span
              className={`w-2.5 h-2.5 rounded-full 
              ${status === "Open" ? "bg-[#02A53B]" : status === "In-Progress" ? "bg-[#FEBB0C]" : "bg-teal-500"}`}
            ></span>

            {/* Status Text */}
            <p className="font-semibold text-sm text-gray-700">{status}</p>
          </div>
        </div>

        {/* Description */}
        <div className="my-3">
          <p className="md:text-lg text-gray-500 line-clamp-2">{description}</p>
        </div>

        {/* Footer Details */}
        <div className="mt-1.5 space-y-2 md:flex justify-between">
          <div className="flex items-center justify-between md:justify-baseline gap-4">
            <p className="text-[#627382]">#{id}</p>
            <p className={`${handlePriority(priority)} text-sm font-bold`}>
              {priority}
            </p>
          </div>
          <div className="flex justify-between md:justify-baseline">
            <div className="flex items-center gap-1">
              <p className="text-[#627382] mr-4 text-sm font-medium">
                {customer}
              </p>
            </div>
            <div className="flex items-center">
              <CiCalendar className="text-xl" />
              <span className="text-[#627382] ml-1 text-sm">{createdAt}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
