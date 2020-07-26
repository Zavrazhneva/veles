import React from 'react';
import S from './Button.module.css';

export class Button extends React.Component {
    render() {
        return (
            <a
                className={S.button}
                href={this.props.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                Смотреть
            </a>
        );
    }
}
