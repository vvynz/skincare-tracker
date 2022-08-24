import React, { useState } from "react";
import { useColorMode } from "@chakra-ui/react";
import { Button, Heading } from "@chakra-ui/react";

import logo from "../Assets/logo.png";

import "../Styles/NavBar.scss";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <nav className="navbar">
        <img className="logo" src={logo} alt="Logo icon" />
        <Heading>skincare tracker.</Heading>
      </nav>
      <Button size="xs" onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "dark" : "light"}
      </Button>
    </header>
  );
}
