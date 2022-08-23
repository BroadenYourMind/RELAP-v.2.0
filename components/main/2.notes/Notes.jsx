import React from 'react'
import styled from 'styled-components';
import NotesContainer from './NotesContainer';

const StyledNotes = styled.section`
background: #F2F2F2; 
`

const Notes = () => {
    return (
        <StyledNotes>
            <NotesContainer/>
        </StyledNotes>
    )
}

export default Notes