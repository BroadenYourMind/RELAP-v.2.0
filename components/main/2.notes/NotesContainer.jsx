import React from 'react'
import styled from 'styled-components'
import containerStyles from "../../Container.jsx";
import NotesContent from './NotesContent.jsx';

const StyledNotesContainer = styled.div`
${containerStyles}
min-height: 768px;
position: relative;

@media ${props => props.theme.media.laptop} {
    display: flex;
    justify-content: space-between;
    flex: 0 1 50%;
}

@media ${props => props.theme.media.tablet} {
    max-height: none;
    flex-wrap: wrap;
}
`
const NotesContainer = (props) => {
    return (
        <StyledNotesContainer {...props}>
            <NotesContent/>
        </StyledNotesContainer>
    )
}

export default NotesContainer