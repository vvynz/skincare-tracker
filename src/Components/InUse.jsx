import React from "react";
import { Button, Checkbox, Tr, Td } from "@chakra-ui/react";

export default function InUse({ item, editItem, deleteItem, toggleRepurchase }) {

  return (
    <Tr>
      <Td>{item.brand}</Td>
      <Td>{item.itemName}</Td>
      <Td>{item.dateOpened}</Td>
      <Td>{item.expiryDate}</Td>
      <Td>
        <Checkbox 
        className="repurchase" 
        colorScheme="purple" 
        spacing="1rem" 
        isChecked={item.repurchase}
        onChange={toggleRepurchase}
        >Yes</Checkbox>
      </Td>
      <Td>
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
      </Td>
    </Tr>
  );
}
