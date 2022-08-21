import React from "react";
import styled from 'styled-components';
import HeaderContainer from "./HeaderContainer";

const StyledHeader = styled.header`
position: absolute;
width: 100%;
top: 0;
left: 0;
z-index: 50;
color: ${props => props.color || props.theme.colors.secondary};
`

function Header(props) {
    return (
        <StyledHeader {...props}>
            <HeaderContainer></HeaderContainer>
        </StyledHeader>
    );
}

export default Header;