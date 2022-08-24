import React from 'react'
import styled from 'styled-components'

import { device } from "../../../common/constants/device";

const StyledNotesAccordion = styled.div`
    &:not(:last-child) {
        margin-bottom: ${({ isActive }) => isActive ? '40px' : '0'};
    }
`

const Button = styled.button`
    padding-bottom: ${({ isActive }) => isActive ? '10px' : '26px'};
    text-decoration: ${({ isActive }) => isActive ? 'underline' : 'none'};

    &:after {
        content: ${({ isActive }) => isActive ? 'url(../img/notes/arr-up.svg)' : 'url(../img/notes/arr-down.svg)'};
        padding-left: 8px;
    }

    &:hover {
        text-decoration: underline;
    }
`

const Discription = styled.p`
    display: ${({ isActive }) => isActive ? 'block' : 'none'};
    font-weight: 400;
    mix-blend-mode: normal;
    opacity: 0.5;
    overflow: auto;

    @media ${device.tablet} {
        max-width: 100%;
    }
`

const NotesAccordion = ({ items, isActive, setIsActive }) => {
    return (
        <>{items.map(item =>
            <StyledNotesAccordion isActive={isActive === item.value}>
                <Button isActive={isActive === item.value} onClick={() => [isActive === item.value ? setIsActive("") : setIsActive(item.value), console.log("Вперёд!")]}>{item.value}</Button>
                <Discription isActive={isActive === item.value}>{item.text}</Discription>
            </StyledNotesAccordion>)}</>
    )
}

export default NotesAccordion