import React from 'react';
import S from './Pagination.module.css'
import cx from 'classnames'

export class Pagination extends React.Component {

    
    render(){
        const { pagesCount, activePage, onPageChange} = this.props;

        const numbers = [];
        let num = 5;
        let test = Math.min(pagesCount, num)
        for(let i=1; i<=test; i++) {
            
            if( i === activePage) {
                numbers.push(<li className={cx(S.item, S.active)}>{i}</li>);
            } else {
                numbers.push(<li className={S.item}>{i}</li>);
            }
            
        }

        if( test >= num ) {
            numbers.push(<li className={S.item}>...</li>, <li className={S.item}>{pagesCount}</li>)
        }
        return (

            <ul className={S.list}>
                {numbers}
            </ul>
            
        
        )
    }
}