import React, {useState} from "react";
import styled from 'styled-components';
import MenuBody from "./MenuBody";

const StyledMenuIcon = styled.div`
display: none;

@media ${props => props.theme.media.tablet} {
    justify-content: end;

    padding-right: 10px;
    z-index: 5;
    display: block;
    position: relative;
    width: 30px;
    height: 18px;
    cursor: pointer;

    & span,
    &::before,
    &::after {
        left: 0;
        position: absolute;
        height: 12%;
        width: 100%;
        transition: all 0.3s ease 0s;
        background: linear-gradient(224.72deg, #3023AE -1%, #C86DD7 100.5%);
    }

    &::before,
    &::after {
        content: "";
    }

    &::before {
        top: 0;
    }

    &::after {
        bottom: 0;
    }

    & span {
        margin-top: -2.5%;
        top: 50%;
        transform: scale(1), translate(0px, -50%);
    }
}
`


function MenuIcon() {
    const items = [{value:"Home", href: ""}, {value:"Features", href: ""}, {value:"Works", href: ""}, {value:"About", href: ""}, {value:"People", href: ""}, {value:"News", href: ""}]

    const [open, setOpen] = useState(false);

    return (
    <>
        <StyledMenuIcon open={open} onClick={() => setOpen(!open)}>
        <span></span>
        </StyledMenuIcon>
        <MenuBody open={open} items={items}/>
    </>
        
    );
}

export default MenuIcon;