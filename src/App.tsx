import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";

import {useTheme} from "./theme/useTheme";
import {className} from "./helpers/className/className";



const App = () => {

    const {theme, toggleTheme} = useTheme()
    return (
        <div className={className('app', {}, [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading....</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
};

export default App;