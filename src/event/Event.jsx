import React from 'react';
import S from './Event.module.css';
import classNames from "classnames"


console.log(S)
export class Event extends React.Component {
    constructor(props) {
        super(props);
        this.listCreation = this.listCreation.bind(this);
    }
    listCreation() {

        return (
        <div className={S.event} style={{backgroundImage: `url(${this.props.images})`}}>
                <div className={S.info}>
                    <h4 className={classNames(S.title, {[S.titleWhite]:this.props.contrast})}>{this.props.title}</h4>
                    <a className={classNames(S.button, {[S.buttonDark]:this.props.contrast})} href={this.props.link}>Смотреть</a>
                </div>  
        </div>
        )
        }

    render(){
        
        return ( 
            <div className={S.event} >
                {this.listCreation()}
            </div> 
        )
    }
}