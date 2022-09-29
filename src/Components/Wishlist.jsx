import React from "react";

import { Tr, Td, Button } from "@chakra-ui/react";

export default function Wishlist({ items, editWishlistItem, deleteItem }) {
  return (
    <Tr>
      <Td>{items.brand}</Td>
      <Td>{items.itemName}</Td>
      <Td>
        <Button
          size="xs"
          colorScheme="purple"
          variant="outline"
          onClick={(e) => editWishlistItem(e, items)}
        >
          Edit
        </Button>
        <Button
          size="xs"
          colorScheme="purple"
          variant="outline"
          onClick={() => deleteItem(items.id)}
        >
          Delete
        </Button>
      </Td>
    </Tr>
  );
}
