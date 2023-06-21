import React from "react";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import Page from "./components/Page/Page";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Page />
    </>
  );
};

export default App;
