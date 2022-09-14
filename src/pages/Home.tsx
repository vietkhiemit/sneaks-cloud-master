import React from 'react'
import { Layout } from "antd";
import MenuCommon from '../components/menu/Menu';
import Slide from '../components/slider/Slide';
import Navbar from '../components/Navbar/Navbar';
import SlideScoll from '../components/slider/SlideScroll';
import Banner from '../components/banner/Banner';
import Partners from '../components/partner/Partners ';
import ImageBanner from '../components/imageBanner/imageBanner';
import BannerBottom from '../components/banner/BannerBottom';
import ProductCart from '../components/productCart/ProductCart';
import InstaImage from '../components/instaImage/InstaImage';
import ShoppingInfo from '../components/shoppingInfo/ShoppingInfo';
import HeadBottom from '../components/HeadBottom/HeadBottom';
import FooterCommon from '../Footer/Footer';

type ProductType = {
    id: string,
    title: string,
    images: string,
    price: number,
    description: string,
    category: string
}
const { Header } = Layout;

const HomePage = () => {
    return (
        <div>
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
        </div>
    )
}

export default HomePage