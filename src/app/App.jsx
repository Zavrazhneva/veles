import React from 'react';
import {Footer} from '../header/Header';
import {Offer} from '../offer/Offer';
import {Event} from '../event/Event';
import {News} from '../news/News';
import S from './App.module.css'

const NavigationList = [
  {
      title: "Воздушные шары",
      link: "https://spb.poletynashare.ru/",
      images: require('../images/drew-colins.jpg'),
  },
  {
      title: "Необычная фотосессия",
      link: "https://www.mindo.ru/ptichki",
      images: require('../images/jeremy-bishop.jpg'),
  },
  {
      title: "Выставка птиц",
      link: "https://www.mindo.ru/ptichki",
      images: require('../images/bogdan-pasca.jpg')
  }
  ];

  const NewsList = [
    {
        title: 'Открытие нового памятника Евгению Леонову',
        descript: '10 сентября в 15:00 был открыт памятник писателю',
        images: require('../images/news-photo.jpg')

    },
    {
        title: 'Беседы с писателями',
        descript: 'Русские писатели говорят о важности искусства',
        images: require('../images/news-photo.jpg')

    },
    {
        title: 'День и ночь св. Патрика: встреча старых друзей',
        descript: 'Не Джойсом единым живет Ирландия!',
        images: require('../images/news-photo.jpg')

    }
]
export class App extends React.Component {
  
  render(){
      return (
        <div className="App">
        <h2 className={S.title}>Новости культуры</h2>
        <Footer/>
        <Offer/>
        <div className={S.content}>
          <div>{NewsList.map((item) => <News {...item}/>)}</div>
          <div>
            {NavigationList.map((number) => <Event {...number}/>)}
          </div>
          
          
        </div>
        
      </div>
      )
  }
}