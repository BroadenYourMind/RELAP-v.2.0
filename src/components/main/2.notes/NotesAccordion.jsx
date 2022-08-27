import React from "react";
import styled from "styled-components";

import { device } from "../../../common/constants/device";

const StyledNotesAccordion = styled.div`
  &:not(:last-child) {
    margin-bottom: ${({ isActive }) => (isActive ? "40px" : "24px")};
  }
`;

const Button = styled.button`
  margin-bottom: ${({ isActive }) => (isActive ? "10px" : "0px")};
  text-decoration: ${({ isActive }) => (isActive ? "underline" : "none")};

  &:after {
    content: ${({ isActive }) => `url(../img/notes/arr-${isActive ? "up" : "down"}.svg)`};
    margin-left: 8px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Discription = styled.p`
  display: ${({ isActive }) => (isActive ? "block" : "none")};
  font-weight: 400;
  mix-blend-mode: normal;
  opacity: 0.5;
  overflow: auto;

  @media ${device.tablet} {
    max-width: 100%;
  }
`;

const NotesAccordion = ({ items, isActive, setIsActive }) => {
  return (
    <div>
      {items.map((item) => (
        <StyledNotesAccordion key={item.id} isActive={isActive === item.value}>
          <Button
            isActive={isActive === item.value}
            onClick={() => [isActive === item.value ? setIsActive("") : setIsActive(item.value)]}
          >
            {item.value}
          </Button>
          <Discription isActive={isActive === item.value}>{item.text}</Discription>
        </StyledNotesAccordion>
      ))}
    </div>
  );
};

export default NotesAccordion;
