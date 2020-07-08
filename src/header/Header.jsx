import React from 'react';
import S from './Header.module.css';
import {NavLink} from 'react-router-dom'

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.listCreation = this.listCreation.bind(this);
    }

    listCreation() {
        const NavigationList = [
            {
                title: 'Новости',
                url: ''
            },
            {
                title: 'Обзоры',
                url: 'reviews'
            },
            {
                title: 'Музыка',
                url: 'music'
            },
            {
                title: 'Архитектура',
                url: 'architecture'
            },
            {
                title: 'Кино',
                url: 'movie'
            },
            {
                title: 'Театр',
                url: 'theater'
            },
            {
                title: 'Литература',
                url: 'literature'
            },
            {
                title: 'Религия',
                url: 'religion'
            },
            {
                title: 'Живопись',
                url: 'painting'
            }
        ];
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


