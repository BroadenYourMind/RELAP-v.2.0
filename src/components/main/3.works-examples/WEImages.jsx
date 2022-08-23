import React from 'react'
import styled from 'styled-components'

import { device } from "../../../common/constants/device";

const StyledWEImages = styled.div`
display: flex;
justify-content: space-between;

@media ${device.laptop} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
`

const Item = styled.div`
position: relative;
width: 370px;
height: 272px;
display: flex;
flex-direction: column;
justify-content: end;

&::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0; 
    left: 0;
    background-color: rgba(0,0,0,0.5);
    opacity: 0;
}

&:hover div{
    display: block;
}

&:hover:after {
    opacity: 0.5;
}

@media ${device.laptop} {
    margin-bottom: 30px;
}

@media ${device.mobile} {
    margin-bottom: 17px;
}
`

const Image = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;
`

const TextBlock = styled.div`
color: var(--white);
display: none;
margin-left: 32px;
margin-bottom: 26px;
`

const Title = styled.p`
font-family: 'Poppins';
font-weight: 700;
font-size: 24px;
line-height: 1.33;
position: relative;
z-index: 1;
margin-bottom: 9px;`

const Text = styled.p`
font-weight: 400;
mix-blend-mode: normal;
opacity: 0.5;
z-index: 1;`

const WEImages = ({images}) => {
    return (
        <StyledWEImages>{images.map(image => 
            <Item>
                <Image src={image.src}
                alt="Variation of work" />
                <TextBlock>
                <Title>{image.title}</Title>
                <Text>{image.text}</Text>
                </TextBlock>
            </Item>
            )}</StyledWEImages>
    )
}

export default WEImages