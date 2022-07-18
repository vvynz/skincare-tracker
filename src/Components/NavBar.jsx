import React, { useState } from "react";
import { useColorMode } from "@chakra-ui/react";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "dark" : "light"}
      </button>
    </header>
  )
}