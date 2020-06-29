import React from 'react';
import S from './Overviews.module.css';

class Overview extends React.Component {
    render() {
        return (
            <div className={S.overview}>
                <img className={S.images} src={this.props.images} alt="" />
                <a href={this.props.link} className={S.title}>
                    {this.props.title}
                </a>
                <p className={S.descript}>{this.props.descript}</p>
            </div>
        );
    }
}
export class Overviews extends React.Component {
    render() {
        return (
            <div className={S.overviews}>
                {this.props.overviews.map((i) => (
                    <Overview {...i} />
                ))}
            </div>
        );
    }
}
