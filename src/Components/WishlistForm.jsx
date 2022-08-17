import React from "react";
import Wishlist from "./Wishlist";
import WishlistEditable from "./WishlistEditable";

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
} from "@chakra-ui/react";

import "../Styles/Wishlist.scss";

export default function WishlistForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <section className="wishlist">
      <nav>
        <Button colorScheme="purple" onClick={onOpen}>
          Add Item
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add to Wishlist:</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form>
                <FormControl className="wishlist_form">
                  <FormLabel>Brand:</FormLabel>
                  <Input
                    className="input_field"
                    name="brand"
                    type="text"
                    required="required"
                    placeholder="Enter a brand name..."
                  />
                  <FormLabel>Item Name:</FormLabel>
                  <Input
                    className="input_field"
                    name="itemName"
                    type="text"
                    required="required"
                    placeholder="Enter item name..."
                  />
                  <Button
                    type="submit"
                    colorScheme="purple"
                    size="md"
                    marginTop="10px"
                    borderRadius="10px"
                    variant="outline"
                  >
                    Add
                  </Button>
                </FormControl>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </nav>

      <TableContainer className="table_container">
        <Table>
          <TableCaption>Wishlist</TableCaption>
          <Thead>
            <Tr>
              <Th>Brand:</Th>
              <Th>Item:</Th>
              <Th>Actions:</Th>
            </Tr>
            <Tbody>
              
            </Tbody>
          </Thead>
        </Table>
      </TableContainer>
    </section>
  );
}
