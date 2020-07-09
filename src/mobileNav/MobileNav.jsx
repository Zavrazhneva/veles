import React from 'react';
import {NavigationList} from '../constants';
import S from './MobileNav.module.css';
import {NavLink} from "react-router-dom";

export class MobileNav extends React.Component {
    render() {
        const listItems = NavigationList.map((number) => (
            <li className={S.item}>
                <NavLink to={`/${number.url}`} className={S.navLink}>{number.title}</NavLink>
            </li>
        ));
        return (
            <div className={S.mobileNav}>
                <div className={S.closeButton}></div>
                {listItems}
            </div>

        )
    }
}