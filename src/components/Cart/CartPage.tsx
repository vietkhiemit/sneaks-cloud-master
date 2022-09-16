import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Drawer } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
    ShoppingCartOutlined, PlusOutlined, MinusOutlined, DeleteOutlined
} from '@ant-design/icons';
import useCart from '../../hook/use-cart';
import { toast } from 'react-toastify';
import { ProductType } from '../../pages/types/Product';

type Props = {};

const ShoppingCart = (props: Props) => {
    const [open, setOpen] = useState(false);
    const [cartItem, setCartItem] = useState<any[]>([])

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    const navigate = useNavigate();

    const {
        cart,
        getCart,
        increaseItemInCart,
        decreaseItemInCart,
        removeItemInCart,
    } = useCart();

    var cartItemMap = getCart();


    useEffect(() => {
        const carts: any = cart
        setCartItem(carts);
    }, [cart])
    const increase = (id: any) => {
        increaseItemInCart(id, () => { toast('Thêm số lượng thành công') })
    }
    const decrease = (id: any) => {
        decreaseItemInCart(id, () => { toast('Giảm số lượng thành công') })
    }

    return (
        <>
            <div onClick={showDrawer} className="shopping-cart">
                <ShoppingCartOutlined className='shopping_cart_outlined' />
            </div>
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
                {cartItemMap.map((item: ProductType) => (
                    <div>
                        <img src={item.image} alt="" width={80} />
                        <p>{item.title}</p>
                        <p>Số lượng: {item.quantity}</p>
                        <button
                            className="increase_pop items-count btn-plus"
                            type="button"
                            onClick={() => { decrease(item.id) }}
                        >
                            <MinusOutlined />
                        </button>
                        <button
                            className="reduced_pop items-count btn-minus"
                            type="button"
                            onClick={() => { increase(item.id) }}
                        >
                            <PlusOutlined />
                        </button>

                        <span className="price">{item.price * item.quantity}₫</span>

                        <div>
                            <a
                                onClick={() => removeItemInCart(item.id)}
                            >
                                <DeleteOutlined />
                            </a>
                        </div>
                    </div>

                ))}
            </Drawer>
        </>
    );
};

export default ShoppingCart;