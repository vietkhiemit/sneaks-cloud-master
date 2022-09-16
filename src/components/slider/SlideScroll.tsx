import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Card, Button } from "antd";
import Heart from '../../image/Heart.png'
import { Link, NavLink } from "react-router-dom";
import axios from "axios"
import { getProducts } from "../../api/product";
import { toast } from "react-toastify";
import useCart from "../../hook/use-cart";

type ProductType = {
  id: string,
  title: string,
  image: string,
  price: number,
  description: string,
  category: string
}


const SlideScoll = () => {
  const [products, setProducts] = useState<ProductType[]>([])
  const { addToCart } = useCart()
  const handleProducts = async () => {
    const response = await getProducts();
    setProducts(response.data);
  }

  useEffect(() => {
    handleProducts();
  }, [])

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

    ],
  };

  const { Meta } = Card;
  return (
    <div className="slide-scroll-wrapper">
      <Slider {...settings}>
        {products.map((product) => (
          <div className="slice-image">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={product.image} width="265" height="320" />}
              className="heart"
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Link to={`/products/${product.id}`}>
                  <Meta title={product.title} description={product.price} />
                  <Meta title="TL" />
                </Link>
              </div>
              <img className="heart-icon" src={Heart} alt="" />
              <Button
                className="btn-add"
                type="primary"
                onClick={() => addToCart(product, () => { toast('Thêm thành công') })}
              >Add To Cart</Button>
            </Card>
          </div>

        ))
        }

      </Slider >

    </div >
  );
};

export default SlideScoll;
