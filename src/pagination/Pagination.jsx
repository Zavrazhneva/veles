import React from 'react';
import S from './Pagination.module.css';
import cx from 'classnames';

export class Pagination extends React.Component {
    state = { currentPage: 1 };

    onNumberClick = (event) => {
        this.setState({ currentPage: +event.target.dataset.number });
    };
    onLeftArrowClick = (event) => {
        if (this.state.currentPage === 1) {
            return;
        }
        this.setState({ currentPage: this.state.currentPage - 1 });
    };
    onRightArrowClick = (event) => {
        if (this.state.currentPage === this.props.pagesCount) {
            return;
        }
        this.setState({ currentPage: this.state.currentPage + 1 });
    };

    render() {
        const { pagesCount } = this.props;
        const { currentPage } = this.state;
        const numbers = [];

        if (pagesCount < 7) {
            for (let i = 1; i <= pagesCount; i++) {
                numbers.push(
                    <PaginationNumber
                        number={i}
                        onClick={this.onNumberClick}
                        isActive={i === currentPage}
                    />
                );
            }
        } else {
            const showFist = currentPage > 4;
            let startIndex = 1;

            if (showFist) {
                startIndex = currentPage - 2;
            }
            const finishIndex = Math.min(startIndex + 4, pagesCount);
            console.log(finishIndex);
            if (finishIndex === pagesCount) {
                startIndex = pagesCount - 4;
            }
            if (showFist) {
                numbers.push(
                    <PaginationNumber
                        number={1}
                        onClick={this.onNumberClick}
                        isActive={1 === currentPage}
                    />,
                    <li>...</li>
                );
            }
            for (let i = startIndex; i <= finishIndex; i++) {
                numbers.push(
                    <PaginationNumber
                        number={i}
                        onClick={this.onNumberClick}
                        isActive={i === currentPage}
                    />
                );
            }
            const showLast = finishIndex < pagesCount;
            if (showLast) {
                numbers.push(
                    finishIndex + 1 !== pagesCount && <li>...</li>,
                    <PaginationNumber
                        number={pagesCount}
                        onClick={this.onNumberClick}
                        isActive={pagesCount === currentPage}
                    />
                );
            }
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
        );
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
    );
}
