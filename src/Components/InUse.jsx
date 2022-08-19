import React from "react";
import { Button, Checkbox, Tr, Th } from "@chakra-ui/react";

export default function InUse({ item, editItem, deleteItem, toggleRepurchase }) {
  console.log(item);
  return (
    <Tr>
      <Th>{item.itemName}</Th>
      <Th>{item.dateOpened}</Th>
      <Th>{item.expiryDate}</Th>
      <Th>
        <Checkbox 
        className="repurchase" 
        colorScheme="purple" 
        spacing="1rem" 
        isChecked={item.repurchase}
        onChange={toggleRepurchase}
        >Yes</Checkbox>
      </Th>
      <Th>
        <Button
          size="xs"
          colorScheme="purple"
          variant="outline"
          onClick={(e) => editItem(e, item)}
        >
          Edit
        </Button>
        <Button
          size="xs"
          colorScheme="purple"
          variant="outline"
          onClick={() => deleteItem(item.id)}
        >
          Delete
        </Button>
      </Th>
    </Tr>
  );
}
