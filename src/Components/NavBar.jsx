import React, { useState } from "react";
import { useColorMode } from "@chakra-ui/react";
import { Button, Heading, Input } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import logo from "../Assets/logo.png";
import logo_col from "../Assets/skincare.png";

import useAppData from "../Hooks/useAppData";
import "../Styles/NavBar.scss";

export default function NavBar({
  items,
  keyword,
  setKeyword,
  setResults,
  query,
  setQuery,
}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { search } = useAppData();

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResults(search(items, keyword));
    // setKeyword(""); // want to clear the search bar after...
  };
  // console.log(results);
  return (
    <header>
      <nav className="navbar">
        <img className="logo" src={logo_col} alt="Logo icon" />
        <Heading>skincare tracker.</Heading>
      </nav>
      <div>
        <Input
          value={query}
          className="search_bar"
          width="auto"
          placeholder="Search..."
          onChange={e => setQuery(e.target.value)}
        />
        <Button onClick={handleSubmit}>Search</Button>
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
