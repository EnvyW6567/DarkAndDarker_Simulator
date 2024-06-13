import React from 'react';
import styled from "styled-components";
import ItemListView from "./views/ItemList.view";
import ProfileInfoView from "./views/ProfileInfo.view";

const Main = styled.div`
    width: 1440px;
    height: 100%;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: row;
`

const MainScreen = () => {

    return (
        <Main>
            <ItemListView/>
            <ProfileInfoView/>
        </Main>
    )
}

export default MainScreen;
