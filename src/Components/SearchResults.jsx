import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

export default function SearchResults({ results }) {
  console.log(results);
  if (results.length > 0) {
    return (
      <TableContainer>
        <Table>
          <TableCaption>Results</TableCaption>
          <Thead>
            <Tr>
              <Th>Brand:</Th>
              <Th>Item Name:</Th>
              <Th>Date Opened:</Th>
              <Th>Expiry Date:</Th>
            </Tr>
          </Thead>
          <Tbody>
            {results.map((item) => {
              return (
                <Tr>
                  <Td>{item.brand}</Td>
                  <Td>{item.itemName}</Td>
                  <Td>{item.dateOpened}</Td>
                  <Td>{item.expiryDate}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    );
  } else {
    return("Loading...")
  }
}
