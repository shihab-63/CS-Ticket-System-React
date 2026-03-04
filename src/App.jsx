import "./App.css";
import CardSection from "./components/CardSection/CardSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="bg-[#F5F5F5] min-h-screen w-full">
      <Navbar />
      <CardSection />
    </div>
  );
}

export default App;
