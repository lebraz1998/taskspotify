import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { FirstRoute } from "./core/router/router";

function App() {
  return (
    <ChakraProvider>
      <FirstRoute />
    </ChakraProvider>
  );
}

export default App;
