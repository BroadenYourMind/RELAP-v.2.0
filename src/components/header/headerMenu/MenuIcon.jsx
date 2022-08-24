import React, { useState } from "react";
import styled from 'styled-components';

import { device } from "../../../common/constants/device";

import MenuBody from "./MenuBody";

const StyledMenuIcon = styled.div`
    display: none;

    @media ${device.tablet} {
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
            background: var(--purple);
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
    const items = [{ value: "Home", href: "" }, { value: "Features", href: "" }, { value: "Works", href: "" }, { value: "About", href: "" }, { value: "People", href: "" }, { value: "News", href: "" }]

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <StyledMenuIcon isOpen={isOpen} onClick={() => [setIsOpen(!isOpen), document.body.classList.toggle('_lock')]}>
                <span></span>
            </StyledMenuIcon>
            <MenuBody isOpen={isOpen} items={items} />
        </>

    );
}

export default MenuIcon;