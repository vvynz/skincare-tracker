import React from "react";
import {Tr, Th, Button, Input} from "@chakra-ui/react"

export default function Wishlist({cancel, editFormData, handleWishlistEditFormChange}) {
  return(<Tr>
    <Th><Input name="brand" value={editFormData.brand}  onChange={handleWishlistEditFormChange} /></Th>
    <Th><Input name="itemName" value={editFormData.itemName} onChange={handleWishlistEditFormChange} /></Th>
    <Th>
      <Button type="submit" size="xs" colorScheme="purple" variant="outline" >Save</Button>
      <Button size="xs" colorScheme="purple" variant="outline" onClick={cancel}>Cancel</Button>
    </Th>
  </Tr>);
}