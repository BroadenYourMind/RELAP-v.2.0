import React from "react";
import styled from "styled-components";

import Header from "./components/header/HeaderMain";
import Explorer from "./components/main/1.explorer/Explorer";
import Notes from "./components/main/2.notes/Notes";
import WorksExamples from "./components/main/3.works-examples/WorksExamples";
import Advantages from "./components/main/4.advantages/Advantages";
import Team from "./components/main/5.team/Team";
import Partners from "./components/main/6.partners/Partners";
import Blog from "./components/main/7.blog/Blog";
import ContactUs from "./components/main/8.contact-us/ContactUs";

import "./styles/global.css";

const AppWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <Explorer />
      <Notes />
      <WorksExamples />
      <Advantages />
      <Team />
      <Partners />
      <Blog />
      <ContactUs />
    </AppWrapper>
  );
}

export default App;
