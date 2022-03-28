import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import MovieList from "./MovieList";
import Sessions from "./Sessions";
import Seat from "./Seat";
import Sucess  from "./Sucess"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/sessoes/:movieId" element={<Sessions />} />
        <Route path="/assentos/:sessionId" element={<Seat />} />
        <Route path="/sucesso/" element={<Sucess />} />
      </Routes>
    </BrowserRouter>
  );
}
