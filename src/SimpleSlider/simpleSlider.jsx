import React, { createRef } from 'react';
import Slider from 'react-slick';
import S from './simpleSlider.module.css';
import { SliderEvent } from '../mocks/Mocks';
import { Slide } from './Slide';
import classNames from 'classnames';

export class SimpleSlider extends React.Component {
    constructor(props) {
        super(props);
        this.onPrevPress = this.onPrevPress.bind(this);
        this.onNextPress = this.onNextPress.bind(this);
    }

    sliderRef = createRef();
    onPrevPress() {
        this.sliderRef.current.slickPrev();
    }
    onNextPress() {
        this.sliderRef.current.slickNext();
    }
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                    },
                },
                {
                    breakpoint: 870,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 620,
                    settings: {
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
        return (
            <div className={S.sliderWrapper}>
                <div
                    onClick={this.onPrevPress}
                    className={classNames(S.sliderArrow, S.sliderPrev)}
                />

                <Slider {...settings} ref={this.sliderRef}>
                    {SliderEvent.map((sliderEvent, i) => (
                        <Slide {...sliderEvent} key={sliderEvent.title + i} />
                    ))}
                </Slider>
                <div
                    onClick={this.onNextPress}
                    className={classNames(S.sliderArrow, S.sliderNext)}
                />
            </div>
        );
    }
}
