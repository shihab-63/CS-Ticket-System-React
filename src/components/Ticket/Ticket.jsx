import React from "react";
import { CiCalendar } from "react-icons/ci";

const Ticket = ({ ticket }) => {
  const { id, title, customer, description, priority, status, createdAt } =
    ticket;
  const handlePriority = (priority) => {
    if (priority === "HIGH PRIORITY") {
      return `text-red-600`;
    } else if (priority === "MEDIUM PRIORITY") {
      return `text-yellow-500`;
    } else {
      return `text-green-600`;
    }
  };
  return (
    <div className="">
      <div className="bg-white cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:shadow-xl p-4 rounded-xl">
        {/* Title, Status */}
        <div className="flex justify-between items-center">
          <h1 className=" md:text-xl font-bold md:font-semibold">{title}</h1>
          <div className="flex bg-[#B9F8CF] py-1 px-3 rounded-2xl items-center gap-1">
            <p className="w-4 h-4 bg-[#02A53B] rounded-full"></p>
            <p className="font-semibold">{status}</p>
          </div>
        </div>
        {/* Description */}
        <div className="my-3">
          <p className="md:text-lg text-gray-500">{description}</p>
        </div>

        {/* End */}
        <div className="mt-1.5 space-y-2 md:flex justify-between">
          <div className="flex items-center justify-between md:justify-baseline gap-4">
            <p className=" text-[#627382]">#{id}</p>
            <p className={`${handlePriority(priority)}`}>{priority}</p>
          </div>
          <div className="flex justify-between md:justify-baseline">
            <div className="flex items-center gap-1">
              <p className="text-[#627382] mr-4">{customer}</p>
            </div>
            <div className="flex items-center">
              <CiCalendar className="text-2xl" />
              <span className=" text-[#627382] ml-1">{createdAt}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
