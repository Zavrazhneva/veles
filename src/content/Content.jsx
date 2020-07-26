import React from 'react';
import S from './Content.module.css';
import { Overviews } from '../overviews/Overviews';
import { Event } from '../event/Event';
import { Header } from '../header/Header';
import { SimpleSlider } from '../SimpleSlider/simpleSlider';
import { SliderOffer } from '../slider/Slider';
import { NavigationList, BottomEventMockData } from '../mocks/Mocks';
import { BottomEvent } from '../bottomEvent/BottomEvent';
import { Pagination } from '../pagination/Pagination';
import { NewsContent } from '../news/News';
import { getOverviews } from '../mocks/serverMock';

export class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: 1, data: [] };
    }

    componentDidMount() {
        this.onPageChange(1);
    }

    onPageChange = (value) => {
        getOverviews(value).then((data) => {
            this.setState({ data: data, currentPage: value });
        });
    };

    render() {
        return (
            <div className={S.contentWrapper}>
                <h2 className={S.title}>Новости культуры</h2>
                <Header />
                <SliderOffer />

                <div>
                    <div className={S.content}>
                        <div className={S.contentLeft}>
                            <h3 className={S.titleBlocks}>Новости</h3>
                            <NewsContent />
                            <h3 className={S.titleBlocks}>Обзоры</h3>
                            <Overviews overviews={this.state.data} />
                            <Pagination
                                pagesCount={20}
                                currentPage={this.state.currentPage}
                                onPageChange={this.onPageChange}
                            />
                            <BottomEvent {...BottomEventMockData} />
                        </div>
                        <div className={S.contentRight}>
                            {NavigationList.map((item) => (
                                <Event key={item.title} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
                <SimpleSlider />

                <div className={S.footer}>
                    <h2 className={S.title}>Новости культуры</h2>

                    <Header />
                    <div className={S.footnote}>
                        <hr className={S.footerLine} />
                        <span className={S.footnoteText}>
                            © 2020 Zavrazhneva Anastasiia
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
