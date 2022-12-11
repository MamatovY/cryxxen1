import './peaceful.scss'

import mainIco from './../../assets/images/icoPeaceful.svg'
import play from './../../assets/images/googlePlay.svg'
import apple from './../../assets/images/appStore.svg'
import peaceful from './../../assets/images/peaceful.png'

import Content from '../content'


const Peaceful = () => {
    return (
        <Content
            left={
                <div className="content__main">
                    <div className='peaceful'>
                        <div className='peaceful__title'>
                            <div className='peaceful__title-ico'>
                                <img src={mainIco} alt="" />
                            </div>
                            <div>In every beginning, there is chaos.</div>
                        </div>
                        <h1>
                            Peaceful shopping.
                            <br />
                            Mindful money.
                        </h1>
                        <div>See how we can help with making your shopping <br />
                            experience and money management more ZEN.</div>

                        <div href='/' className="peaceful__app">
                            <a href="/">
                                <img src={play} alt="" />
                            </a>
                        </div>
                        <div href='/' className="peaceful__app">
                            <a href="/">
                                <img src={apple} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            }
            right={
                <div className="content__img">
                    <img src={peaceful} alt="" />
                </div>
            }
        />

    )
}

export default Peaceful