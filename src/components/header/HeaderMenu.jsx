import React from "react";
import styled from 'styled-components';
import MenuIcon from './headerMenu/MenuIcon'

const StyledHeaderMenu = styled.div`
display: flex;
justify-content: center;
flex: 1 1 auto; 
margin-bottom: 5px;

@media ${props => props.theme.media.tablet} {
    justify-content: end;
}
`


function HeaderMenu(props) {
    return (
        <StyledHeaderMenu {...props}>
            <MenuIcon></MenuIcon>
        </StyledHeaderMenu>
    );
}

export default HeaderMenu;