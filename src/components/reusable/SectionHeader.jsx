import React from "react";
import styled from "styled-components";

const StyledSectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  max-width: 570px;
`;

const Title = styled.h2`
  margin-bottom: 23px;
`;

const SectionHeader = (props) => {
  return (
    <StyledSectionHeader {...props}>
      <Title>{props.title}</Title>
      <p>{props.text}</p>
    </StyledSectionHeader>
  );
};

export default SectionHeader;
