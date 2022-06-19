import React from "react";
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from "react-router-dom";

import MeComponent from "./MeComponent";
import AppFccWeather from "./FCCWeather/AppFccWeather";
import AppWikiViewer from "./WikiViewer/AppWikiViewer";
import AppTwitchStreamers from "./TwitchStreamers/AppTwitchStreamers";
import AppRecipeBox from "./RecipeBox/AppRecipeBox";
import AppHeaderParser from "./HeaderParser/AppHeaderParser";

const styles = {
    home: {
        position: 'absolute',
        margin: '10px',
        top: '10px',
        left: '10px',
        fontSize: '18px',
        backgroundImage: 'url("/app.jpg")',
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
    },
    link: {
        position: 'absolute',
        margin: '10px',
        top: '10px',
        left: '10px',
        fontSize: '18px',
    }
}

const Home = () => {
    return (
        <div style={ styles.home }>
            <ul>
                <li>
                    <Link to='/app-fcc-weather'>AppFccWeather</Link>
                </li>
                <li>
                    <Link to='/app-wiki-viewer'>AppWikiViewer</Link>
                </li>
                <li>
                    <Link to='/app-twitch'>AppTwitchStreamers</Link>
                </li>
                <li>
                    <Link to='/app-recipe-box'>AppRecipeBox</Link>
                </li>
                <li>
                    <Link to='/app-header-parser'>AppHeaderParser</Link>
                </li>
            </ul>
        </div>
    )
}

const AppRoutes = () => {

    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/home' element='' />
                    <Route path="*" element={<Link style={ styles.link }
                                            to='/home'>Home</Link>} />
                </Routes>
            </div>
            <div>
                <Routes>
                    <Route path='/home' element={ <Home /> } />
                    <Route path='/app-fcc-weather' element={ <AppFccWeather /> } />
                    <Route path='/app-wiki-viewer' element={ <AppWikiViewer /> } />
                    <Route path='/app-twitch' element={ <AppTwitchStreamers /> } />
                    <Route path='/app-recipe-box' element={ <AppRecipeBox /> } />
                    <Route path='/app-header-parser' element={ <AppHeaderParser /> } />
                    <Route exact path="*" element={ <Navigate replace to="/home" /> } />
                </Routes>
            </div>
            <MeComponent />
        </Router>
    );
}

export default AppRoutes;