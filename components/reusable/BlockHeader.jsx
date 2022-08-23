import React from 'react'
import styled, { css } from 'styled-components'

const StyledBlockHeader = styled.div`
p {
font-family: 'Poppins';
font-weight: 700;
text-transform: uppercase;
margin-bottom: 18px;
}

${props => props.color_white && css`
color: ${props => props.color || props.theme.colors.secondary};
}`}

${props => props.notesHeader && css`
padding-bottom: 54px;

@media ${props => props.theme.media.mobile} {
    padding-bottom: 40px;
}`}

${props => props.worksExampleHeader && css`
padding-top: 62px;
flex: 0 1 431px;

${props => props.theme.media.laptop} {
    max-width: 350px;
}
${props => props.theme.media.tablet} {
    padding-top: 29px;
}
`}

`

const BlockHeader = (props) => {
    return (
        <StyledBlockHeader {...props} >
            <p>{props.text}</p>
            <h2>{props.title}</h2>
        </StyledBlockHeader>
    )
}

export default BlockHeader