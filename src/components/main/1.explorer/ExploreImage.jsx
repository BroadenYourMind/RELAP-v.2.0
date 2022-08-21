import React from 'react'
import styled from 'styled-components'

const StyledExploreImage = styled.div`
position: relative;
flex: 0 1 auto;

@media ${props => props.theme.media.tablet} {
    max-height: 560px;
    flex: 1 1 auto;
}

@media ${props => props.theme.media.mobile} {
    display: flex;
    width: 100%;
    justify-content: start;
}

img {
    position: relative;
    z-index: 2;
    
    @media ${props => props.theme.media.tablet} {
        width: 100%;
        min-width: 500px;
    }
    
    @media ${props => props.theme.media.mobile} {
        min-width: 135%;
    }
}

div {
    position: absolute;
    content: "";
    background: linear-gradient(224.72deg, #3023AE -1%, #C86DD7 100.5%);
    border-radius: 50%;

    &:nth-child(1) {
        bottom: -53px;
        left: -49px;
        width: 100px;
        height: 100px;
        
        @media ${props => props.theme.media.tablet} {
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
}
`

const ExploreImage = () => {
    return (
        <StyledExploreImage>
            <img src="img/explore/illustration.svg" alt="Стол с ноутбуком"></img>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </StyledExploreImage>
    )
}

export default ExploreImage