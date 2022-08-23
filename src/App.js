import React from "react";
import styled from 'styled-components';

import HeaderMain from "./components/header/HeaderMain";
import Explorer from "./components/main/1.explorer/Explorer";
import Notes from "./components/main/2.notes/Notes";
import WorksExamples from "./components/main/3.works-examples/WorksExamples";


const AppWrapper = styled.div `
overflow: hidden;
display: flex;
flex-direction: column;
min-height: 100%;
`

function App() {
  return (
    <AppWrapper>
      <HeaderMain></HeaderMain>
      <Explorer></Explorer>
      <Notes></Notes>
      <WorksExamples></WorksExamples>
    </AppWrapper>
  );
}

export default App;
