import React from "react";
import {Tr, Th, Button, Input} from "@chakra-ui/react"

export default function Wishlist({cancel, editWishlistFormData, handleWishlistEditFormChange}) {
  return(<Tr>
    <Th><Input name="brand" value={editWishlistFormData.brand} required="required" onChange={handleWishlistEditFormChange} /></Th>
    <Th><Input name="itemName" value={editWishlistFormData.itemName} required="required" onChange={handleWishlistEditFormChange} /></Th>
    <Th>
      <Button type="submit" size="xs" colorScheme="purple" variant="outline" >Save</Button>
      <Button size="xs" colorScheme="purple" variant="outline" onClick={cancel}>Cancel</Button>
    </Th>
  </Tr>);
}