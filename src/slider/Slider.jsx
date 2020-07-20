import React, { Component, createRef } from 'react';
import Slider from 'react-slick';
import S from './Slider.module.css';
import cx from 'classnames';
import classNames from 'classnames';

export class SliderOffer extends React.Component {
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
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        };
        return (
            <div className={S.slider}>
                <h2> Single Item</h2>
                <div className={S.arrowsBlock}>
                    <div className={S.arrowWrapper}>
                        <div className={S.lineWrapper}>
                            <span>Предыдущая</span>
                            <span className={S.line}></span>
                        </div>
                        <div
                            onClick={this.onPrevPress}
                            className={classNames(S.sliderArrow, S.sliderPrev)}
                        />
                    </div>
                    <div className={S.arrowWrapper}>
                        <div
                            onClick={this.onNextPress}
                            className={classNames(S.sliderArrow, S.sliderNext)}
                        />
                        <div className={S.lineWrapper}>
                            <span className={S.line}></span>
                            <span>Следущая</span>
                        </div>
                    </div>
                </div>
                <Slider {...settings} ref={this.sliderRef}>
                    <div className={cx(S.slide, S.slide1)}>
                        <h2 className={S.title}>Подводный отель</h2>

                        <p className={S.description}>
                            Как известно, Дубай – город контрастов. Самые
                            революционные и фантастические мечты архитекторов
                            способен воплотить в жизнь этот мегаполис,
                            построенный на нефти и за счет нефти
                        </p>
                    </div>
                    <div className={cx(S.slide, S.slide1)}>
                        <h2 className={S.title}>Test</h2>
                        <p className={S.description}>
                            Как известно, Дубай – город контрастов. Самые
                            революционные и фантастические мечты архитекторов
                            способен воплотить в жизнь этот мегаполис,
                            построенный на нефти и за счет нефти
                        </p>
                    </div>
                    <div className={cx(S.slide, S.slide1)}>
                        <h2 className={S.title}>Подводный отель</h2>
                        <p className={S.description}>
                            Как известно, Дубай – город контрастов. Самые
                            революционные и фантастические мечты архитекторов
                            способен воплотить в жизнь этот мегаполис,
                            построенный на нефти и за счет нефти
                        </p>
                    </div>
                </Slider>
            </div>
        );
    }
}
