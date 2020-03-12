import React from 'react';
import S from './News.module.css'



 class News extends React.Component {
    constructor(props) {
        super(props);
        this.listCreation = this.listCreation.bind(this);
    }
    
    listCreation() {
        return (
            <div className={S.news} >
                <img className={S.images} src={this.props.images} alt=""/>
                <div className={S.info}>
                    <h4 className={S.title}>{this.props.title}</h4>
                    <p className={S.descript}>{this.props.descript}</p>
                </div>  
            </div>
        )
    }
    render(){ 
        return ( 
            <div>
                {this.listCreation()}
            </div> 
        )
    }
}
function TopNews(props) {
    const NewsTopNews = {
        title: 'Новости культуры России и всего мира',
        descript: 'В минувшие выходные в Москве на фестивале «Оберег» вручили первую премию Russian World Music Awards',
        images: require('../images/news-photo.jpg')
      }
      return (  
          <div>
            <div className={S.topNews} style={{backgroundImage: `url(${NewsTopNews.images})`}}>
                <h4 className={S.topTitle}>{NewsTopNews.title}</h4>
                <p className={S.topDescript}>{NewsTopNews.descript}</p>
            </div>
          </div>
        
    )
  }
  export {News, TopNews}