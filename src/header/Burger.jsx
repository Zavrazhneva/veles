import React from "react";
import S from './Header.module.css'

export class Burger extends React.Component{
    constructor(props) {
        super(props);
        this.burgerOnChange = this.burgerOnChange.bind(this);
    }

    burgerOnChange() {
        this.props.onBurgerClick();
    }

    render() {
        return (
            <div className={S.burger} onClick={this.burgerOnChange}>
                <div className={S.div}/>
                <div className={S.div}/>
                <div className={S.div}/>
            </div>
        )
    }

}
