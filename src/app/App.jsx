import React from 'react'
import { Header } from '../header/Header'
import { Offer } from '../offer/Offer'
import S from './App.module.css'
import { Content } from '../content/Content'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { SimpleSlider } from '../SimpleSlider/simpleSlider'

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Offer />
                <Content />
                <SimpleSlider />
                <Header />
            </div>
        )
    }
}
