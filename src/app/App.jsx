import React from 'react';
import {Footer} from '../header/Header';
import {Offer} from '../offer/Offer';
import {Event} from '../event/Event';
import {News, TopNews} from '../news/News';
import {Overviews} from '../overviews/Overviews';
import S from './App.module.css'

const NavigationList = [
  {
      title: "Воздушные шары",
      link: "https://spb.poletynashare.ru/",
      images: require('../images/drew-colins.jpg'),
      contrast: false
  },
  {
      title: "Необычная фотосессия",
      link: "https://www.mindo.ru/ptichki",
      images: require('../images/jeremy-bishop.jpg'),
      contrast: true
  },
  {
      title: "Выставка птиц",
      link: "https://www.mindo.ru/ptichki",
      images: require('../images/bogdan-pasca.jpg'),
      contrast: true
  }
  ];

const OverviewsItems = [
    {
        title: "Анатомия за 30 секунд",
        link: "https://spb.poletynashare.ru/",
        images: require('../images/overview1.jpg'),
        descript: 'В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»'
    },
    {
        title: "Анатомия за 30 секунд",
        link: "https://www.mindo.ru/ptichki",
        images: require('../images/overview2.jpg'),
        descript: 'В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»'
    },
    {
        title: "Анатомия за 30 секунд",
        link: "https://www.mindo.ru/ptichki",
        images: require('../images/overview3.jpg'),
        descript: 'В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»'
    },
    {
      title: "Анатомия за 30 секунд",
      link: "https://www.mindo.ru/ptichki",
      images: require('../images/overview4.jpg'),
      descript: 'В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»'
  }
    ];

const NewsList = [
    {
        title: 'Беседы с писателями',
        descript: 'Русские писатели говорят о важности искусства',
        images: require('../images/news-photo2.jpg')

    },
    {
        title: 'День и ночь св. Патрика: встреча старых друзей',
        descript: 'Не Джойсом единым живет Ирландия!',
        images: require('../images/news-photo3.jpg')

    },
    {
      title: 'День и ночь св. Патрика: встреча старых друзей',
      descript: 'Не Джойсом единым живет Ирландия!',
      images: require('../images/news-photo4.jpg')

  }
]
export class App extends React.Component {
  
  render(){
      return (
        <div className="App">
        <h2 className={S.title}>Новости культуры</h2>
        <Footer/>
        <Offer/>
        <div className={S.contentWrapper}>
          <h3 className={S.titleBlocks}>Новости</h3>
          <div className={S.content}>
            <div className={S.contentLeft}>
              <div className={S.news}>
                <TopNews/>
                <div className={S.newsSmall}>{NewsList.map((item) => <News {...item}/>)}</div>
              </div>
              <div className={S.overviews}>
              {OverviewsItems.map((i) => <Overviews {...i}/>)}
              </div>
            </div>
            <div className={S.contentRight}>
              {NavigationList.map((number) => <Event {...number}/>)}
            </div>  
          </div>
        </div>
        
        
      </div>
      )
  }
}