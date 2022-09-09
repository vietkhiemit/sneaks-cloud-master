import React from 'react'
import Image5 from '../../image/image5.png'
import Image6 from '../../image/image6.png'
import Image7 from '../../image/image7.png'
import Image8 from '../../image/image8.png'
import Pngegg from '../../image/pngegg1.png'
import Group2 from '../../image/Group2.png'
import Kisspng from '../../image/kisspng.png'

type Props = {}

const Partners = (props: Props) => {
    return (
        <>
            <div className="partners6">
                <div className="img2">
                    <img src={Image5} alt="" />
                </div>
                <div className="img1">
                    <img src={Image6} alt="" />
                </div>
                <div className="img1">
                    <img src={Image7} alt="" />
                </div>
                <div className="img1">
                    <img src={Pngegg} alt="" />
                </div>
                <div className="img1">
                    <img src={Image8} alt="" />
                </div>
                <div className="img1">
                    <img src={Kisspng} alt="" />
                </div>
                <div className="img1">
                    <img src={Group2} alt="" />
                </div>

            </div>
        </>


    )
}

export default Partners 