import './quick.scss'

import Content from "./../content"

import quick from './../../assets/images/quick.png'
import play from './../../assets/images/googlePlay.svg'
import store from './../../assets/images/appStore.svg'

const Quick = () => {
    return (
        <Content
            left={
                <div className="content__img">
                    <img src={quick} alt="" />
                </div>
            }

            right={
                <div className="content__main">
                    <h2>
                        Quick and easy <br />
                        account creation
                    </h2>
                    <div>
                        Now, you might be thinking that it’s just like any other account creation… Long, tiresome and full of endless blanks to fill in. Well, it’s not.
                    </div>
                    <div>
                        We have designed the whole process to make it the simplest and the shortest one ever conceived for a personal account. Download the app and see for yourself!
                    </div>

                    <div className='quick__btn'>
                        <a href='/'>
                            <img src={play} alt="" />
                        </a>

                        <a href='/'>
                            <img src={store} alt="" />
                        </a>
                    </div>
                </div>
            }
        />
    )
}

export default Quick