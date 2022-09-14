import React, { useState } from "react";
import { useColorMode } from "@chakra-ui/react";
import { Button, Heading, Input } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import logo from "../Assets/logo.png";
import logo_col from "../Assets/skincare.png";

import "../Styles/NavBar.scss";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <nav className="navbar">
        <img className="logo" src={logo_col} alt="Logo icon" />
        <Heading>skincare tracker.</Heading>
      </nav>
      <div>
        <Input className="search_bar" width="auto" placeholder="Search..." />
        <button className="toggle--colorMode" onClick={toggleColorMode}>
          {colorMode === "light" ? (
            <MoonIcon boxSize="1.5em" color="purple.700" />
          ) : (
            <SunIcon boxSize="1.5em" />
          )}
        </button>
      </div>
    </header>
  );
}
