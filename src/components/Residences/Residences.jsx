import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import "swiper/css"
import './Residences.css'
import data from '../../utils/slider.json'
import { sliderSettings } from "../../utils/common"

const Residences = () => {
    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Residences</span>
                </div>

                <Swiper {...sliderSettings}>
                    <SliderButtons />
                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className='r-card flexColStart'>
                                    <img src={card.image} alt="" />
                                    <span className='secondaryText r-price'>
                                        <span style={{ color: "orange" }}>$</span>
                                        <span>{card.price}</span>
                                    </span>
                                    <span className='primaryText'>{card.name}</span>
                                    <span className='secondaryText'>{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Residences

const SliderButtons = () => {
    const swipper = useSwiper()
    return (
        <div className='flexCenter r-button'>
            <button className='' onClick={() => swipper.slidePrev()}>&lt;</button>
            <button onClick={() => swipper.slideNext()}>&gt;</button>
        </div>
    )
}