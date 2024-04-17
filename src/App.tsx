import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./page/Home";
import ProductDetail from "./page/ProductDetail";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ProductDetail/>} />
        <Route path="*" element={<a>sdasda</a>} />
      </Route>
    </Routes>
  );
}

export default App;
