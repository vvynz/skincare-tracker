import React from "react";

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
} from "@chakra-ui/react";

import "../Styles/Wishlist.scss";

export default function Wishlist() {
  return (
    <section className="wishlist">
      <nav>
        <Button colorScheme="purple">Add Item</Button>
        <form>
          <FormControl>
            <FormLabel>Brand:</FormLabel>
            <Input
              name="brand"
              type="text"
              required="required"
              placeholder="Enter a brand name..."
            />
            <FormLabel>Item Name:</FormLabel>
            <Input
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
      </nav>
    </section>
  );
}
