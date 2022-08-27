import React from "react";
import styled from "styled-components";

import Container from "../../reusable/Container";
import NotesContent from "./NotesContent.jsx";

import { device } from "../../../common/constants/device";

const StyledNotes = styled.section`
  background: #f2f2f2;
`;

const NotesContainer = styled(Container)`
  min-height: 768px;
  position: relative;

  @media ${device.laptop} {
    display: flex;
    justify-content: space-between;
    flex: 0 1 50%;
  }

  @media ${device.tablet} {
    max-height: none;
    flex-wrap: wrap;
  }
`;

const Notes = () => {
  return (
    <StyledNotes>
      <NotesContainer>
        <NotesContent />
      </NotesContainer>
    </StyledNotes>
  );
};

export default Notes;
