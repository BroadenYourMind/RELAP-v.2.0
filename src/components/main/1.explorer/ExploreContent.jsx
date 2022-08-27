import React from "react";
import styled from "styled-components";

import { device } from "../../../common/constants/device";
import Button from "../../reusable/Button";

const Content = styled.div`
  padding-top: 85px;
  max-width: 360px;
  color: var(--white);

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-width: 100%;
    padding-top: 0;
    margin-bottom: 19px;
  }

  @media ${device.mobile} {
    align-items: flex-start;
    text-align: start;
  }
`;

const Title = styled.h1`
  margin-bottom: 26px;
`;

const Desctiption = styled.p`
  margin-bottom: 34px;
`;

const ExploreContent = (props) => {
  return (
    <Content {...props}>
      <Title>Omnis Voluptas</Title>
      <Desctiption>
        Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
        repudiandae sint et molestiae non recusandae.
      </Desctiption>
      <Button link="true" bg={"var(--yellowBtn)"}>
        Explore
      </Button>
    </Content>
  );
};

export default ExploreContent;
