import React from "react";
import { Tr, Td, Button, Input } from "@chakra-ui/react";

export default function Wishlist({
  cancel,
  editWishlistFormData,
  handleWishlistEditFormChange,
}) {
  return (
    <Tr>
      <Td>
        <Input
          name="brand"
          value={editWishlistFormData.brand}
          required="required"
          onChange={handleWishlistEditFormChange}
        />
      </Td>
      <Td>
        <Input
          name="itemName"
          value={editWishlistFormData.itemName}
          required="required"
          onChange={handleWishlistEditFormChange}
        />
      </Td>
      <Td>
        <Button type="submit" size="xs" colorScheme="purple" variant="outline">
          Save
        </Button>
        <Button
          size="xs"
          colorScheme="purple"
          variant="outline"
          onClick={cancel}
        >
          Cancel
        </Button>
      </Td>
    </Tr>
  );
}
