import React from 'react';
import S from './Bottomevent.module.css';
import { Button } from '../Button/button';

export class BottomEvent extends React.Component {
    render() {
        return (
            <div
                className={S.event}
                style={{ backgroundImage: `url(${this.props.images})` }}
            >
                <div className={S.info}>
                    <h4 className={S.title}>{this.props.title}</h4>
                    <Button contrast={this.props.contrast} />
                </div>
            </div>
        );
    }
}
