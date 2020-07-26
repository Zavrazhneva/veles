import React from 'react';
import S from './News.module.css';
import { NewsList } from '../mocks/Mocks';

class News extends React.Component {
    render() {
        return (
            <a className={S.news} href={this.props.link}>
                <img className={S.images} src={this.props.images} alt="" />
                <div className={S.info}>
                    <h4 className={S.title}>{this.props.title}</h4>
                    <p className={S.descript}>{this.props.descript}</p>
                </div>
            </a>
        );
    }
}
function TopNews() {
    const NewsTopNews = {
        title: 'Новости культуры России и всего мира',
        descript:
            'В минувшие выходные в Москве на фестивале «Оберег» вручили первую премию Russian World Music Awards',
        images: require('../images/news-photo.jpg'),
        link: 'https://www.gazeta.ru/culture/',
    };
    return (
        <div className={S.newsBlock}>
            <a
                href={NewsTopNews.link}
                className={S.topNews}
                style={{ backgroundImage: `url(${NewsTopNews.images})` }}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h4 className={S.topTitle}>{NewsTopNews.title}</h4>
                <p className={S.topDescript}>{NewsTopNews.descript}</p>
            </a>
            <div className={S.newsSmall}>
                {NewsList.map((item, i) => (
                    <News key={item.title + i} {...item} />
                ))}
            </div>
        </div>
    );
}

export class NewsContent extends React.Component {
    render() {
        return (
            <div>
                <TopNews />
            </div>
        );
    }
}
export { News, TopNews };
