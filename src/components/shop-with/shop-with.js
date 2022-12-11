import Content from "./../content"

import shopWith from './../../assets/images/shopWith.png'

const ShopWith = () => {
    return (
        <Content
            left={
                <div className="content__img">
                    <img src={shopWith} alt="" />
                </div>
            }

            right={
                <div className="content__main">
                    <h2>
                        Shopping with no fees
                    </h2>
                    <div>
                        Online shopping is flawed with all kind of fees. Currency exchange fees, processing fees and even fees for having multiple fees. Getting rid of them became our hobby. Same goes for ATM withdrawal fees.
                    </div>
                    <div>
                        Enjoy your money globally. Every uncut part of it. Keep reading. ZEN goes beyond shopping with a fully functional account.
                    </div>
                </div>
            }
        />
    )
}

export default ShopWith