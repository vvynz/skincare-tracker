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

export default function SearchResults({ results, searchResults }) {
  console.log(results);
  // the search results keeps the prev search items even with a new search. Need to refactor the search function
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
            {searchResults.map((item) => {
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
