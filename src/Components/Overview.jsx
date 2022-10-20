import React from "react";

import { Box } from "@chakra-ui/react";

import "../Styles/Overview.scss";

export default function Overview() {
  return (
    <main className="stats_container">
      <Box w="10rem" h="10rem" className="stats_box">
        Total In Rotation:
      </Box>
      <Box w="10rem" h="10rem" className="stats_box">
        Wishlist:
      </Box>
    </main>
  );
}
