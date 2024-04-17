import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./page/Home";
import ProductDetail from "./page/ProductDetail";
import Login from "./page/Login";
import Register from "./page/Register";
import Admin from "./page/Admin";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ProductDetail/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="admin" element={<Admin/>}/>
      </Route>
    </Routes>
  );
}

export default App;
