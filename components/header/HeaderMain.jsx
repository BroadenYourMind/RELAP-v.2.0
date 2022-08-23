import React from "react";
import styled from 'styled-components';

import { device } from "@/common/constants/device";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import StyledButton from "components/reusable/Button";
import containerStyles from "components/reusable/Container";

const StyledHeader = styled.header`
position: absolute;
width: 100%;
top: 0;
left: 0;
z-index: 50;
color: ${props => props.color || props.theme.colors.secondary};
`

const StyledHeaderContainer = styled.div`
display: flex;
height: 78px;
align-items: flex-end;
${containerStyles}

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