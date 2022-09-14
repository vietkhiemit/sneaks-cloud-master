import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Routes, Route, } from "react-router-dom";
import WebsiteLayout from "./pages/layouts/WebsiteLayout";
import HomePage from "./pages/Home";
import CartPage from "./components/Cart/CartPage";
import { ToastContainer, toast } from "react-toastify";
import SlideScoll from "./components/slider/SlideScroll";
import ProductDetail from "./components/productPage/productDetail";


function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path={'products'}>
            <Route index element={<SlideScoll />} />
            <Route path={':id'} element={<ProductDetail />} />
          </Route>
          <Route path='cart' element={<CartPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div >
  );
}

export default App;
