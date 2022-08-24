import React from 'react'
import styled from 'styled-components'
import BlockHeader from '../../reusable/BlockHeader'

import { device } from "../../../common/constants/device";

const StyledTopBlock = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 55px;

    @media ${device.laptop} {
        margin-bottom: 0px;
        }

    @media ${device.tablet} {
        flex-wrap: wrap;
        text-align: center;
        justify-content: center;
        }

    @media ${device.mobile} {
        text-align: start;
        }
`

const Text = styled.div`
    flex: 0 1 570px;
    padding-top: 110px;
    max-width: 570px;
    font-weight: 400;
    mix-blend-mode: normal;
    opacity: 0.5;

    @media ${device.laptop} {
        max-width: 550px;
    }

    @media ${device.tablet} {
        padding-top: 24px;
    }
`

const WETopBlock = () => {
    const title = "Ullam corporis suscipit";
    const text = "Nisi ut aliquid";

    return (
        <StyledTopBlock>
            <BlockHeader worksExampleHeader text={text} title={title}></BlockHeader>
            <Text>Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                aliquam quaerat voluptatem.</Text>
        </StyledTopBlock>
    )
}

export default WETopBlock