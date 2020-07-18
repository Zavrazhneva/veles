import React from 'react';
import S from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { NavigationList } from '../constants';
import { Burger } from './Burger';
import cx from 'classnames';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { burgerClick: false };
        this.listCreation = this.listCreation.bind(this);
        this.burgerClick = this.burgerClick.bind(this);
    }
    burgerClick() {
        this.setState({ burgerClick: !this.state.burgerClick });
    }
    listCreation() {
        const listItems = NavigationList.map((number) => (
            <li className={S.item}>
                <NavLink to={`/${number.url}`}>{number.title}</NavLink>
            </li>
        ));

        return (
            <ul
                className={cx(S.list, {
                    [S.listActive]: this.state.burgerClick,
                })}
            >
                {listItems}
            </ul>
        );
    }

    render() {
        return (
            <div className={S.headerBlock}>
                <div className={S.header}>{this.listCreation()}</div>
                <Burger onBurgerClick={this.burgerClick} />
            </div>
        );
    }
}
