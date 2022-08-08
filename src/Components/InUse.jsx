import React from "react";
import {
  Tr,
  Th,
} from "@chakra-ui/react";

export default function InUse({ items }) {
  return (
    <Tr>
      <Th>{items.itemName}</Th>
      <Th>{items.dateOpened}</Th>
      <Th>{items.expiryDate}</Th>
    </Tr>
  );
}
