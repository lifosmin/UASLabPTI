import React from "react";
import AppRouter from "./AppRouter";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme} resetCSS={false}>
        <AppRouter />
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
