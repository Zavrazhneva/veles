import React from 'react'
import S from './News.module.css'
import { NewsList } from '../mocks/Mocks'

class News extends React.Component {
    render() {
        return (
            <div className={S.news}>
                <img className={S.images} src={this.props.images} alt="" />
                <div className={S.info}>
                    <h4 className={S.title}>{this.props.title}</h4>
                    <p className={S.descript}>{this.props.descript}</p>
                </div>
            </div>
        )
    }
}
function TopNews() {
    const NewsTopNews = {
        title: 'Новости культуры России и всего мира',
        descript:
            'В минувшие выходные в Москве на фестивале «Оберег» вручили первую премию Russian World Music Awards',
        images: require('../images/news-photo.jpg'),
    }
    return (
        <div className={S.newsBlock}>
            <div
                className={S.topNews}
                style={{ backgroundImage: `url(${NewsTopNews.images})` }}
            >
                <h4 className={S.topTitle}>{NewsTopNews.title}</h4>
                <p className={S.topDescript}>{NewsTopNews.descript}</p>
            </div>
            <div className={S.newsSmall}>
                {NewsList.map((item) => (
                    <News {...item} />
                ))}
            </div>
        </div>
    )
}

export class NewsContent extends React.Component {
    render() {
        return (
            <div>
                <News />
                <TopNews />
            </div>
        )
    }
}
export { News, TopNews }
