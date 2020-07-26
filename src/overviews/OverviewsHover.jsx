import React, { useState } from 'react';
import S from './Overviews.module.css';
import classNames from 'classnames';

export function OverviewsHover({ item }) {
    const [hover, setHover] = useState(false);
    return (
        <div
            onMouseEnter={() => {
                setHover(true);
            }}
            onMouseLeave={() => {
                setHover(false);
            }}
        >
            <div className={S.overview}>
                <img
                    src={item.images}
                    alt=""
                    style={{ backgroundImage: `url('${item.images}')` }}
                    className={classNames(S.overviewhover, {
                        [S.zoomIn]: hover,
                    })}
                />
                <a href={item.link} className={S.title}>
                    {item.title}
                </a>
                <p className={S.descript}>{item.descript}</p>
            </div>
            {hover && (
                <div className={S.testWrapper}>
                    <img
                        src={item.images}
                        alt=""
                        style={{ backgroundImage: `url('${item.images}')` }}
                        className={classNames(S.overviewhover, {
                            [S.zoomIn]: hover,
                        })}
                    />
                    <a href={item.link} className={S.title}>
                        {item.title}
                    </a>
                    <p className={S.descript}>{item.descript}</p>
                    <div className={S.test}></div>
                </div>
            )}
        </div>
    );
}
