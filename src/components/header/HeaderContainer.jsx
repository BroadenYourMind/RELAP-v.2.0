import React from "react";
import styled from 'styled-components';
import Button from "../Button";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import containerStyles from "../Container";

const StyledHeaderContainer = styled.div`
display: flex;
height: 78px;
align-items: flex-end;
${containerStyles}

@media ${props => props.theme.media.tablet} {
    background: #FFFFFF;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.0984488);
    height: 64px;
    align-items: center;
}
`


function HeaderContainer(props) {
    return (
        <StyledHeaderContainer {...props}>
            <HeaderLogo>RELAP</HeaderLogo>
            <HeaderMenu></HeaderMenu>
            <Button color_transparent>Contact Us</Button>
        </StyledHeaderContainer>
    );
}

export default HeaderContainer;