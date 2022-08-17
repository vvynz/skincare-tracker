import React from "react";

import { Tr, Th, Button } from "@chakra-ui/react";

export default function Wishlist({ item }) {
  return (
    <Tr>
      <Th>{item.brand}</Th>
      <Th>{item.itemName}</Th>
    </Tr>
  );
}
