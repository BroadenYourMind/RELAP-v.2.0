import React from "react";
import styled from 'styled-components';

import { device } from "../../common/constants/device";
import MenuIcon from "./headerMenu/MenuIcon";

const StyledHeaderMenu = styled.div`
display: flex;
justify-content: center;
flex: 1 1 auto; 
margin-bottom: 5px;

@media ${device.tablet} {
    justify-content: end;
}
`


function HeaderMenu(props) {
    return (
        <StyledHeaderMenu {...props}>
            <MenuIcon/>
        </StyledHeaderMenu>
    );
}

export default HeaderMenu;