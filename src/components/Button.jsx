import React from "react";
import styled, { css } from 'styled-components';

const StyledButton = styled.a`
display: flex;
align-items: center;
justify-content: center;
height: 48px;
width: 170px;
border-radius: 24px;
font-weight: 700;
color: ${props => props.color || props.theme.colors.secondary}

&:hover {
    cursor: pointer;
    opacity: 0.9;
    color: #DADADA;
    transition: all 0.5s ease;
}

${props => props.color_yellow && css`
background: #FFC300;`}

${props => props.color_purple && css`
background: #C86DD7;`}

${props => props.color_transparent && css`
border: 1px solid rgba(255, 255, 255, 0.295063);

@media ${props => props.theme.media.tablet} {
    display: none;
}`}
`


function Button(props) {
    return (
        <StyledButton href="" {...props}>
        </StyledButton>
    );
}

export default Button;