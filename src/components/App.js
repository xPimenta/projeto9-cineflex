import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import ExplorePage from "./ExplorePage";
import ImagePage from "./ImagePage";
import AddImagePage from "./AddImagePage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/sessoes/:movieId" element={<ImagePage />} />
        <Route path="/add-image" element={<AddImagePage />} />
      </Routes>
    </BrowserRouter>
  );
}
