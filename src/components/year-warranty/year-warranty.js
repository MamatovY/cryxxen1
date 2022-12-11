import Content from '../content'

import yearWarranty from './../../assets/images/yearWarranty.png'

const YearWarranty = () => {
    return (
        <Content
            left={
                <div className="content__img">
                    <img src={yearWarranty} alt="" />
                </div>
            }
            right={
                <div className="content__main" >
                    <h2>1-year warranty boost</h2>
                    <div>
                        ZEN cards have a very neat feature that will help you

                        whenever your electronic devices start failing after the

                        standard warranty ends, which is pretty common.
                    </div>
                    <div>
                        When you buy any electronics with your ZEN shopping
                        Mastercard®, their warranty gets extended by one
                        year. How does it work? It simply does. Automatically.
                    </div>
                </div>
            }
        />
    )
}

export default YearWarranty