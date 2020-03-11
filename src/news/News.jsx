import React from 'react';
import S from './News.module.css'



export class News extends React.Component {
    constructor(props) {
        super(props);
        this.listCreation = this.listCreation.bind(this);
    }

    
    listCreation() {
        return (
        <div style={{backgroundImage: `url(${this.props.images})`}}>
            <div className={S.info}>
                <h4 className={S.title}>{this.props.title}</h4>
                <p className={S.descript}>{this.props.descript}</p>
            </div>  
        </div>
        )
    }

    render(){
        return ( 
            <div >
                {this.listCreation()}
            </div> 
        )
    }
}