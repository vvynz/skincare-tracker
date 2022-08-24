import React from "react";

import { Tr, Th, Button } from "@chakra-ui/react";

export default function Wishlist({ items, editWishlistItem, deleteItem }) {
  return (
    <Tr>
      <Th>{items.brand}</Th>
      <Th>{items.itemName}</Th>
      <Th>
        <Button size="xs" colorScheme="purple" variant="outline" onClick={(e)=>editWishlistItem(e, items)}>Edit</Button>
        <Button size="xs" colorScheme="purple" variant="outline" onClick={()=> deleteItem(items.id)}>Delete</Button>
      </Th>
    </Tr>
  );
}
