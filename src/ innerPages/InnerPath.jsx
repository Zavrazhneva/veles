import React from 'react';
import {Header} from "../header/Header";
import S from './inner.module.css';
import {InnerPathEvents} from "../mocks/Mocks";
import {Event} from "../event/Event";
import {NavigationList} from '../constants'

export function InnerPath(props) {
    let titlePath = props.match.url.slice(1);
    let currentPage = NavigationList.find((element) => titlePath === element.url);
    return (
        <div className={S.innerPath}>
            <h2 className={S.title}>{currentPage.title}</h2>
            <Header/>
            <div className={S.events}>
                {InnerPathEvents.map((number) => (
                    <Event {...number} />
                ))}
            </div>
        </div>
    );
}

