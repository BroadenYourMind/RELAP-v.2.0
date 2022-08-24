import React from 'react'
import styled from 'styled-components'

import { device } from "../../../common/constants/device";

const StyledExploreImage = styled.div`
    position: relative;
    flex: 0 1 auto;

    @media ${device.tablet} {
        max-height: 560px;
        flex: 1 1 auto;
    }

    @media ${device.mobile} {
        display: flex;
        width: 100%;
        justify-content: start;
    }
`

const Image = styled.img`
    position: relative;
    z-index: 2;

    @media ${device.tablet} {
        width: 100%;
        min-width: 500px;
    }

    @media ${device.mobile} {
        min-width: 135%;
    }
`

const Decor = styled.div`
    position: absolute;
    content: "";
    background: var(--purple);
    border-radius: 50%;

    &:nth-child(1) {
        bottom: -53px;
        left: -49px;
        width: 100px;
        height: 100px;
        
        @media ${device.tablet} {
            bottom: 30px;
            left: -48px;
            width: 100px;
            height: 100px;
        }
    }
    
    &:nth-child(2) {
        bottom: -133px;
        right: -268px;
        width: 396px;
        height: 396px;
    }

    &:nth-child(3) {
        top: 37px;
        right: 2px;
        width: 156px;
        height: 156px;
    }

    &:nth-child(4) {
        top: -90px;
        right: -184px;
        width: 78px;
        height: 78px;
    }
`

const ExploreImage = () => {
    return (
        <StyledExploreImage>
            <Image src="img/explore/illustration.svg" alt="Стол с ноутбуком" />
            <Decor />
            <Decor />
            <Decor />
            <Decor />
        </StyledExploreImage>
    )
}

export default ExploreImage