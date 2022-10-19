import {TableContainer,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th, Td} from "@chakra-ui/react";

export default function SearchResults({ results }) {
  console.log(results);
  return (
    <div>
      {results.map((item) => {
        return (
          <section>
            <h2>{item.brand}:</h2>
            <h4>{item.itemName}</h4>
          </section>
        );
      })}
    </div>
  );
}
