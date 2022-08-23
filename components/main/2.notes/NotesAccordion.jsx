import React from 'react'
import styled from 'styled-components'

const StyledNotesAccordion = styled.div`
&:not(:last-child) {
    margin-bottom: ${({open}) => open ? '40px' : '0'};
    }

button {
    padding-bottom: ${({open}) => open ? '10px' : '26px'};
    text-decoration: ${({open}) => open ? 'underline' : 'none'};

    &:after {
    content: ${({open}) => open ? 'url(../img/notes/arr-up.svg)' : 'url(../img/notes/arr-down.svg)'};
    padding-left: 8px;
    }

    &:hover {
        text-decoration: underline;
    }
}

p {
    display: ${({open}) => open ? 'block' : 'none'};
    font-weight: 400;
    mix-blend-mode: normal;
    opacity: 0.5;
    overflow: auto;

    @media ${props => props.theme.media.tablet} {
        max-width: 100%;
    }
}
`


const NotesAccordion = ({items, active, setActive}) => {
    return (
        <>{items.map(item => 
            <StyledNotesAccordion open={active === item.value ? true : false}><button onClick={() => active ===  item.value ? setActive("") : setActive(item.value)}>{item.value}</button><div>
                <p>{item.text}</p>
            </div></StyledNotesAccordion>)}</>
    )
}

export default NotesAccordion