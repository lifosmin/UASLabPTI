import React from "react";
import AppRouter from "./AppRouter";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <AppRouter />
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
