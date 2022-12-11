import './header.scss'

import { useState } from 'react'

import headerIcon1 from './../../assets/images/header-icon1.svg'
import headerIcon2 from './../../assets/images/header-icon2.svg'
import menu from './../../assets/images/menu.svg'
import cross from './../../assets/images/cross.svg'



const Header = () => {
    const [headerActive, setHeaderActive] = useState(false)
    return (
        <div className="container">

            <div className={headerActive ? "header active" : "header"}>
                <div className="header__personal">
                    <div className="header__personal-icons">
                        <div >
                            <img src={headerIcon1} alt="" />
                        </div>
                        <div >
                            <img src={headerIcon2} alt="" />
                        </div>
                    </div>

                    <div className="header__personal-text">
                        Personal
                    </div>

                    <div className="header__personal-text">
                        Business
                    </div>
                </div>


                <div className="header__app">
                    <div>
                        Zenefits
                    </div>
                    <div>
                        Features
                    </div>
                    <div>
                        Pricing
                    </div>
                    <a href='/' className="header__app-btn">
                        Get app
                    </a>
                </div>

            </div>
            <div onClick={() => setHeaderActive(!headerActive)} className="header__menu">
                <img src={headerActive ? cross : menu} alt="" />
            </div>



        </div>
    )
}

export default Header