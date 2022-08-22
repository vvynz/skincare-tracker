import React from "react";
import {Tr, Th, Button, Input} from "@chakra-ui/react"

export default function Wishlist({cancel}) {
  return(<Tr>
    <Th><Input name="brand" /></Th>
    <Th><Input name="itemName" /></Th>
    <Th>
      <Button size="xs" colorScheme="purple" variant="outline">Save</Button>
      <Button size="xs" colorScheme="purple" variant="outline" onClick={cancel}>Cancel</Button>
    </Th>
  </Tr>);
}