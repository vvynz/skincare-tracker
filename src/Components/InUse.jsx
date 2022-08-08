import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function InUse({ items }) {
 
  return (
      <TableContainer>
        <Table>
          <TableCaption>Current Products In Use:</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Date Opened:</Th>
              <Th>Expiry Date:</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Th>{items.itemName}</Th>
              <Th>{items.dateOpened}</Th>
              <Th>{items.expiryDate}</Th>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
  );
}
