import React from "react";
import {
  Tr,
  Th,
  Button
} from "@chakra-ui/react";

export default function InUse({ items, deleteItem }) {
  return (
    <Tr>
      <Th>{items.itemName}</Th>
      <Th>{items.dateOpened}</Th>
      <Th>{items.expiryDate}</Th>
      <Th>
        <Button size="xs" colorScheme="purple" variant="outline" onClick={() => deleteItem(items.id)}>Delete</Button>
      </Th>
    </Tr>
  );
}
