import React from "react";
import { useColorMode } from "@chakra-ui/react";
import { Button, Heading, Input } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import logo_col from "../Assets/skincare.png";

import "../Styles/NavBar.scss";

export default function NavBar({
  query,
  setQuery,
}) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      <nav className="navbar">
        <img className="logo" src={logo_col} alt="Logo icon" />
        <Heading className="heading-name">skincare tracker.</Heading>
      </nav>
      <div className="search-container">
        <Input
          value={query}
          className="search-bar"
          // width="auto"
          placeholder="Search..."
          onChange={e => setQuery(e.target.value)}
        />
        <Button>Search</Button>
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
