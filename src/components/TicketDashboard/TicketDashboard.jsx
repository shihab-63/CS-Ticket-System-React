import React, { use, useState } from "react";
import Container from "../Container/Container";
import TaskStatus from "../TaskStatus/TaskStatus";
import ResolvedTask from "../ResolvedTask/ResolvedTask";
import Ticket from "../Ticket/Ticket";
import BoxSection from "../BoxSection/BoxSection";
import { toast } from "react-toastify";

const TicketDashboard = ({ ticketsPromise }) => {
  const initialTickets = use(ticketsPromise);
  const [ticketsData, setTicketsData] = useState(initialTickets);

  const [cardItems, setCardItems] = useState([]);
  const [taskItems, setTaskItems] = useState([]);

  // Handle Lifting
  const handleLifting = (clickedCard) => {
    const isExist = cardItems.find((item) => item.id === clickedCard.id);
    if (isExist) {
      return toast.warning(`${clickedCard.title} is already In-Progress.`);
    }

    const updatedCardForRightSide = {
      ...clickedCard,
      status: "In-Progress",
      statusChangedAt: new Date(),
    };
    setCardItems([...cardItems, updatedCardForRightSide]);

    const updatedTicketsData = ticketsData.map((ticket) => {
      if (ticket.id === clickedCard.id) {
        return { ...ticket, status: "In-Progress" };
      }
      return ticket;
    });

    setTicketsData(updatedTicketsData);
    toast.success(`${clickedCard.title} Added`);
  };

  // Ready to Reselved
  const handleResolved = (clickedCard) => {
    const newCard = [...taskItems, clickedCard];
    setTaskItems(newCard);

    const remaining = cardItems.filter((item) => item.id !== clickedCard.id);
    setCardItems(remaining);
    toast.success("Added Resolved Task");

    const remainingTickes = ticketsData.filter(
      (filterTicket) => filterTicket.id !== clickedCard.id,
    );
    setTicketsData(remainingTickes);
  };

  const handleRemoveResolved = (id) => {
    const remainingTasks = taskItems.filter((task) => task.id !== id);
    setTaskItems(remainingTasks);
    toast.error("Task Removed!");
  };

  return (
    <div>
      <BoxSection taskItems={taskItems} status={cardItems} />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-7">
          <div className="order-2 md:order-1 md:col-span-9">
            <h1 className="mx-3 md:mx-0 text-2xl font-bold">
              Customer Tickets
            </h1>
            <div className="grid grid-cols-1 mb-10 mx-3 md:mx-0 md:grid-cols-2 gap-6 mt-5">
              {ticketsData.map((ticket, index) => (
                <Ticket
                  handleLifting={handleLifting}
                  key={index}
                  ticket={ticket}
                />
              ))}
            </div>
          </div>
          <div className="order-1 mx-3 md:mx-0 md:order-1 col-span-1 md:col-span-3 h-fit">
            <TaskStatus
              handleResolved={handleResolved}
              status={cardItems}
              setStatus={setCardItems}
            />
            <ResolvedTask handleRemoveResolved={handleRemoveResolved} taskItems={taskItems} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TicketDashboard;
