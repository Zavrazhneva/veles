import React from 'react';
import S from './Pagination.module.css';
import cx from 'classnames';

export class Pagination extends React.Component {
    onNumberClick = (event) => {
        this.props.onPageChange(+event.target.dataset.number);
    };

    onLeftArrowClick = (event) => {
        if (this.props.currentPage === 1) {
            return;
        }
        this.props.onPageChange(this.props.currentPage - 1);
    };
    onRightArrowClick = (event) => {
        if (this.props.currentPage === this.props.pagesCount) {
            return;
        }
        this.props.onPageChange(this.props.currentPage + 1);
    };

    render() {
        const { pagesCount, currentPage } = this.props;
        const numbers = [];

        if (pagesCount < 7) {
            for (let i = 1; i <= pagesCount; i++) {
                numbers.push(
                    <PaginationNumber
                        number={i}
                        onClick={this.onNumberClick}
                        isActive={i === currentPage}
                        key={i}
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
            if (finishIndex === pagesCount) {
                startIndex = pagesCount - 4;
            }
            if (showFist) {
                numbers.push(
                    <PaginationNumber
                        number={1}
                        onClick={this.onNumberClick}
                        isActive={1 === currentPage}
                        key={1}
                    />,
                    <li key={'before-dots'}>...</li>
                );
            }
            for (let i = startIndex; i <= finishIndex; i++) {
                numbers.push(
                    <PaginationNumber
                        number={i}
                        onClick={this.onNumberClick}
                        isActive={i === currentPage}
                        key={i}
                    />
                );
            }
            const showLast = finishIndex < pagesCount;
            if (showLast) {
                numbers.push(
                    finishIndex + 1 !== pagesCount && (
                        <li key={'after-dots'}>...</li>
                    ),
                    <PaginationNumber
                        number={pagesCount}
                        onClick={this.onNumberClick}
                        isActive={pagesCount === currentPage}
                        key={pagesCount}
                    />
                );
            }
        }
        return (
            <div className={S.pagination}>
                <div
                    className={cx(S.arrowLeft, S.arrow)}
                    onClick={this.onLeftArrowClick}
                />
                <ul className={S.list}>{numbers}</ul>
                <div
                    className={cx(S.arrowRight, S.arrow)}
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
