import { useEffect, useState, useRef } from "react";
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
  const [cartItem, setCartItem] = useState<any[]>([])
  let cart: any = [];
  const ref = useRef();
  useEffect(() => {
    ref.current = cart;
    setCartItem([]);
  }, [cart]);

  // useEffect(() => {
  //   setCartItem(cart);
  // })

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
