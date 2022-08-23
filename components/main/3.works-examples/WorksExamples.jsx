import React, {useState} from 'react'
import styled from 'styled-components'
import containerStyles from '../../Container'
import WEBar from './WEBar'
import WETopBlock from './WETopBlock'

const StyledWorksExamples = styled.section`
background: #FDF2FF;
`

const StyledNotesContainer = styled.div`
${containerStyles}
`


const WorksExamples = () => {
    const items = ['Quis Autem', 'Reprehenderit', 'Voluptate', 'Molestiae', 'Consequatur']
    const [active, setActive] = useState('Quis Autem');

    return (
        <StyledWorksExamples>
            <StyledNotesContainer>
                <WETopBlock/>
                <WEBar items={items} active={active} setActive={setActive}/>
            </StyledNotesContainer>
        </StyledWorksExamples>
    )
}

export default WorksExamples