import React from 'react';
import S from './App.module.css';
import {Content} from '../content/Content';
import {InnerPath} from "../ innerPages/InnerPath";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import {BrowserRouter, Switch, Route} from 'react-router-dom';


export function App() {
    return (
        <BrowserRouter>
            <div className={S.app}>

                <Switch>
                    <Route component={Content} path='/' exact/>
                    <Route path="/reviews"  render={(props)=><InnerPath  {...props}/>}  />
                    <Route path="/music"  render={(props)=><InnerPath  {...props}/>}  />
                    <Route path="/theater"  render={(props)=><InnerPath  {...props}/>}  />
                    <Route path="/literature"  render={(props)=><InnerPath  {...props}/>}  />
                    <Route path="/religion"  render={(props)=><InnerPath  {...props}/>}  />
                    <Route path="/painting"  render={(props)=><InnerPath  {...props}/>}  />
                    <Route path="/movie"  render={(props)=><InnerPath  {...props}/>}  />
                    <Route path="/architecture"  render={(props)=><InnerPath  {...props}/>}  />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

