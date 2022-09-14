
import axios from "axios"
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { getProduct, getProducts } from "../../api/product";

type ProductType = {
    id: string,
    title: string,
    images: string,
    price: number,
    description: string,
    category: string
}

function ProductDetail() {

    // Một sản phẩm
    const [products, setProducts] = useState<ProductType>();
    const { id } = useParams();

    // Số lượng
    let [count, setCount] = useState<number>(1);

    // Tất cả sản phẩm
    const [allProducts, setGetAllProducts] = useState<ProductType[]>([]);


    const next = () => {
        setCount(count += 1);
    }


    const prev = () => {
        setCount(count -= 1);
    }
    // Một sản phẩm
    const handleProducts = async () => {
        const response = await getProduct(id);
        console.log(response);
        setProducts(response.data);
    }

    // Tất cả sản phẩm
    const handleAllProducts = async () => {
        const response = await getProducts();
        setGetAllProducts(response.data);
    }

    let cart: any = [];
    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart") || "");
    }

    const handleCart = () => {
        const addCart = {
            id: products?.id,
            title: products?.title,
            price: products?.price,
            quantity: count,
            description: products?.description,
            category: products?.category,
            images: products?.images,
        }
        cart.push(addCart);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    useEffect(() => {
        handleProducts();
        handleAllProducts();
    }, [])

    console.log(products?.category);


    return (
        <React.Fragment>
            <div className="w-full h-auto">
                <div className="text-black w-5/6 m-auto h-auto">
                    <div style={{ borderBottom: '1px solid #ededed' }} className='flex pb-2 text font-medium'>
                        Trang chủ <div className="mt-1 mx-2"><FaArrowAltCircleRight /></div> Chi tiết sản phẩm
                    </div>
                    <div className="flex mt-3 w-full">
                        <div className="w-2/4">
                            <img src={products?.images} alt="" />
                        </div>
                        <div className="w-2/4 mt-20 flex flex-col items-start">
                            <div className='text-4xl text font-medium'>{products?.title}</div>
                            <div className="mt-3 text">{products?.description}</div>
                            <div className="mt-3 text-red-500 font-bold text">{products?.price} ₫</div>
                            <div className="mt-3 flex">
                                <div className='mt-1 mr-2'>Số lượng:</div>
                                <div className='flex'>
                                    <div className='w-10 h-8 bg-[#b9b4c7] rounded-md flex cursor-pointer items-center justify-center' onClick={() => next()}>+</div>
                                    <input style={{ border: '1px solid gray' }} value={count} type="text" className='w-8 mx-3 rounded-sm h-8 pl-3' />
                                    <div className='w-10 h-8 bg-[#b9b4c7] rounded-md flex cursor-pointer items-center justify-center' onClick={() => prev()}>-</div>
                                </div>
                                <button onClick={() => handleCart()} style={{ border: '1px solid gray' }} className="px-4 text cursor-pointer rounded-md border-none bg-red-500 text-white ml-2 h-8 flex justify-center items-center">
                                    Thêm vào giỏ hảng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default ProductDetail;