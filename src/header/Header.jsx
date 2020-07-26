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
        document.body.classList.add(S.noScroll);
        if (this.state.burgerClick === true) {
            document.body.classList.remove(S.noScroll);
        }
    }
    listCreation() {
        const listItems = NavigationList.map((item) => (
            <li className={S.item} key={item.title}>
                <NavLink to={`/${item.url}`}>{item.title}</NavLink>
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
            <div>
                <div className={S.header}>{this.listCreation()}</div>
                <Burger
                    burgerClick={this.state.burgerClick}
                    onBurgerClick={this.burgerClick}
                />
            </div>
        );
    }
}
