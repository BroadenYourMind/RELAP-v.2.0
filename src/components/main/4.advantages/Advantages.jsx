import React from "react";
import { device } from "src/common/constants/device";
import Container from "src/components/reusable/Container";
import SectionHeader from "src/components/reusable/SectionHeader";
import styled from "styled-components";
import AdvantageCards from "./AdvantageCards";

const Section = styled.section`
  background: #f2f2f2;
`;

const Header = styled(SectionHeader)`
  margin: 0 auto 32px;
  padding-top: 71px;

  @media ${device.mobile} {
    padding-top: 32px;
  }
`;

const Advantages = () => {
  const text =
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.";
  const title = "Fugiat quo";

  const cards = [
    {
      id: 1,
      src: "img/advantages/1.svg",
      title: "Consequuntur",
      text: "Enim ipsam voluptatem quia voluptas sit aspernatur aut oditaut fugit",
      className: "card_1"
    },
    {
      id: 2,
      src: "img/advantages/2.svg",
      title: "Voluptatem",
      text: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam",
      className: "card_2"
    },
    {
      id: 3,
      src: "img/advantages/3.svg",
      title: "Quisquam",
      text: "Quis nostrum exercitationem ullam corporis suscipit laboriosam",
      className: "card_3"
    },
    {
      id: 4,
      src: "img/advantages/4.svg",
      title: "Aliquid",
      text: "Quis autem vel eum iure reprehenderit voluptate velit esse quam nihil",
      className: "card_4"
    },
    {
      id: 5,
      src: "img/advantages/5.svg",
      title: "Excepteur",
      text: "Sint occaecat cupidatat non proident culpa qui officia deserunt mollit anim",
      className: "card_5"
    },
    {
      id: 6,
      src: "img/advantages/6.svg",
      title: "Accusamus",
      text: "Odio dignissimos ducimus qui blanditiis praesentium voluptatum",
      className: "card_6"
    },
  ];

  return (
    <Section>
      <Container>
        <Header text={text} title={title} />
        <AdvantageCards cards={cards} />
      </Container>
    </Section>
  );
};

export default Advantages;
