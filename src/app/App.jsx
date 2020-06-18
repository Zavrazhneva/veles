import React from 'react';
import {Footer} from '../header/Header';
import {Offer} from '../offer/Offer';
import S from './App.module.css'
import {Content} from '../content/Content';
import {Pagination} from '../pagination/Pagination';


export class App extends React.Component {

    render() {
        return (
            <div className="App">
                <h2 className={S.title}>Новости культуры</h2>
                <Footer/>
                <Offer/>
                <Pagination  pagesCount={30} activePage={3} onPageChange={(i)=>{
                  console.log(i)
                }}/>
                 <Pagination  pagesCount={3} activePage={3} onPageChange={(i)=>{
                  console.log(i)
                }}/>
                <Content/>
            </div>
        )
    }
}