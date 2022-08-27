import React, { useState } from "react";
import styled from "styled-components";

import { device } from "../../../common/constants/device";

import MenuBody from "./MenuBody";

const Burger = styled.div`
  display: none;

  @media ${device.tablet} {
    justify-content: end;

    z-index: 5;
    display: block;
    position: relative;
    width: 30px;
    height: 20px;
    cursor: pointer;

    & span,
    &::before,
    &::after {
      top: 50%;
      left: 0;
      position: absolute;
      height: 10%;
      width: 100%;
      transition: all 0.3s ease 0s;
      background: var(--purple);
    }

    span:nth-of-type(2) {
      top: calc(50% - 6px);
    }

    span:nth-of-type(3) {
      top: calc(50% + 6px);
    }
  }
`;

function MenuIcon() {
  const items = [
    { id: 1, value: "Home", href: "" },
    { id: 2, value: "Features", href: "" },
    { id: 3, value: "Works", href: "" },
    { id: 4, value: "About", href: "" },
    { id: 5, value: "People", href: "" },
    { id: 6, value: "News", href: "" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Burger
        isOpen={isOpen}
        onClick={() => [
          setIsOpen(!isOpen),
          document.body.classList.toggle("_lock"),
        ]}
      >
        <span></span>
        <span></span>
        <span></span>
      </Burger>
      <MenuBody isOpen={isOpen} items={items}/>
    </>
  );
}

export default MenuIcon;
