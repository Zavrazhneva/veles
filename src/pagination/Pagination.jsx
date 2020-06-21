import React from 'react'
import S from './Pagination.module.css'
import cx from 'classnames'

export class Pagination extends React.Component {
    state = { currentPage: 1 }

    onNumberClick = (event) => {
        this.setState({ currentPage: +event.target.dataset.number })
    }

    onLeftArrowClick = (event) => {
        if (this.state.currentPage === 1) {
            return
        }
        this.setState({ currentPage: this.state.currentPage - 1 })
    }
    onRightArrowClick = (event) => {
        if (this.state.currentPage === this.props.pagesCount) {
            return
        }
        this.setState({ currentPage: this.state.currentPage + 1 })
    }

    render() {
        const { pagesCount, activePage, onPageChange } = this.props
        const { currentPage } = this.state
        const numbers = []
        let num = 5
        let test = Math.min(pagesCount, num)
        for (let i = 1; i <= test; i++) {
            numbers.push(
                <PaginationNumber
                    onClick={this.onNumberClick}
                    number={i}
                    isActive={i === currentPage}
                />
            )
        }
        if (test >= num) {
            numbers.push(
                <li className={S.item}>...</li>,
                <PaginationNumber
                    number={pagesCount}
                    onClick={this.onNumberClick}
                    isActive={pagesCount === currentPage}
                />
            )
        }
        return (
            <div className={S.pagination}>
                <div className={S.arrowLeft} onClick={this.onLeftArrowClick} />
                <ul className={S.list}>{numbers}</ul>
                <div
                    className={S.arrowRight}
                    onClick={this.onRightArrowClick}
                />
            </div>
        )
    }
}

function PaginationNumber({ number, onClick, isActive }) {
    return (
        <li
            className={cx(S.item, { [S.active]: isActive })}
            data-number={number}
            onClick={onClick}
        >
            {number}
        </li>
    )
}
