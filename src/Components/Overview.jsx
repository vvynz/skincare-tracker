import React from "react";

import { Box, Heading, Image, Text } from "@chakra-ui/react";

import "../Styles/Overview.scss";

import inUse from "../Assets/inuse.png";
import wishlist from "../Assets/wishlist.png";

export default function Overview() {
  return (
    <main className="stats_container">
      <Box w="15rem" h="10rem" className="stats_box">
        <Image boxSize="3rem" mb="1rem" src={inUse} alt="opened item icon" />
        <Text fontSize="xs" color="black">In Use:</Text>
        <Text fontSize="2xl" as="b" color="black">5</Text>
        {/* hardcoded stats, UPDATE LATER */}
      </Box>
      <Box w="15rem" h="10rem" className="stats_box">
        <Image boxSize="2rem" mb="1rem" src={wishlist} alt="wishlist item icon" />
        <Text fontSize="xs" color="black">Wishlist:</Text>
        <Text fontSize="2xl" as="b" color="black">2</Text>
        {/* ^^ hardcoded data, UPDATE LATER */}
      </Box>
    </main>
  );
}
