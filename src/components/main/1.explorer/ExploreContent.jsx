import { device } from "../../../common/constants/device";
import React from 'react'
import styled from 'styled-components'
import StyledButton from "../../reusable/Button";

const StyledExploreContent = styled.div`
    padding: 85px 0 192px 0;
    max-width: 360px;
    color: var(--white);

    @media ${device.tablet} {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        min-width: 100%;
        padding-top: 23px;
        padding-bottom: 19px;
    }

    @media ${device.mobile} {
        align-items: flex-start;
        text-align: start;
    }
`

const Desctiption = styled.p`
    padding: 26px 0 34px 0;
`

const ExploreContent = (props) => {
    return (
        <StyledExploreContent {...props}>
            <h1>Omnis Voluptas</h1>
            <Desctiption>Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae.
            </Desctiption>
            <StyledButton colorYellow>Explore</StyledButton>
        </StyledExploreContent>
    )
}

export default ExploreContent