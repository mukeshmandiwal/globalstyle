import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "./logo.svg";

const AppSection = styled.div`
  text-align: center;
`;

export const appSpan = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppHeader = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const AppLogo = styled.img`
  animation: ${appSpan} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

const Text = styled.p``;

function App() {
  return (
    <AppSection>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <Text>
          Edit <code>src/App.js</code> and save to reload.
        </Text>
      </AppHeader>
    </AppSection>
  );
}

export default App;
