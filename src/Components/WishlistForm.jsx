import React, { useState, useEffect } from "react";
import Wishlist from "./Wishlist";
import WishlistEditable from "./WishlistEditable";
import useAppData from "../Hooks/useAppData";
import { nanoid } from "nanoid";
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
  Select
} from "@chakra-ui/react";

import "../Styles/Wishlist.scss";

export default function WishlistForm() {
  const [wishlist, setWishlist] = useState(
    () => JSON.parse(localStorage.getItem("wishlist")) || []
  );
  const [formData, setFormData] = useState({
    brand: "",
    itemName: "",
  });
  const [editFormData, setEditFormData] = useState({
    brand: "",
    itemName: "",
  });
  const [editWishListItemID, setEditWishlistItemID] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { generateDate } = useAppData();

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const setWishlistFormChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    const newData = { ...formData };
    newData[name] = value;

    setFormData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWishlistItem = {
      id: nanoid(),
      brand: formData.brand,
      itemName: formData.itemName,
    };

    const newItems = [...wishlist, newWishlistItem];

    setWishlist(newItems);
    setFormData({
      brand: "",
      itemName: "",
    });
  };

  const editWishlistItem = (e, item) => {
    e.preventDefault();
    setEditWishlistItemID(item.id);

    const formData = {
      brand: item.brand,
      itemName: item.itemName,
    };

    setEditFormData(formData);
  };

  const handleWishlistEditFormChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    const updData = { ...editFormData };
    updData[name] = value;

    setEditFormData(updData);
  };

  const handleWishlistEditFormSubmit = (e) => {
    e.preventDefault();

    console.log(editWishListItemID);

    const updWishlistItem = {
      id: editWishListItemID,
      brand: editFormData.brand,
      itemName: editFormData.itemName,
    };

    const updItems = [...wishlist];
    const index = updItems.findIndex((item) => item.id === editWishListItemID);
    updItems[index] = updWishlistItem;

    setWishlist(updItems);
    setEditWishlistItemID(null);
  };

  const deleteItem = (id) => {
    const newData = [...wishlist];

    const index = newData.findIndex((item) => item.id === id);

    newData.splice(index, 1);

    setWishlist(newData);
  };

  const cancel = () => {
    setEditWishlistItemID(null);
  };

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
              <form onSubmit={handleSubmit}>
                <FormControl className="wishlist_form">
                  <FormLabel>Brand:</FormLabel>
                  <Input
                    className="input_field"
                    name="brand"
                    value={formData.brand}
                    type="text"
                    required="required"
                    placeholder="Enter a brand name..."
                    onChange={setWishlistFormChange}
                  />
                  <FormLabel>Item Name:</FormLabel>
                  <Input
                    className="input_field"
                    name="itemName"
                    value={formData.itemName}
                    type="text"
                    required="required"
                    placeholder="Enter item name..."
                    onChange={setWishlistFormChange}
                  />
                  <FormLabel>Category:</FormLabel>
                  <Select placeholder="select option">
                    <option value="option1">eye cream</option>
                    <option value="option2">serum</option>
                    <option value="option3">sunscreen</option>
                    <option value="option4">toner</option>
                    <option value="option5">moisturizer</option>
                    <option value="option6">essence</option>
                    <option value="option7">make-up remover</option>
                    <option value="option8">mask</option>
                    <option value="option9">lip balm</option>
                    <option value="option10">exfoliator</option>
                  </Select>
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
        <form onSubmit={handleWishlistEditFormSubmit}>
          <Table>
            <TableCaption>Wishlist</TableCaption>
            <Thead>
              <Tr>
                <Th>Brand:</Th>
                <Th>Item:</Th>
                <Th>Actions:</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* <WishlistEditable /> */}
              {wishlist.map((item) => (
                <>
                  {editWishListItemID === item.id ? (
                    <WishlistEditable
                      key={item.id}
                      editFormData={editFormData}
                      handleWishlistEditFormChange={
                        handleWishlistEditFormChange
                      }
                      cancel={cancel}
                    />
                  ) : (
                    <Wishlist
                      key={item.id}
                      items={item}
                      editWishlistItem={editWishlistItem}
                      deleteItem={deleteItem}
                    />
                  )}
                </>
              ))}
            </Tbody>
          </Table>
        </form>
      </TableContainer>
    </section>
  );
}
