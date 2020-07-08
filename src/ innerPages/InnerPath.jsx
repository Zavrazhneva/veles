import React from 'react';
import {Header} from "../header/Header";
import S from './inner.module.css';
import {InnerPathEvents} from "../mocks/Mocks";
import {Event} from "../event/Event";


export function InnerPath(props) {
    let title = '';
    switch (props.match.path) {
        case '/reviews':
            title = 'Обзоры';
            break;
        case '/music':
            title = 'Музыка';
            break;
        case '/movie':
            title = 'Кино';
            break;
        case '/architecture':
            title = 'Архитектура';
            break;
        case '/theater':
            title = 'Театр';
            break;
        case '/literature':
            title = 'Литература';
            break;
        case '/religion':
            title = 'Религия';
            break;
        case '/painting':
            title = 'Живопись';
            break;


    }

    return (
        <div className={S.innerPath}>

            <div className={S.title}>{title}</div>
            <Header/>
            <div className={S.events}>
                {InnerPathEvents.map((number) => (
                    <Event {...number} />
                ))}
            </div>
        </div>

    );
}

