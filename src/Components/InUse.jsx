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
  TableContainer
} from "@chakra-ui/react";

export default function InUse(props) {
  const data = props.items;
  // console.log(props)
  return (
    <div>
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
              <Th>{data.itemName}</Th>
              <Th>{data.dateOpened}</Th>
              <Th>{data.expiryDate}</Th>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}