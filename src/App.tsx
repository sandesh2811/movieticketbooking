import { Route, Routes } from "react-router-dom";
import SelectedMovie from "./Components/SelectedMovie";
import Home from "./Components/Home";
import SeatSelection from "./Components/SeatSelection";
import Movies from "./Components/Movies";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selectedMovie" element={<SelectedMovie />} />
        <Route path="/selectSeats" element={<SeatSelection />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
}

export default App;
