import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import MenuCommon from "./components/menu/Menu";
import Slide from "./components/slider/Slide";
import Navbar from "./components/Navbar/Navbar";
import SlideScoll from "./components/slider/SlideScroll";
import Banner from "./components/banner/Banner";
import { Layout } from "antd";
import ImageBanner from "./components/imageBanner/imageBanner";
import Partners from "./components/partner/Partners ";
import BannerBottom from "./components/banner/BannerBottom";
import ProductCart from "./components/productCart/ProductCart";
import InstaImage from "./components/instaImage/InstaImage";
import ShoppingInfo from "./components/shoppingInfo/ShoppingInfo";
import HeadBottom from "./components/HeadBottom/HeadBottom";
import FooterCommon from "./Footer/Footer";

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="app">
      <Layout>
        <Header>
          <MenuCommon />
        </Header>
      </Layout>
      <div className="slide" style={{ marginTop: " 30px" }}>
        <Slide />
      </div>
      <Navbar />
      <div className="slideScoll">
        <SlideScoll />
      </div>
      <div className="newfeed">
        <Banner />
      </div>
      <div>
        <Partners />
      </div>
      <div className="image-banner">
        <ImageBanner />
      </div>
      <div>
        <BannerBottom />
      </div>
      <div className="product-slider slideScoll" style={{ marginBottom: 20 }}>
        <h2>ÇOK SATANLAR</h2>
        <SlideScoll />
      </div>
      <div className="product-cart">
        <ProductCart />
      </div>
      <div className="slide-cart-bot">
        <SlideScoll />
      </div>
      <div className="instagram">
        <InstaImage />
      </div>
      <div className="shopping-info">
        <ShoppingInfo />
      </div>
      <div className="head">
        <HeadBottom />
      </div>
      <div>
        <FooterCommon />
      </div>
    </div >
  );
}

export default App;
