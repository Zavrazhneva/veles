import React from 'react';
import S from './Button.module.css';
import classNames from 'classnames';

export class Button extends React.Component {
    render() {
        return (
            <a
                className={classNames(S.button, {
                    [S.buttonDark]: this.props.contrast,
                })}
                href={this.props.link}
            >
                Смотреть
            </a>
        );
    }
}
