import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import {
    ShoppingCartOutlined, PlusOutlined, MinusOutlined, CloseOutlined
} from '@ant-design/icons';
import { ArrowRight } from 'react-bootstrap-icons';
import useCart from '../../hook/use-cart';
import { toast } from 'react-toastify';
import { ProductType } from '../../pages/types/Product';
import { Button, Drawer, Radio, Space } from 'antd';
import { formatCurrency } from '../../pages/utils/cart';


type Props = {};

const ShoppingCart = (props: Props) => {
    const [open, setOpen] = useState(false);
    const [cartItem, setCartItem] = useState<any[]>([])

    let carts: any = [];
    carts = JSON.parse(localStorage.getItem("cart") as string);
    let total = 0;

    const showDrawer = () => {
        setOpen(true);
    };


    const onClose = () => {
        setOpen(false);
    };

    const {
        cart,
        getCart,
        increaseItemInCart,
        decreaseItemInCart,
        removeItemInCart,
    } = useCart();

    var cartItemMap = getCart();
    // useEffect(() => {
    //     const carts: any = cart
    //     setCartItem(carts);
    // }, [cart])
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
            <Drawer
                title="Shopping Cart"
                placement="right"
                width={500}
                onClose={onClose}
                open={open}
                extra={
                    <Space>
                        <Button type="primary" onClick={onClose}>
                            OK
                        </Button>
                    </Space>
                }>
                {carts.map((item: ProductType) => (
                    <div className="d-flex align-items-center">
                        <img src={item.image} alt="" width={80} />
                        <div className="me-auto">
                            <div className='w-75 p-3'>
                                <span >
                                    {item.title}{" "}
                                </span>
                                <span className="text-danger" style={{ fontSize: "20px" }}>
                                    x{item.quantity}
                                </span>
                                <div className="text-muted" style={{ fontSize: "18px" }}>
                                    Price: {formatCurrency(item.price)}
                                </div>
                                <div>
                                    <span className='pe-3'>
                                        <MinusOutlined
                                            onClick={() => { decrease(item.id) }} />
                                    </span>
                                    <span>
                                        <PlusOutlined
                                            onClick={() => { increase(item.id) }}
                                        />
                                    </span>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className="text-muted" style={{ fontSize: "20px" }}>
                            {formatCurrency(item.price * item.quantity)}
                        </div>
                        <CloseOutlined
                            onClick={() => removeItemInCart(item.id)}
                        />
                        <p hidden>
                            {formatCurrency(total += item.price * item.quantity)}
                        </p>
                    </div>

                ))}
                <h3 className='mt-3 text-muted float-end'>Total: ${total}</h3>
            </Drawer>
        </>
    );
};

export default ShoppingCart;