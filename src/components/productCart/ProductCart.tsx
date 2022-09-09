import React from 'react'
import Rectangle56 from '../../image/Rectangle56.png'
import Rectangle57 from '../../image/Rectangle57.png'
import Rectangle58 from '../../image/Rectangle58.png'
import Rectangle59 from '../../image/Rectangle59.png'

type Props = {}

const ProductCart = (props: Props) => {
    return (
        <div className="product-cart">
            <div className="product-cart-children">
                <img src={Rectangle56} alt="" />
            </div>
            <div className="product-cart-children">
                <img src={Rectangle57} alt="" />
            </div>
            <div className='product-card-right'>
                <div className="product-card-item-top">
                    <img src={Rectangle58} alt="" />
                </div>
                <div className="product-card-item">
                    <img src={Rectangle59} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ProductCart