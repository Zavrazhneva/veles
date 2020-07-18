import React from 'react';
import S from './App.module.css';
import { Content } from '../content/Content';
import { InnerPath } from '../ innerPages/InnerPath';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

export function App() {
    return (
        <BrowserRouter>
            <div className={S.app}>
                <Switch>
                    <Route component={Content} path="/" exact />
                    <Route
                        path="/:id"
                        render={(props) => <InnerPath {...props} />}
                    />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

//onClick на закрывание меню мобильного
//отображение меню мобильного на ширине от 320
//адаптивность
//придумать блоки для innerPage
//поправить блок верхней часть от innerPage , при работе с хедером скачет высота
