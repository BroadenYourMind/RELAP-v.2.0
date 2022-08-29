import styled from "styled-components";

import { device } from "../../common/constants/device";

const HeaderLogo = styled.a`
  font-family: "Poppins";
  z-index: 10;
  font-weight: 700;
  font-size: 40px;
  line-height: 1.2;
  margin-rigth: 50px;

  @media ${device.tablet} {
    font-size: 24px;
    line-height: 1.33;
    color: var(--grey);
    margin-rigth: 0;
  }
`;


export default HeaderLogo;
