import { OverviewsItems } from './Mocks';

export function getOverviews(numberPage) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = OverviewsItems.map((item) => {
                const newItem = Object.assign({}, item);
                newItem.title += numberPage;
                return newItem;
            });
            resolve(data);
        }, 500);
    });
}
