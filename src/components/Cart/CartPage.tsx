import React from 'react'
import 'antd/dist/antd.css';
import { Table } from 'antd';
import MenuCommon from '../menu/Menu';

type Props = {}

const columns = [
    {
        title: 'Title',
        dataIndex: 'name',
    },
    {
        title: 'Price',
        dataIndex: 'age',
    },
    {
        title: 'Image',
        dataIndex: 'address',
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
];

const CartPage = (props: Props) => {
    let cart: any = [];
    cart = JSON.parse(localStorage.getItem("cart") as string);
    let total = 0;
    return (
        <div>
            <MenuCommon />
            <h1>Cart</h1>
            <Table columns={columns} dataSource={data} size="middle" />
        </div>
    )
}

export default CartPage