import React from 'react';
import {Footer} from '../header/Header';
import {Offer} from '../offer/Offer';
import S from './App.module.css'

export class App extends React.Component {
  
  
  render(){
      return (
        <div className="App">
        <h2 className={S.title}>Новости культуры</h2>
        <Footer/>
        <Offer/>
      </div>
      )
  }
}