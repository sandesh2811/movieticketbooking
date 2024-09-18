import { Route, Routes } from "react-router-dom";
import SelectedMovie from "./Components/Redirects/SelectedMovie";
import Home from "./Components/Front/Home";
import SeatSelection from "./Components/Redirects/SeatSelection";
import Movies from "./Components/Redirects/Movies";
import TicketSummary from "./Components/Redirects/TicketSummary";
// Need to implement code splitting.

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selectedMovie" element={<SelectedMovie />} />
        <Route path="/selectSeats" element={<SeatSelection />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/ticketSummary" element={<TicketSummary />} />
      </Routes>
    </>
  );
}

export default App;
