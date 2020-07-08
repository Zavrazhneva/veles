import React from 'react';
import S from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {NavigationList} from '../constants'
export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.listCreation = this.listCreation.bind(this);
    }

    listCreation() {
        const listItems = NavigationList.map((number) => (
            <li className={S.item}>
                <NavLink to={`/${number.url}`}>{number.title}</NavLink>
            </li>
        ));
        return <ul className={S.list}>{listItems}</ul>;
    }

    render() {
        return (
            <div className={S.headerBlock}>

                <div className={S.header}>{this.listCreation()}</div>
            </div>
        );
    }
}


