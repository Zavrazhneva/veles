import React from "react";
import Slider from "react-slick";
import S from './simpleSlider.module.css';
import {SliderEvent} from "../mocks/Mocks";
import {Slide} from './Slide'

export class SimpleSlider extends React.Component {

    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            adaptiveHeight: true,
            slide: ''
        };
        return (
            <Slider {...settings}>
                {SliderEvent.map((sliderEvent) => <Slide {...sliderEvent}/>)}
            </Slider>
        );
    }
}

