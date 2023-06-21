import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --blue: #4f7df3;
    --pale-blue: #c2d3ff;
    --red: #ff5263;
    --gray: #969696;
    --dark-blue: #151f29;
    --white: #fff;
    --black:#000;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Libre Franklin', sans-serif;
}
body {
    font-size: 20px;
}
button, input {
    cursor: pointer;
    border: none;
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
}
label {
position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
`;
