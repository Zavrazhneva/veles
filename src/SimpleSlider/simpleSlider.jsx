import React, { createRef } from 'react'
import Slider from 'react-slick'
import S from './simpleSlider.module.css'
import { SliderEvent } from '../mocks/Mocks'
import { Slide } from './Slide'
import classNames from 'classnames'

export class SimpleSlider extends React.Component {
    constructor(props) {
        super(props)
        this.onPrevPress = this.onPrevPress.bind(this)
        this.onNextPress = this.onNextPress.bind(this)
    }

    sliderRef = createRef()
    onPrevPress() {
        this.sliderRef.current.slickPrev()
    }
    onNextPress() {
        this.sliderRef.current.slickNext()
    }
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: false,
        }
        return (
            <div className={S.sliderWrapper}>
                <div
                    onClick={this.onPrevPress}
                    className={classNames(S.sliderArrow, S.sliderPrev)}
                />

                <Slider {...settings} ref={this.sliderRef}>
                    {SliderEvent.map((sliderEvent) => (
                        <Slide {...sliderEvent} />
                    ))}
                </Slider>
                <div
                    onClick={this.onNextPress}
                    className={classNames(S.sliderArrow, S.sliderNext)}
                />
            </div>
        )
    }
}
