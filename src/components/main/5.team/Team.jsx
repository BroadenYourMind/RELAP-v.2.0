import React from "react";
import { device } from "src/common/constants/device";
import Container from "src/components/reusable/Container";
import MainBlock from "src/components/reusable/MainBlock";
import styled from "styled-components";
import TeamImage from "./TeamImage";

const Section = styled.section`
  background: #3023ae;
`;

const TeamContainer = styled(Container)`
  position: relative;
`;

const DecorItem = styled.div`
  &:nth-child(1) {
    position: absolute;
    width: 100px;
    height: 100px;
    left: 374px;
    top: -29px;
    background: linear-gradient(224.72deg, #3023ae -1%, #c86dd7 100.5%);
    border-radius: 50%;

    @media ${device.laptop} {
      left: 409px;
      top: -58px;
    }

    @media ${device.mobile} {
      left: 271px;
      top: -30px;
    }
  }

  &:nth-child(2) {
    position: absolute;
    width: 323px;
    height: 323px;
    left: -239px;
    bottom: -122px;
    background: linear-gradient(224.72deg, #3023ae -1%, #c86dd7 100.5%);
    border-radius: 50%;

    @media ${device.mobile} {
      bottom: -199px;
    }
  }

  &:nth-child(3) {
    position: absolute;
    width: 140px;
    height: 140px;
    left: 44.1%;
    bottom: -90px;
    background: linear-gradient(224.72deg, #3023ae -1%, #c86dd7 100.5%);
    border-radius: 50%;
  }
`;

const Content = styled.div`
  padding-top: 160px;
  display: flex;
  justify-content: space-between;

  @media ${device.tablet} {
    padding: 80px 0;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const TeamMainBlock = styled(MainBlock)`
  padding-top: 14px;
`

const Team = () => {
  const title = "Temporibus quibusdam";
  const subtitle = "Repellendus";
  const text = "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.";
  const buttonText = "Our team";

  return (
    <Section>
      <TeamContainer>
        <DecorItem />
        <DecorItem />
        <DecorItem />
        <Content>
          <TeamImage />
          <TeamMainBlock bg={"var(--yellowBtn)"} title={title} subtitle={subtitle} text={text} buttonText={buttonText}/>
        </Content>
      </TeamContainer>
    </Section>
  );
};

export default Team;
