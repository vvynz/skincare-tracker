import React from "react";

import { Tr, Th, Button } from "@chakra-ui/react";

export default function Wishlist({ wishlist }) {
  return (
    <Tr>
      <Th>{wishlist.brand}</Th>
      <Th>{wishlist.itemName}</Th>
    </Tr>
  );
}
