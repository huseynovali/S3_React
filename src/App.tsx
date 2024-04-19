import { Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./page/Home";
import ProductDetail from "./page/ProductDetail";
import Login from "./page/Login";
import Register from "./page/Register";
import Admin from "./page/Admin";
import AdminProductList from "./components/Admin/AdminProductList";
import AddProduct from "./components/Admin/AddProduct";
import PrivatePage from "./router/PrivatePage";
import AuthPage from "./router/AuthPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ProductDetail />} />
        <Route element={<AuthPage />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Route>
      <Route element={<PrivatePage />}>
        <Route path="admin" element={<Admin />}>
          <Route path="products" element={<AdminProductList />} />
          <Route path="addproduct" element={<AddProduct />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
