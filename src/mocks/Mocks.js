const NewsList = [
    {
        title: 'Беседы с писателями',
        descript: 'Русские писатели говорят о важности искусства',
        images: require('../images/news-photo2.jpg')

    },
    {
        title: 'День и ночь св. Патрика: встреча старых друзей',
        descript: 'Не Джойсом единым живет Ирландия!',
        images: require('../images/news-photo3.jpg')

    },
    {
        title: 'День и ночь св. Патрика: встреча старых друзей',
        descript: 'Не Джойсом единым живет Ирландия!',
        images: require('../images/news-photo4.jpg')

    }
]

const OverviewsItems = [
    {
        title: "Анатомия за 30 секунд",
        link: "https://spb.poletynashare.ru/",
        images: require('../images/overview1.jpg'),
        descript: 'В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»'
    },
    {
        title: "Анатомия за 30 секунд",
        link: "https://www.mindo.ru/ptichki",
        images: require('../images/overview2.jpg'),
        descript: 'В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»'
    },
    {
        title: "Анатомия за 30 секунд",
        link: "https://www.mindo.ru/ptichki",
        images: require('../images/overview3.jpg'),
        descript: 'В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»'
    },
    {
        title: "Анатомия за 30 секунд",
        link: "https://www.mindo.ru/ptichki",
        images: require('../images/overview4.jpg'),
        descript: 'В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»'
    }
];


const NavigationList = [
    {
        title: "Воздушные шары",
        link: "https://spb.poletynashare.ru/",
        images: require('../images/drew-colins.jpg'),
        contrast: false
    },
    {
        title: "Необычная фотосессия",
        link: "https://www.mindo.ru/ptichki",
        images: require('../images/jeremy-bishop.jpg'),
        contrast: true
    },
    {
        title: "Выставка птиц",
        link: "https://www.mindo.ru/ptichki",
        images: require('../images/bogdan-pasca.jpg'),
        contrast: true
    }
];

export const BottomEventMockData = {
    title: "Воздушные шары", link: "https://spb.poletynashare.ru/",
    images: require('../images/bottom-event.jpg'),
    contrast: true,
    horizontal: true
}

export {NewsList, NavigationList, OverviewsItems}