import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./page/Home";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<a>dashboard</a>} />
        <Route path="*" element={<a>sdasda</a>} />
      </Route>
    </Routes>
  );
}

export default App;
