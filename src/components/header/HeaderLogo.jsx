import React from "react";
import styled from 'styled-components';
import { device } from "../../common/constants/device";

const StyledHeaderLogo = styled.a`
    font-family: 'Poppins';
    z-index: 10;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;

    @media ${device.tablet} {
        font-size: 24px;
        line-height: 1.33;
        color: var(--grey)
    }
`

function HeaderLogo(props) {
    return (
        <StyledHeaderLogo href="" {...props} />
    );
}

export default HeaderLogo;