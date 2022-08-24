import React from 'react'
import styled from 'styled-components'

import { device } from "../../../common/constants/device";

const StyledExploreSocial = styled.div`
    display: flex;
    width: 112px;
    justify-content: space-between;
    position: absolute;
    right: 15px;
    top: 688px;
    z-index: 5;

    @media ${device.tablet} {
        left: 50%;
        top: 750px;
        margin-left: -60px;
    }
`

const ExploreSocial = () => {
    return (
        <StyledExploreSocial>
            <a href="https://www.facebook.com/"><img src="img/explore/FB.svg" alt="FaceBook logo" /></a>
            <a href="https://twitter.com/"><img src="img/explore/TW.svg" alt="Twitter logo" /></a>
            <a href="https://www.instagram.com/"><img src="img/explore/Ist.svg" alt="Instagram logo" /></a>
        </StyledExploreSocial>
    )
}

export default ExploreSocial