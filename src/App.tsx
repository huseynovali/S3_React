import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./page/Home";
import ProductDetail from "./page/ProductDetail";
import Login from "./page/Login";
import Register from "./page/Register";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ProductDetail/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
      </Route>
    </Routes>
  );
}

export default App;
