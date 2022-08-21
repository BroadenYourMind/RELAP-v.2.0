import React from "react";
import styled from 'styled-components';
import Header from "./components/header/Header";
import Explorer from "./components/main/1.explorer/Explorer";

const AppWrapper = styled.div `
overflow: hidden;
display: flex;
flex-direction: column;
min-height: 100%;
`




function App() {
  return (
    <AppWrapper>
      <Header></Header>
      <Explorer></Explorer>
    </AppWrapper>
  );
}

export default App;
