import React from 'react'
import Insta from '../../image/Insta.png'
import Rectangle61 from '../../image/Rectangle61.png'
import Rectangle62 from '../../image/Rectangle62.png'
import Rectangle63 from '../../image/Rectangle63.png'
import Rectangle64 from '../../image/Rectangle64.png'
import Rectangle65 from '../../image/Rectangle65.png'
import Rectangle66 from '../../image/Rectangle66.png'
import Rectangle67 from '../../image/Rectangle67.png'
import Rectangle68 from '../../image/Rectangle68.png'
import Rectangle69 from '../../image/Rectangle69.png'

type Props = {}

const InstaImage = (props: Props) => {
    return (
        <div className="props-container">
            <div className="insta-logo">
                <img src={Insta} alt="" />
                <p className='text-insta'>Tarzını oluştur, etiketle ve paylaş...</p>
            </div>

            <div className="main" style={{ display: "flex" }}>
                <div className="top">
                    <div className="top-top">
                        <img src={Rectangle61} alt="" width={480} height={480} />
                    </div>
                    <div className="top-bot" style={{ rowGap: "16px" }}>
                        <img style={{ paddingRight: "8px" }} src={Rectangle68} alt="" width={240} height={240} />
                        <img src={Rectangle69} alt="" width={240} height={240} />
                    </div>
                </div>

                <div className="mid" style={{ display: "flex", flexDirection: "column" }}>
                    <div className="img-child">
                        <img src={Rectangle62} alt="" width={240} height={240} />
                    </div>
                    <div className="img-child">
                        <img src={Rectangle63} alt="" width={240} height={230} />
                    </div>
                    <div className="img-child">
                        <img src={Rectangle67} alt="" width={240} height={240} />
                    </div>

                </div>

                <div className="bot">
                    <div className="bot-top">
                        <img src={Rectangle64} alt="" width={240} height={240} />
                        <img src={Rectangle65} className="img-bot-top" alt="" width={240} height={240} />
                    </div>
                    <div className="bot-bot">
                        <img src={Rectangle66} alt="" width={480} height={480} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstaImage