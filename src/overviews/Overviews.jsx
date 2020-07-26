import React from 'react';
import S from './Overviews.module.css';

export class Overview extends React.Component {
    render() {
        const { images, link, title, descript } = this.props;
        return (
            <a className={S.overview} href={link}>
                <div className={S.imageBlock}>
                    <img
                        src={images}
                        alt=""
                        style={{ backgroundImage: `url('${images}')` }}
                        className={S.image}
                    />
                    <div className={S.overlay}>
                        <div className={S.overlayBlock}>
                            <div className={S.overlayInfo}>
                                <span className={S.eye}></span>
                                <span className={S.viewsNum}>37</span>
                            </div>
                            <div className={S.overlayInfo}>
                                <span className={S.commentsIcon}></span>
                                <span className={S.commentsNum}>2</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={S.overviewDescript}>
                    <a href={link} className={S.title}>
                        {title}
                    </a>
                    <p className={S.descript}>{descript}</p>
                </div>
            </a>
        );
    }
}

export class Overviews extends React.Component {
    render() {
        return (
            <div className={S.overviews}>
                {this.props.overviews.map((item, i) => (
                    <Overview {...item} key={item.title + i} />
                ))}
            </div>
        );
    }
}
