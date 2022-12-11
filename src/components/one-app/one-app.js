import Content from "./../content"
import oneApp from './../../assets/images/oneApp.png'

const OneApp = () => {
    return (
        <Content
            left={
                <div className="content__main">
                    <h2>
                        One app, one account, <br />
                        many currencies
                    </h2>
                    <div>
                        ZEN Mastercard® was made for spending money. ZEN account is here to store and manage it peacefully, from the inside of your pocket.
                    </div>
                    <div>
                        You can use it just like a regular account, as it has its own IBAN and works just the way any bank account would — but better. Store up to 30 currencies and transfer them easily in many ways.
                    </div>
                </div>
            }

            right={
                <div className="content__img">
                    <img src={oneApp} alt="" />
                </div>
            }
        />
    )
}

export default OneApp