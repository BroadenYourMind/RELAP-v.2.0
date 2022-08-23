import {css} from 'styled-components';
import { device } from "@/common/constants/device";

const baseStyles = css`
body, html {
    font-family: 'Source Sans Pro';
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    color: #333333;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    font-family: Poppins;
}

h1 {
    font-size: 72px;
    line-height: 1;
}

h2 {
    font-size: 56px;
    line-height: 64px;

    @media ${device.laptop} {
        font-size: 40px;
        line-height: 48px;
    }
}

h3 {
    font-size: 40px;
    line-height: 48px;
}

h4 {
    font-size: 24px;
    line-height: 32px;
}

h5 {
    font-size: 16px;
    line-height: 1.5;
    text-transform: uppercase;
}
`

export default baseStyles;