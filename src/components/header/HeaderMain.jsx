import React from "react";
import styled from 'styled-components';

import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import containerStyles from "../reusable/Container";
import StyledButton from "../reusable/Button";

import { device } from "../../common/constants/device";

const StyledHeader = styled.header`
position: absolute;
width: 100%;
top: 0;
left: 0;
z-index: 50;
color: var(--white);
`

const StyledHeaderContainer = styled.div`
${containerStyles}
display: flex;
height: 78px;
align-items: flex-end;


@media ${device.tablet} {
    background: #FFFFFF;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.0984488);
    height: 64px;
    align-items: center;
}
`


function HeaderMain(props) {
    return (
        <StyledHeader {...props}>
            <StyledHeaderContainer>
                <HeaderLogo>RELAP</HeaderLogo>
                <HeaderMenu/>
                <StyledButton colorTransparent>Contact Us</StyledButton>
            </StyledHeaderContainer>
        </StyledHeader>
    );
}

export default HeaderMain;