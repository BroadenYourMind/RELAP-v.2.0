import React from "react";
import styled from "styled-components";

import Container from "../../reusable/Container";
import ExploreContent from "./ExploreContent.jsx";
import ExploreImage from "./ExploreImage.jsx";
import ExploreSocial from "./ExploreSocial.jsx";

import { device } from "../../../common/constants/device";

const StyledExplorer = styled.section`
  background: var(--purple);
  overflow: hidden;
`;

const StyledExplorerContainer = styled(Container)`
  padding-top: 143px;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
  max-height: 768px;

  @media ${device.tablet} {
    padding-top: 64px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-height: 820px;
  }
`;

const Explorer = () => {
  return (
    <StyledExplorer>
      <StyledExplorerContainer>
        <ExploreContent />
        <ExploreImage />
        <ExploreSocial />
      </StyledExplorerContainer>
    </StyledExplorer>
  );
};

export default Explorer;
