import React from 'react';
import S from './Header.module.css';
import cx from 'classnames';

export class Burger extends React.Component {
    constructor(props) {
        super(props);
        this.burgerOnChange = this.burgerOnChange.bind(this);
    }

    burgerOnChange() {
        this.props.onBurgerClick();
    }

    render() {
        console.log(this.props.onBurgerClick);
        return (
            <div
                className={S.burger}
                className={cx(S.burger, {
                    [S.burgerClose]: this.props.burgerClick,
                })}
                onClick={this.burgerOnChange}
            ></div>
        );
    }
}
