import './zen-shop.scss'

import Content from "./../content"

import zenShop from './../../assets/images/zenShop.png'
import aPay from './../../assets/images/aPay.svg'
import gPay from './../../assets/images/gPay.svg'

const ZenShop = () => {
    return (
        <Content
            left={
                <div className="content__main" >
                    <h2 >ZEN shopping Mastercard<sup>&#174;</sup>
                    </h2>
                    <div>
                        You shouldn’t be bound to use one card at a time, especially when it has so many benefits! With ZEN, you can manage your shopping and finances with both physical and virtual cards. It’s convenient, streamlined, and works like a charm. You can have a shopping card, a subscription card, and whatever other cards that make sense to you.
                    </div>

                    <div className="zenShop-btn">
                        <a href='/'>
                            <img src={aPay} alt="" />
                        </a>
                        <a href='/'>
                            <img src={gPay} alt="" />
                        </a>
                    </div>
                </div>
            }

            right={
                <div className="content__img">
                    <img src={zenShop} alt="" />
                </div>
            }
        />
    )
}

export default ZenShop