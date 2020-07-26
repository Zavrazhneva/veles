import React from 'react';
import S from './Event.module.css';
import classNames from 'classnames';
import { Button } from '../Button/button';

export class Event extends React.Component {
    render() {
        return (
            <div
                className={classNames(S.event, {
                    [S.horizontal]: this.props.horizontal,
                })}
                style={{ backgroundImage: `url(${this.props.images})` }}
            >
                <div className={S.info}>
                    <h4
                        className={classNames(S.title, {
                            [S.titleWhite]: this.props.contrast,
                        })}
                    >
                        {this.props.title}
                    </h4>
                    <Button
                        link={this.props.link}
                        contrast={this.props.contrast}
                    />
                </div>
            </div>
        );
    }
}
