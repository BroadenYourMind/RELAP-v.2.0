import React, { useState } from 'react'
import styled from 'styled-components'

import BlockHeader from '../../reusable/BlockHeader'
import NotesAccordion from './NotesAccordion'
import NotesImage from './NotesImage'

import { device } from "../../../common/constants/device";

const StyledNotesContent = styled.div`
    padding: 142px 0px 186px 0px;
    max-width: 498px;
    max-height: 700px;
    overflow: hidden;

    @media ${device.laptop} {
        padding-top: 100px;
        max-width: 356px;
        flex: 0 1 50%;
    }

    @media ${device.tablet} {
        flex: 1 1 100%;
        padding-top: 45px;
        padding-bottom: 36px;
        max-height: 1200px;
        max-width: 100%;
    }

    @media ${device.mobile} {
        max-width: 356px;
    }
`

const NotesContent = () => {
    const title = "Corporis suscipit laboriosam";
    const text = "Quis autem";

    const [isActive, setIsActive] = useState('');

    const items = [{ value: "Totam rem aperiam", text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus." },
        { value: "Eaque ipsa quae", text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus." },
        { value: "Inventore veritatis", text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus." }]

    return (
        <StyledNotesContent>
            <BlockHeader notesHeader text={text} title={title} />
            <NotesAccordion items={items} isActive={isActive} setIsActive={setIsActive} />
            <NotesImage />
        </StyledNotesContent>
    )
}

export default NotesContent