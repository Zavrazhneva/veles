import React from 'react';
import S from './Content.module.css';
import classNames from "classnames"
import {News, TopNews} from "../news/News";
import {Overviews} from "../overviews/Overviews";
import {Event} from "../event/Event";
import {NewsList, NavigationList, OverviewsItems, BottomEventMockData} from '../mocks/Mocks';
import {BottomEvent} from '../bottomEvent/BottomEvent';


export class Content extends React.Component {
    render() {
        return (
            <div className={S.contentWrapper}>
                <h3 className={S.titleBlocks}>Новости</h3>
                <div className={S.content}>
                    <div>
                        <div className={S.news}>
                            <TopNews/>
                            <div className={S.newsSmall}>{NewsList.map((item) => <News {...item}/>)}</div>
                        </div>
                        <div className={S.overviews}>
                            {OverviewsItems.map((i) => <Overviews {...i}/>)}
                        </div>
                        <Event {...BottomEventMockData}/>
                    </div>
                    <div>
                        {NavigationList.map((number) => <Event  {...number}/>)}
                    </div>
                </div>
            </div>
        )
    }
}


