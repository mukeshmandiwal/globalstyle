import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
body {
@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,800);
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  height: 100vh;
  position: relative;
  background-color: gray;
  font-family: Roboto, sans-serif;
}
`;

export default GlobalStyles;
