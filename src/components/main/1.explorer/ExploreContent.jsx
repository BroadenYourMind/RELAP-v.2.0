import React from 'react'
import Button from '../../Button'
import styled from 'styled-components'

const StyledExploreContent = styled.div`
padding: 85px 0 192px 0;
max-width: 360px;
color: ${props => props.color || props.theme.colors.secondary};

p {
    padding: 26px 0 34px 0;
}

@media ${props => props.theme.media.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-width: 100%;
    padding-top: 23px;
    padding-bottom: 19px;

    h1 {
        font-size: 56px;
        line-height: 1.14;
    }
}

@media ${props => props.theme.media.mobile} {
    align-items: flex-start;
    text-align: start;
}
`

const ExploreContent = (props) => {
    return (
        <StyledExploreContent {...props}>
            <h1>Omnis Voluptas</h1>
            <p>Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae.
            </p>
            <Button color_yellow>Explore</Button>
        </StyledExploreContent>
    )
}

export default ExploreContent