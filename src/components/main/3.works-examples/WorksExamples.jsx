import React, {useState} from 'react'
import styled from 'styled-components'
import StyledButton from '../../reusable/Button'

import containerStyles from '../../reusable/Container'
import WEBar from './WEBar'
import WEImages from './WEImages'
import WETopBlock from './WETopBlock'

import { device } from "../../../common/constants/device";

const StyledWorksExamples = styled.section`
background: #FDF2FF;
`

const StyledNotesContainer = styled.div`
${containerStyles}
`

const ButtonBlock = styled.div`
display: flex;
justify-content: center;
padding: 48px 0;

@media ${device.laptop}{
    padding-top: 21px;
    padding-bottom: 60px;
}
`


const WorksExamples = () => {
    const items = ['Quis Autem', 'Reprehenderit', 'Voluptate', 'Molestiae', 'Consequatur']
    const [active, setActive] = useState('Quis Autem');

    const images = [{src: "img/works-examples/31.png", title: "Exercitation", text:"Ullamco laboris"},
    {src: "img/works-examples/32.png", title: "Exercitation", text:"Ullamco laboris"},
    {src: "img/works-examples/33.png", title: "Exercitation", text:"Ullamco laboris"}]

    return (
        <StyledWorksExamples>
            <StyledNotesContainer>
                <WETopBlock/>
                <WEBar items={items} active={active} setActive={setActive}/>
                <WEImages images={images} />
                <ButtonBlock>
                <StyledButton colorPurple>All works</StyledButton>
                </ButtonBlock>
            </StyledNotesContainer>
        </StyledWorksExamples>
    )
}

export default WorksExamples