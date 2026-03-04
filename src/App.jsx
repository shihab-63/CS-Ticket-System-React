import { Suspense } from "react";
import "./App.css";
import BoxSection from "./components/BoxSection/BoxSection";
import Navbar from "./components/Navbar/Navbar";
import TicketDashboard from "./components/TicketDashboard/TicketDashboard";
import Footer from "./Footer/Footer";

// Ticket Data
const fatchTickets = async () => {
  const res = await fetch("/ticketsData.json");
  return res.json();
};
const ticketsPromise = fatchTickets();

function App() {
  return (
    <div className="bg-[#F5F5F5] min-h-screen w-full">
      <Navbar />
      <BoxSection />
      <Suspense
        fallback={
          <div className="flex my-80 justify-center items-center mt-8">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <TicketDashboard ticketsPromise={ticketsPromise} />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
