import React from 'react'
import { Input } from 'antd';
import Facebook from '../../image/Facebook.png'
import Twitter from '../../image/Twitter.png'
import Youtube from '../../image/Youtube.png'
import Instagram from '../../image/Instagram.png'
import Pinte from '../../image/Pinte.png'
import { AudioOutlined } from "@ant-design/icons";

type Props = {}

const { Search } = Input;
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: "#1890ff"
        }}
    />
);

const onSearch = (value: string | number) => console.log(value);


const HeadBottom = (props: Props) => {
    return (
        <>
            <div className='search-head'>
                <div className='search-title'>
                    <h2>E-BÜLTEN</h2>
                    <p>Yeniliklerden haberdar olun</p>
                </div>
                <div style={{ display: "flex", width: "800px" }}>
                    <Search
                        placeholder="E - Mail adresinizi Yazın"
                        allowClear
                        enterButton="KAYDET"
                        size="large"
                        onSearch={onSearch}
                    />
                </div>
                <div className='search-results'>
                    <img src={Facebook} alt="" />
                    <img src={Youtube} alt="" />
                    <img src={Twitter} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Pinte} alt="" />
                </div>

            </div>
        </>
    )
}

export default HeadBottom