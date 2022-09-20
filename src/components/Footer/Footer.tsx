import React from 'react'
import Phone from '../../image/Phone.png'
import Android from '../../image/GooglePlay.png'
import AppStore from '../../image/AppStore.png'
import ImgPhone from '../../image/image15.png'
import ImgPhone1 from '../../image/image13.png'
type Props = {}

const FooterCommon = (props: Props) => {
    return (
        <>
            <div className='footer'>
                <div className='yali'>
                    <h3>YALI SPOR</h3>
                    <p>Hakkımızda</p>
                    <p>İnsan Kaynakları</p>
                    <p>İletişim</p>
                    <p>Mağazalar</p>
                    <p>Sneaks Cloud Blog</p>
                </div>
                <div className='bilg'>
                    <h3>BİLGİLENDİRME</h3>
                    <p>Güvenli Alışveriş</p>
                    <p>Sıkça Sorulan Sorular</p>
                    <p>Üyelik Sözleşmesi</p>
                    <p>Gizlilik Taahhütü</p>
                    <p>Aydınlatma Metni</p>
                    <p>Çerez Politikası</p>
                    <p>Yardım</p>
                </div>
                <div className='siparis'>
                    <h3>SİPARİŞ</h3>
                    <p>Sipariş Takibi</p>
                    <p>Hesap Numaraları</p>
                    <p>Teslimat Koşulları</p>
                    <p>İade ve İade Çeki Koşulları</p>
                </div>
                <div className='dani'>
                    <div className="ngu">
                        <div >
                            <img src={Phone} alt="" width={35} />
                        </div>
                        <div className="phone-title">
                            <p>Müşteri Danışma Hattı</p>
                            <p>0 850 222 77 59</p>
                        </div>
                    </div>
                    <div className="img-bottom">
                        <img src={AppStore} alt="" width={100} />
                        <img src={Android} alt="" width={100} />
                    </div>
                    <div>
                        <img src={ImgPhone} alt="" className='img-bottom1' />
                        <img src={ImgPhone1} alt="" className='img-bottom2' />
                    </div>

                </div>
            </div>
        </>
    )
}

export default FooterCommon