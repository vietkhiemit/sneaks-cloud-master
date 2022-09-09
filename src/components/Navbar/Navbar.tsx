import React from 'react'
import { Menu } from 'antd';

type Props = {}

const Navbar = (props: Props) => {
    const menuItem = [
        {
            key: '1',
            label: 'VANS'
        },
        {
            key: '2',
            label: '%40 İNDİRİM'
        },
        {
            key: '3',
            label: 'YENİ GELENLER'
        },
        {
            key: '4',
            label: 'PUMA'
        },
        {
            key: '5',
            label: 'BABALAR GÜNÜ'
        },
        {
            key: '6',
            label: 'KOŞU'
        }

    ]
    return (
        <>
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={menuItem.map((item) => {
                    return {
                        key: item.key,
                        label: item.label,
                    };
                })}
            />
        </>
    )
}

export default Navbar