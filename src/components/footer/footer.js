import './footer.scss'

import followImg from './../../assets/images/follow.svg'
import logo from './../../assets/images/footerLogo.svg'
import img from './../../assets/images/footerImg.svg'


const Footer = () => {
    return (
        <div className="footer">

            <div className="footer__main">
                <div className="footer__main-item">
                    <div>
                        Learn
                    </div>
                    <div>
                        Help center
                    </div>
                    <div>
                        Join ZEN team
                    </div>
                    <div>
                        Privacy Policy
                    </div>
                    <div>
                        Cookies
                    </div>
                    <div>
                        Terms of use
                    </div>
                </div>

                <div className="footer__main-item">
                    <div>
                        Discover
                    </div>
                    <div>
                        For developers
                    </div>
                    <div>
                        Apple Pay
                    </div>
                    <div>
                        Google Pay
                    </div>
                </div>

                <div className="footer__main-item">
                    <div>
                        Offer
                    </div>
                    <div>
                        Business
                    </div>
                    <div>
                        Personal
                    </div>
                </div>

                <div className="footer__main-item">
                    <div>Language</div>
                    <div>
                        English
                    </div>
                    <div>
                        Polish
                    </div>
                </div>

                <div className="footer__main-item">
                    <div>
                        Follow us
                    </div>
                    <div className="footer__main-item-ico">
                        <img src={followImg} alt="" />
                    </div>
                </div>

                <div className="footer__main-item">
                    <div>
                        Contact
                    </div>
                    <div>
                        hello@zen.com
                    </div>
                </div>


            </div>

            <div className="footer__description">
                <div className="footer__description-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="footer__description-text">
                    <div >
                        <span>
                            ZEN.COM is a licensed financial institution under the supervision of the Central Bank of Lithuania approved by European Banking Authority for 31 countries. Registration number of the company 304749651, VAT ID LT100011714916. License of electronic money institutions number LB000457. Share capital 2.185.000,00 EUR. Company address: Mėsinių g. 5, LT-01133, Vilnius, Lithuania. Sales Office: ul. Emilii Plater 53, 00-113 Warsaw, Poland.
                        </span>
                    </div>
                    <div className="footer__description-img">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer