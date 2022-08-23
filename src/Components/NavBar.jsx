import React, { useState } from "react";
import { useColorMode } from "@chakra-ui/react";
import { Button, Heading } from "@chakra-ui/react";

import logo1 from "../Assets/logo1.png";
import logo2 from "../Assets/logo2.png";

import "../Styles/NavBar.scss";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <nav className="navbar">
        <img className="logo" src={logo2} alt="logo" />
        <Heading>skincare tracker.</Heading>
      </nav>
      <Button size="xs" onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "dark" : "light"}
      </Button>
    </header>
  );
}
