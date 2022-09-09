import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Rectangle from "../../image/rectangle7.png";
import { Card } from "antd";
import Heart from '../../image/Heart.png'
import axios from 'axios'

type Props = {
};


const SlideScoll = () => {
  const [posts, setPosts] = useState<any[]>([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(data => {
        console.log(data)
        setPosts(data)
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
        {posts.map((post) => (
          <div className="slice-image">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={post.image} width="265" height="320" />}
              className="heart"
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Meta title={post.title} description={post.price} />
                <Meta title="TL" />
              </div>
              <img className="heart-icon" src={Heart} alt="" />
            </Card>
          </div>
        ))
        }

      </Slider >

    </div >
  );
};

export default SlideScoll;
