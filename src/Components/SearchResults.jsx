import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
} from "@chakra-ui/react";

export default function SearchResults({ query, filteredResults }) {
  
  const load = () => {
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
          {filteredResults.map((item) => {
            return (
              <>
                <Tr id={item.id}>
                  <Td>{item.brand}</Td>
                  <Td>{item.itemName}</Td>
                  <Td>{item.dateOpened}</Td>
                  <Td>{item.expiryDate}</Td>
                </Tr>
              </>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>;
  };

  if (query) {
    return (
      <>
        <Spinner />
      </>
    );
  } else {
    return "HELLO";
  }
}
