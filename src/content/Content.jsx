import React from 'react'
import S from './Content.module.css'
import { Overviews } from '../overviews/Overviews'
import { Event } from '../event/Event'
import {
    NavigationList,
    OverviewsItems,
    BottomEventMockData,
} from '../mocks/Mocks'
import { BottomEvent } from '../bottomEvent/BottomEvent'
import { Pagination } from '../pagination/Pagination'
import { NewsContent } from '../news/News'

export class Content extends React.Component {
    render() {
        return (
            <div className={S.contentWrapper}>
                <h3 className={S.titleBlocks}>Обзоры</h3>
                <div className={S.content}>
                    <div className={S.contentLeft}>
                        <NewsContent />
                        <Overviews />
                        <Pagination
                            pagesCount={10}
                            activePage={3}
                            onPageChange={(i) => {
                                console.log(i)
                            }}
                        />
                        <BottomEvent {...BottomEventMockData} />
                    </div>
                    <div className={S.contentRight}>
                        {NavigationList.map((number) => (
                            <Event {...number} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
