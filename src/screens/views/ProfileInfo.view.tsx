import React from "react";
import styled from "styled-components";
import EquipedItemsView from "./EquipedItems.view";

const Container = styled.div`
    width: 50%;
    height: 100%;
`

const ProfileInfoView = () => {

    return (
        <Container>
            <EquipedItemsView/>
        </Container>
    )

}

export default ProfileInfoView
