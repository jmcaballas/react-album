import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Album from "./components/Album";
import PhotoDetail from "./components/PhotoDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<Album />} />
          <Route path="/:id" element={<PhotoDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
