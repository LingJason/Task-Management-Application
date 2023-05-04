import React from "react";
import Home from "./components/Home";
import CreateTask from "./components/CreateTask";
import EditTask from "./components/EditTask";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateTask />} />
          <Route path="/edit" element={<EditTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
