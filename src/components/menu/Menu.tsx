import { Layout, Menu } from 'antd';
import React from 'react';
import LOGO from '../../image/logo.png'
import {
    SearchOutlined, ShoppingCartOutlined
} from '@ant-design/icons';
import ShoppingCart from '../Cart/CartPage';
const { Header } = Layout;


const MenuCommon = () => {
    const menuItem = [
        {
            key: '1',
            label: 'ERKEK'
        },
        {
            key: '2',
            label: 'KADIN'
        },
        {
            key: '3',
            label: 'ÇOCUK'
        },
        {
            key: '4',
            label: 'MARKALAR'
        }

    ]
    return (
        <>
            <Layout className="layout">
                <Header>
                    <div style={{
                        display: "flex", alignItems: "center", justifyContent: "center"
                    }}>
                        < div style={{ display: "flex", alignItems: "center" }}>
                            <div className="logo" >
                                <img src={LOGO} alt="" width={"161px"} height={"36px"} />
                            </div>
                            <Menu
                                className='menu-cm'
                                mode="horizontal"
                                defaultSelectedKeys={['2']}
                                items={menuItem.map((item) => {
                                    return {
                                        key: item.key,
                                        label: item.label,
                                    };
                                })}
                            />
                        </div>
                        <div className='text_nav' style={{
                            display: 'flex', alignItems: 'center', marginLeft: '30px',
                        }}>
                            < SearchOutlined className='search_outlined' />
                            <ShoppingCart />
                            <p>GİRİŞ YAP / ÜYE OL</p>
                        </div>
                    </div>
                </Header>
            </Layout >

        </>
    )
}

export default MenuCommon