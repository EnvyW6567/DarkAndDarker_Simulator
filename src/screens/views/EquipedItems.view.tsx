import React from "react";
import styled from "styled-components";
import ItemSlotComponent from "../../components/ItemSlot.component";

const Container = styled.div`
        width: 540px;
        height: 520px;
        margin: auto;
        position: relative;
`

const EquipedItemsView = () => {
    return(
        <Container>
            <ItemSlotComponent width={75} height={180} top={40} left={0} slotName={"firstWeapon_primary"}/>
            <ItemSlotComponent width={75} height={180} top={40} left={75} slotName={"secondaryWeapon_secondary"}/>
            <ItemSlotComponent width={75} height={180} top={40} left={390} slotName={"secondWeapon_primary"}/>
            <ItemSlotComponent width={75} height={180} top={40} left={465} slotName={"secondWeapon_secondary"}/>
            <ItemSlotComponent width={75} height={75} top={70} left={235} slotName={"head"}/>
            <ItemSlotComponent width={100} height={150} top={185} left={225} slotName={"chest"}/>
            <ItemSlotComponent width={100} height={150} top={370} left={225} slotName={"legs"}/>
            <ItemSlotComponent width={75} height={75} top={440} left={350} slotName={"foots"}/>
            <ItemSlotComponent width={75} height={75} top={255} left={120} slotName={"hands"}/>
            <ItemSlotComponent width={75} height={75} top={255} left={350} slotName={"cape"}/>
            <ItemSlotComponent width={40} height={40} top={110} left={332} slotName={"necklace"}/>
            <ItemSlotComponent width={40} height={40} top={370} left={155} slotName={"ring_1"}/>
            <ItemSlotComponent width={40} height={40} top={370} left={350} slotName={"ring_2"}/>
        </Container>
    )

}

export default EquipedItemsView
