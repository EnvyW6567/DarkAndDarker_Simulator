import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import MainScreen from "./screens/Main";
import styled from "styled-components";

const Wallpaper = styled.div`
    height: 100%;
    width: 100%;
    positio: relative;
    background-image: url("https://front.darkanddarker.com/news_media_1.webp");
    background-repeat: no-repeat;
    background-size: cover;
`

const App = () =>  {
    return (
        <Wallpaper>
            <Routes>
                <Route path="/main" element={<MainScreen/>}/>
            </Routes>
        </Wallpaper>
    );
}

export default App;
