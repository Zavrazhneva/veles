import React from 'react';
import S from './Header.module.css'

export class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.listCreation = this.listCreation.bind(this);
    }
    listCreation() {
        const NavigationList = ['Новости','Обзоры','Музыка',
        'Архитектура','Кино','Театр',
        'Литература','Религия','Живопись'];
        const listItems = NavigationList.map((number) =>
  <li className={S.item}><a href="#">{number}</a></li>
);
    return (<ul className={S.list}>{listItems}</ul>)
    }
    
    render(){
        return (
            <div className={S.header}>{this.listCreation()}</div>
        )
    }
}