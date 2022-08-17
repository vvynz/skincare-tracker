import React from "react";

import { Tr, Th, Button } from "@chakra-ui/react";

export default function Wishlist({ items }) {
  return (
    <Tr>
      <Th>{items.brand}</Th>
      <Th>{items.itemName}</Th>
      <Th>
        <Button size="xs" colorScheme="purple" variant="outline">Edit</Button>
        <Button size="xs" colorScheme="purple" variant="outline">Delete</Button>
      </Th>
    </Tr>
  );
}
