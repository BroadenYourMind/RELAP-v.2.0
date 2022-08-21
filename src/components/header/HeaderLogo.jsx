import React from "react";
import styled from 'styled-components';

const StyledHeaderLogo = styled.a`
font-family: 'Poppins';
z-index: 10;
font-weight: 700;
font-size: 40px;
line-height: 1.2;

@media ${props => props.theme.media.tablet} {
    font-size: 24px;
    line-height: 1.33;
    color: ${props => props.color || props.theme.colors.primary}
}
`


function HeaderLogo(props) {
    return (
        <StyledHeaderLogo href="" {...props}>
        </StyledHeaderLogo>
    );
}

export default HeaderLogo;