import React, { createRef } from 'react';
import Slider from 'react-slick';
import S from './Slider.module.css';
import cx from 'classnames';
import classNames from 'classnames';

export class SliderOffer extends React.Component {
    constructor(props) {
        super(props);
        this.onPrevPress = this.onPrevPress.bind(this);
        this.onNextPress = this.onNextPress.bind(this);
        this.clickDots = this.clickDots.bind(this);
        this.state = { onChangeDots: 0 };
    }

    sliderRef = createRef();

    onPrevPress() {
        this.sliderRef.current.slickPrev();
    }

    onNextPress() {
        this.sliderRef.current.slickNext();
    }

    clickDots(oldIndex, index) {
        this.setState({ onChangeDots: index });
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            beforeChange: this.clickDots,
            appendDots: (dots) => (
                <div
                    style={{
                        borderRadius: '10px',
                        position: 'absolute',
                        bottom: '10px',
                    }}
                >
                    <ul style={{ margin: '0px' }}> {dots} </ul>
                </div>
            ),
            customPaging: (i) => {
                return (
                    <div className={S.sliderDots}>
                        <div
                            className={cx(S.sliderDot, {
                                [S.sliderDotActive]:
                                    this.state.onChangeDots === i,
                            })}
                        />
                    </div>
                );
            },
        };

        return (
            <div className={S.slider}>
                <div className={S.arrowsBlock}>
                    <div
                        className={classNames(
                            S.sliderArrow,
                            S.lineWrapper,
                            S.arrowWrapper
                        )}
                        onClick={this.onPrevPress}
                    >
                        <div className={S.lineWrapper}>
                            <span>Предыдущая</span>
                            <span className={S.line}></span>
                        </div>
                        <div className={S.sliderPrev} />
                    </div>
                    <div
                        className={classNames(
                            S.sliderArrow,
                            S.lineWrapper,
                            S.arrowWrapper
                        )}
                        onClick={this.onNextPress}
                    >
                        <div className={S.sliderNext} />
                        <div className={S.lineWrapper}>
                            <span className={S.line}></span>
                            <span>Следущая</span>
                        </div>
                    </div>
                </div>
                <Slider {...settings} ref={this.sliderRef}>
                    <div className={cx(S.slide, S.slide1)}>
                        <a href="#" className={S.link}>
                            Новое
                        </a>
                        <h2 className={S.title}>Подводный отель</h2>

                        <p className={S.description}>
                            Как известно, Дубай – город контрастов. Самые
                            революционные и фантастические мечты архитекторов
                            способен воплотить в жизнь этот мегаполис,
                            построенный на нефти и за счет нефти
                        </p>
                    </div>
                    <div className={cx(S.slide, S.slide1)}>
                        <a href="#" className={S.link}>
                            Новое
                        </a>
                        <h2 className={S.title}>Подводный отель</h2>

                        <p className={S.description}>
                            Как известно, Дубай – город контрастов. Самые
                            революционные и фантастические мечты архитекторов
                            способен воплотить в жизнь этот мегаполис,
                            построенный на нефти и за счет нефти
                        </p>
                    </div>
                    <div className={cx(S.slide, S.slide1)}>
                        <a href="#" className={S.link}>
                            Новое
                        </a>
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
