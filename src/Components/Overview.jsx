import React from "react";

import { Box, Image, Text } from "@chakra-ui/react";

import "../Styles/Overview.scss";

import inUse from "../Assets/inuse.png";
import wishlistIcon from "../Assets/wishlist.png";

export default function Overview({ items, wishlist }) {
  console.log(items)
  return (
    <main className="stats_container">
      <Box w="15rem" h="10rem" className="stats_box">
        <Image boxSize="3rem" mb="1rem" src={inUse} alt="opened item icon" />
        <Text fontSize="xs" color="black">
          In Use:
        </Text>
        <Text fontSize="2xl" as="b" color="black">
          {items.length}
        </Text>
      </Box>
      <Box w="15rem" h="10rem" className="stats_box">
        <Image
          boxSize="2rem"
          mb="1rem"
          src={wishlistIcon}
          alt="wishlist item icon"
        />
        <Text fontSize="xs" color="black">
          Wishlist:
        </Text>
        <Text fontSize="2xl" as="b" color="black">
          {wishlist.length}
        </Text>
      </Box>
    </main>
  );
}
