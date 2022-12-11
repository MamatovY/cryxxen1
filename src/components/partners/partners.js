import './partners.scss'

import booking from './../../assets/images/booking.svg'
import aliExpress from './../../assets/images/aliExpress.svg'
import allegro from './../../assets/images/allegro.svg'
import zalando from './../../assets/images/zalando.svg'
import lidl from './../../assets/images/lidl.svg'
import media from './../../assets/images/media.svg'
import rtv from './../../assets/images/rtv.svg'
import groupon from './../../assets/images/groupon.svg'




const Partners = () => {
    const partData = [
        { img: booking },
        { img: aliExpress },
        { img: allegro },
        { img: zalando },
        { img: lidl },
        { img: media },
        { img: rtv },
        { img: groupon }
    ]


    return (
        <div className="partners">
            {partData.map((item, i) => {
                return (
                    <div key={i} className="partners__items">
                        <img src={item.img} alt="" />
                    </div>
                )
            })}
        </div>
    )
}

export default Partners