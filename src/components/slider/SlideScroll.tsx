import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Card, Button } from "antd";
import Heart from '../../image/Heart.png'
import { NavLink } from "react-router-dom";

type ProductListProps = {
  products: any;
  onAddToCart: (cart: any) => void;
};


const SlideScoll = (props: ProductListProps) => {
  const [products, setProducts] = useState<any[]>([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(data => {
        console.log(data)
        setProducts(data)
      })
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
          <NavLink to={`/cart/`}>
            <div className="slice-image">
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={product.image} width="265" height="320" />}
                className="heart"
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Meta title={product.title} description={product.price} />
                  <Meta title="TL" />
                </div>
                <img className="heart-icon" src={Heart} alt="" />
                <Button
                  onClick={() => props.onAddToCart(product.id)} type="primary" style={{ marginTop: 15 }}>
                  Add To Cart
                </Button>
              </Card>
            </div>
          </NavLink>

        ))
        }

      </Slider >

    </div >
  );
};

export default SlideScoll;
