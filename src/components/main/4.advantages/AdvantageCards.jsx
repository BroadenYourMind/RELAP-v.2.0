import React from "react";
import { device } from "src/common/constants/device";
import styled from "styled-components";

const CardsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 82px;

  @media ${device.laptop} {
    justify-content: space-around;
  }

  @media ${device.mobile} {
    margin-bottom: 12px;
    position: relative;
    z-index: 10;
  }
`;

const Card = styled.div`
  padding: 0 24px 32px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: end;
  width: 370px;
  height: 224px;

  &:hover {
    background: #ffffff;
    box-shadow: 16px 16px 48px rgba(0, 0, 0, 0.0994678);
    border-radius: 3px;
  }
`;

const ImageBlock = styled.div`
  padding-top: 10px;
  margin-bottom: 13px;
  min-width: 48px;
  position: relative;

  &.card_1,
  &.card_2,
  &.card_5 {
    display: flex;
    justify-content: right;
  }

  &.card_3 {
    padding-right: 3px;
  }

  &.card_1::after {
    content: url(img/advantages/12.svg);
    position: absolute;
    left: 0;
    right: 6px;
    top: 12px;
    bottom: 0;
  }

  &.card_2::after {
    content: url(img/advantages/21.svg);
    position: absolute;
    left: 0px;
    right: 6px;
    top: 2px;
    bottom: 0px;
  }

  &.card_3::after {
    content: url(img/advantages/31.svg);
    position: absolute;
    left: 0px;
    right: 3px;
    top: -12px;
    bottom: 0px;
  }

  &.card_4 {
    padding-right: 1px;
  }

  &.card_4::after {
    content: url(img/advantages/41.svg);
    position: absolute;
    left: 22px;
    right: 0px;
    top: 22px;
    bottom: 0px;
  }

  &.card_5 {
    padding-right: 4px;
  }

  &.card_5::after {
    content: url(img/advantages/51.svg);
    position: absolute;
    left: 0px;
    right: 4px;
    top: 16px;
    bottom: 0px;
  }

  &.card_6 {
    padding-right: 6px;
    padding-bottom: 2px;
  }

  &.card_6::after {
    content: url(img/advantages/61.svg);
    position: absolute;
    left: 14px;
    right: 0px;
    top: -2px;
    bottom: 0px;
  }
`;

const Title = styled.p`
  margin-bottom: 9px;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 24px;
  line-height: 1.333;
`;

const Text = styled.p`
  font-weight: 400;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const AdvantageCards = ({ cards }) => {
  return (
    <CardsBlock>
      {cards.map((card) => (
        <Card key={card.id}>
          <ImageBlock className={card.className}>
            <img src={card.src} alt="PictureDetails" />
          </ImageBlock>
          <Title>{card.title}</Title>
          <Text>{card.text}</Text>
        </Card>
      ))}
    </CardsBlock>
  );
};

export default AdvantageCards;
