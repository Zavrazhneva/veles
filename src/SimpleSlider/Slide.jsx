import React, { useState } from 'react';
import S from './simpleSlider.module.css';
import classNames from 'classnames';

export function Slide({ images, title, link }) {
    const [hover, setHover] = useState(false);
    return (
        <div className={S.slider}>
            <div
                className={classNames(S.sliderEvent, { [S.zoomIn]: hover })}
                onMouseEnter={() => {
                    setHover(true);
                }}
                onMouseLeave={() => {
                    setHover(false);
                }}
                style={{ backgroundImage: `url('${images}')` }}
            >
                {hover && (
                    <div className={S.sliderContent}>
                        <h3 className={S.title}>{title}</h3>
                        <a href={link} className={S.button}>
                            Смотреть
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
