import React from "react";
import {
  Tr,
  Th,
} from "@chakra-ui/react";

export default function InUse({ items, deleteItem }) {
  return (
    <Tr>
      <Th>{items.itemName}</Th>
      <Th>{items.dateOpened}</Th>
      <Th>{items.expiryDate}</Th>
      <Th>
        <button type="button" onClick={() => deleteItem(items.id)}>Delete</button>
      </Th>
    </Tr>
  );
}
