import React from "react";
import {Tr, Th, Button, Input} from "@chakra-ui/react"

export default function Wishlist({cancel, handleWishlistEditFormChange}) {
  return(<Tr>
    <Th><Input name="brand" onChange={handleWishlistEditFormChange} /></Th>
    <Th><Input name="itemName" onChange={handleWishlistEditFormChange} /></Th>
    <Th>
      <Button size="xs" colorScheme="purple" variant="outline" >Save</Button>
      <Button size="xs" colorScheme="purple" variant="outline" onClick={cancel}>Cancel</Button>
    </Th>
  </Tr>);
}