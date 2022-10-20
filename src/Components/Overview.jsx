import React from "react";

import { Box, Heading, Text } from "@chakra-ui/react";

import "../Styles/Overview.scss";

export default function Overview() {
  return (
    <main className="stats_container">
      <Box w="15rem" h="10rem" className="stats_box">
        <Text fontSize="xs" color="black">In Use:</Text>
        <Text fontSize="2xl" as="b" color="black">5</Text>
        {/* hardcoded stats, UPDATE LATER */}
      </Box>
      <Box w="15rem" h="10rem" className="stats_box">
        <Text fontSize="xs" color="black">Wishlist:</Text>
        <Text fontSize="2xl" as="b" color="black">2</Text>
        {/* ^^ hardcoded data, UPDATE LATER */}
      </Box>
    </main>
  );
}
