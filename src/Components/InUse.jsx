import React from "react";
import {
  Tr,
  Th,
  Button
} from "@chakra-ui/react";

export default function InUse({ item, editItem, deleteItem }) {
  return (
    <Tr>
      <Th>{item.itemName}</Th>
      <Th>{item.dateOpened}</Th>
      <Th>{item.expiryDate}</Th>
      <Th>
        <Button size="xs" colorScheme="purple" variant="outline" onClick={(e) => editItem(e, item)}>Edit</Button>
      </Th>
      <Th>
        <Button size="xs" colorScheme="purple" variant="outline" onClick={() => deleteItem(item.id)}>Delete</Button>
      </Th>
    </Tr>
  );
}
