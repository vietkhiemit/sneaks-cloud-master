import { useEffect, useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Routes, Route, } from "react-router-dom";
import WebsiteLayout from "./pages/layouts/WebsiteLayout";
import HomePage from "./pages/Home";
import { ToastContainer, toast } from "react-toastify";
import SlideScoll from "./components/slider/SlideScroll";
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path={'products'}>
            <Route index element={<SlideScoll />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div >
  );
}

export default App;
