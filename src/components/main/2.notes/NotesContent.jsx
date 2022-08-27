import React, { useState } from "react";
import styled from "styled-components";

import BlockHeader from "../../reusable/BlockHeader";
import NotesAccordion from "./NotesAccordion";
import NotesImage from "./NotesImage";

import { device } from "../../../common/constants/device";

const Content = styled.div`
  padding-top: 142px;
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
    margin-bottom: 36px;
    max-height: 1200px;
    max-width: 100%;
  }

  @media ${device.mobile} {
    max-width: 356px;
  }
`;

const Header = styled(BlockHeader)`
  margin-bottom: 54px;

  @media ${device.tablet} {
    margin-bottom: 40px;
  }
`;

const NotesContent = () => {
  const title = "Corporis suscipit laboriosam";
  const subtitle = "Quis autem";

  const [isActive, setIsActive] = useState("");

  const items = [
    { 
      id: 1,
      value: "Totam rem aperiam",
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    },
    {
      id: 2,
      value: "Eaque ipsa quae",
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    },
    {
      id: 3,
      value: "Inventore veritatis",
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    },
  ];

  return (
    <>
    <Content>
      <Header subtitle={subtitle} title={title} />
      <NotesAccordion items={items} isActive={isActive} setIsActive={setIsActive} />
    </Content>
    <NotesImage />
    </>
  );
};

export default NotesContent;
