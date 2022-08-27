import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../reusable/Button";
import Container from "../../reusable/Container";
import WEBar from "./WEBar";
import WEImages from "./WEImages";
import WETopContent from "./WETopContent";

const Section = styled.section`
  background: #fdf2ff;
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

const WorksExamples = () => {
  const items = [
    "Quis Autem",
    "Reprehenderit",
    "Voluptate",
    "Molestiae",
    "Consequatur",
  ];
  const [isActive, setIsActive] = useState("Quis Autem");

  const images = [
    {
      id: 1,
      src: "img/works-examples/31.png",
      title: "Exercitation",
      text: "Ullamco laboris",
    },
    {
      id: 2,
      src: "img/works-examples/32.png",
      title: "Exercitation",
      text: "Ullamco laboris",
    },
    {
      id: 3,
      src: "img/works-examples/33.png",
      title: "Exercitation",
      text: "Ullamco laboris",
    },
  ];

  return (
    <Section>
      <Container>
        <WETopContent />
        <WEBar items={items} isActive={isActive} setIsActive={setIsActive} />
        <WEImages images={images} />
        <ButtonBlock>
          <Button btn="true" bg={"var(--purpleBtn)"}>All works</Button>
        </ButtonBlock>
      </Container>
    </Section>
  );
};

export default WorksExamples;
