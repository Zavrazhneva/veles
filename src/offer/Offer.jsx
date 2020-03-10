import React from 'react';
import S from './Offer.module.css'

export class Offer extends React.Component {

    render(){
        return (
            
                <div className={S.offer}>
                    <a href="#" className={S.button}>Новое</a>
                    <div className={S.slider}>
                    <h3 className={S.title}>Подводный отель</h3>
                </div>
            </div>
            
        )
    }
}