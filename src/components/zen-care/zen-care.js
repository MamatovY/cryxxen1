import Content from '../content'

import zenCare from './../../assets/images/zenCare.png'

const ZenCare = () => {
    return (
        <Content
            left={
                <div className="content__main">

                    <h2>
                        ZEN Care
                    </h2>

                    <div>
                        Shopping online is usually a delightful experience. Until
                        it's not.
                    </div>

                    <div>
                        Until something you buy, proves to be faulty,
                        missing or a totally wrong item, you're in for
                        long product return procedures.
                    </div>
                    <div>
                        But, here comes ZEN Care: a free, built-in shopping
                        protection. You can rest assured we’ll handle all of the
                        transaction-related problems faster and with higher
                        success rates. Where lone consumers can be ignored or
                        dumped by dishonest merchants, ZEN doesn't
                        get discouraged. ZEN persists.
                    </div>

                </div>
            }

            right={
                <div className="content__img">
                    <img src={zenCare} alt="" />
                </div>
            }
        />
    )
}

export default ZenCare