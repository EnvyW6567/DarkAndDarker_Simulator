import React from "react";
import styled from "styled-components";

interface itemSlotProps {
    width: number;
    height: number;
    top: number;
    left: number;
    slotName: string;
}

interface styledProps {
    width: number;
    height: number;
    top: number;
    left: number;
}

const ItemSlot = styled.div<styledProps>`
    position: absolute;
    top: ${props => props.top + "px"};
    left: ${props => props.left + "px"};
    width: ${props => props.width + "px"};
    height: ${props => props.height + "px"};
    box-shadow: 0 0 0 3px #2C2C2C inset;
    background-color: #0B0B0B;

    &:hover {
        background-color: #424B22;
        opacity: 0.5;
        cursor: pointer;
    }
`

const ItemSlotComponent = (props: itemSlotProps) => {
    console.log(props);

    return (
        <ItemSlot
            width={props.width}
            height={props.height}
            top={props.top}
            left={props.left}
        >
        </ItemSlot>
    )
}

export default ItemSlotComponent
