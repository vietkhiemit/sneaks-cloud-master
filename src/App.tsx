import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { render } from "react-dom";
import { Routes, Route, } from "react-router-dom";
import WebsiteLayout from "./pages/layouts/WebsiteLayout";
import HomePage from "./pages/Home";
import CartPage from "./components/Cart/CartPage";
import { ToastContainer, toast } from "react-toastify";
import { addToCart } from "./pages/utils/cart";
import { read } from "./components/api";
import { ProductType } from "./pages/types/Product";


function App() {
  const [cart, setCart] = useState<ProductType[]>([]);

  const onHandleAddToCart = async (id: number) => {
    const { data } = await read(id);
    addToCart({ ...data, quantity: 1 }, function () {
      toast.success(`Thêm ${data.name} vào giỏ hàng thành công!`);
      setCart(JSON.parse(localStorage.getItem("cart") as string));
    });
  };
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<WebsiteLayout />}
        >
          <Route
            index
            element={
              <HomePage onAddToCart={onHandleAddToCart} />
            }
          />
          <Route
            path="cart"
            element={
              <CartPage />
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </div >
  );
}

export default App;
