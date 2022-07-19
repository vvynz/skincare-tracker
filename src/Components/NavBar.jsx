import React, { useState } from "react";
import { useColorMode } from "@chakra-ui/react";
import { Button, Heading } from "@chakra-ui/react";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Heading>🌼 skincare tracker.</Heading>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "dark" : "light"}
      </Button>
    </header>
  )
}