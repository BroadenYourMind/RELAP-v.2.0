import React from "react";
import styled from 'styled-components';

const StyledMenuBody = styled.ul`
display: flex;
flex: 0 0 414px;
margin: 0 0 7px 50px;
justify-content: space-between;
line-height: 1;

a {
    font-weight: 600;

    &:hover {
        text-decoration: underline;
    }
}

@media ${props => props.theme.media.tablet} {
    position: fixed;
    display: flex;
    flex-direction: column;
    text-align: center;
    min-width:auto;
    margin: 0 auto;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(224.72deg, #3023AE -1%, #C86DD7 100.5%);
    padding: 100px 30px 30px 30px;
    transition: right 0.3s ease 0s;
    overflow: auto;

    right: ${({open}) => open ? '0' : '-100%'};
    

    &::before {
        content: "";
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        height: 64px;
        background: #FFFFFF;
        z-index: 2;
    }

    li {
        margin-bottom: 30px;
    }
}
`


function MenuBody(props) {


    return (
        <StyledMenuBody {...props}>
            {props.items.map(item => 
                <li>
                    <a href={item.href}>{item.value}</a>
                </li>)}
        </StyledMenuBody>
    );
}

export default MenuBody;