import React, { use, useState } from "react";
import Container from "../Container/Container";
import TaskStatus from "../TaskStatus/TaskStatus";
import ResolvedTask from "../ResolvedTask/ResolvedTask";
import Ticket from "../Ticket/Ticket";
import BoxSection from "../BoxSection/BoxSection";
import { toast } from "react-toastify";

const TicketDashboard = ({ ticketsPromise }) => {
  const ticketsData = use(ticketsPromise);

  // Handle Lifting
  const [cardItems, setCardItems] = useState([]);
  const handleLifting = (cards) => {
    const cardHere = cardItems.find((item) => item.id === cards.id);
    if(cardHere) {
      return toast.warning("Payment Failed - Card Declined is now In-Progress.")
    }
    const newCards = [...cardItems, cards];
    setCardItems(newCards);
  };

  return (
    <div>
      {/* Box Container */}
      <BoxSection status={cardItems} />

      {/* Main Container */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-7">
          {/* Left Side Ticket */}
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
          {/* Right Side Task */}
          <div className="order-1 mx-3 md:mx-0 md:order-1 col-span-1 md:col-span-3 h-fit">
            <TaskStatus status={cardItems} setStatus={setCardItems} />
            <ResolvedTask />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TicketDashboard;
