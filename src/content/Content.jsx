import React from 'react';
import S from './Content.module.css';
import {Overviews} from '../overviews/Overviews';
import {Event} from '../event/Event';
import {Header} from '../header/Header';
import {SimpleSlider} from '../SimpleSlider/simpleSlider';
import {
    NavigationList,
    OverviewsItems,
    BottomEventMockData,
} from '../mocks/Mocks';
import {BottomEvent} from '../bottomEvent/BottomEvent';
import {Pagination} from '../pagination/Pagination';
import {NewsContent} from '../news/News';
import {getOverviews} from '../mocks/serverMock';


export class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentPage: 1, data: []};
    }

    componentDidMount() {
        this.onPageChange(1);
    }

    onPageChange = (value) => {
        getOverviews(value).then((data) => {
            this.setState({data: data, currentPage: value});
        });
    };

    render() {
        return (
            <div className={S.contentWrapper}>
                <h2 className={S.title}>Новости культуры</h2>
                <Header/>
                <h3 className={S.titleBlocks}>Обзоры</h3>
                <div className={S.content}>
                    <div className={S.contentLeft}>
                        <NewsContent/>
                        <Overviews overviews={this.state.data}/>
                        <Pagination
                            pagesCount={20}
                            currentPage={this.state.currentPage}
                            onPageChange={this.onPageChange}
                        />
                        <BottomEvent {...BottomEventMockData} />
                    </div>
                    <div className={S.contentRight}>
                        {NavigationList.map((number) => (
                            <Event {...number} />
                        ))}
                    </div>
                </div>
                <SimpleSlider/>
            </div>
        );
    }
}
