import React from 'react'
import Home from '../../image/Home.png'
import Vector from '../../image/Vector.png'
import LeftCircle from '../../image/LeftCircle.png'
import Cloudy from '../../image/Cloudy.png'
import Siu from '../../image/Siu.png'

type Props = {}

const ShoppingInfo = (props: Props) => {
    return (
        <div className="shopping-info">
            <div className="item-info">
                <img src={Siu} alt="" />
                <div>
                    <h3>Güvenli Alışveriş</h3>
                    <p>
                        için yalispor.com SSL güvenlik
                        Güvenli alışveriş yapabilmeniz
                        sertifikası kullanılmaktadır
                    </p>
                </div>
            </div>
            <div className="item-info">
                <img src={Cloudy} alt="" />
                <div>
                    <h3>%100 Orijinal Ürün</h3>
                    <p>
                        Tüm ürünlerimiz %100 orijinal
                        ürün garantisine sahiptir.
                    </p>
                </div>
            </div>
            <div className="item-info">
                <img src={LeftCircle} alt="" />
                <div>
                    <h3>Ücretsiz İade</h3>
                    <p>
                        Tüm ürünlerimiz 15 gün içerisinde ücretsiz iade edebilirsiniz.
                    </p>
                </div>
            </div>
            <div className="item-info">
                <img src={Vector} alt="" />
                <div>
                    <h3>%3 Parapuan</h3>
                    <p>
                        Her alışverişinizde %3
                        değerinde parapuan
                        kazanın.
                    </p>
                </div>
            </div>
            <div className="item-info">
                <img src={Home} alt="" />
                <div>
                    <h3>Kapıda Ödeme</h3>
                    <p>
                        “Kapıda Ödeme seçeneği ile
                        ödemesini ürün elinize geçince yapabilirsiniz
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ShoppingInfo