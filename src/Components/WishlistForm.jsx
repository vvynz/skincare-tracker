import React from "react";
import Wishlist from "./Wishlist";
import WishlistEditable from "./WishlistEditable";
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
  Select,
} from "@chakra-ui/react";

import "../Styles/Wishlist.scss";

export default function WishlistForm({
  wishlist,
  setWishlist,
  editItemID,
  setEditItemID,
  wishlistFormData,
  setWishlistFormData,
  editWishlistFormData,
  setEditWishlistFormData
}) {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const setWishlistFormChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    const newData = { ...wishlistFormData };
    newData[name] = value;

    setWishlistFormData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWishlistItem = {
      id: nanoid(),
      brand: wishlistFormData.brand,
      itemName: wishlistFormData.itemName,
    };

    const newItems = [...wishlist, newWishlistItem];

    setWishlist(newItems);
    setWishlistFormData({
      brand: "",
      itemName: "",
    });
  };

  const editWishlistItem = (e, item) => {
    e.preventDefault();
    setEditItemID(item.id);

    const formData = {
      brand: item.brand,
      itemName: item.itemName,
    };

    setEditWishlistFormData(formData);
  };

  const handleWishlistEditFormChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    const updData = { ...editWishlistFormData };
    updData[name] = value;

    setEditWishlistFormData(updData);
  };

  const handleWishlistEditFormSubmit = (e) => {
    e.preventDefault();

    const updWishlistItem = {
      id: editItemID,
      brand: editWishlistFormData.brand,
      itemName: editWishlistFormData.itemName,
    };

    const updItems = [...wishlist];
    const index = updItems.findIndex((item) => item.id === editItemID);
    updItems[index] = updWishlistItem;

    setWishlist(updItems);
    setEditItemID(null);
  };

  const deleteItem = (id) => {
    const newData = [...wishlist];

    const index = newData.findIndex((item) => item.id === id);

    newData.splice(index, 1);

    setWishlist(newData);
  };

  const cancel = () => {
    setEditItemID(null);
  };

  return (
    <section className="wishlist-container">
      <nav className="side-nav">
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
                    value={wishlistFormData.brand}
                    type="text"
                    required="required"
                    placeholder="Enter a brand name..."
                    onChange={setWishlistFormChange}
                  />
                  <FormLabel>Item Name:</FormLabel>
                  <Input
                    className="input_field"
                    name="itemName"
                    value={wishlistFormData.itemName}
                    type="text"
                    required="required"
                    placeholder="Enter item name..."
                    onChange={setWishlistFormChange}
                  />
                  <FormLabel>Category:</FormLabel>
                  <Select className="categories" placeholder="select option">
                    <option value="option1">essence</option>
                    <option value="option2">exfoliator</option>
                    <option value="option3">eye cream</option>
                    <option value="option4">lip balm</option>
                    <option value="option5">make-up remover</option>
                    <option value="option6">mask</option>
                    <option value="option7">moisturizer</option>
                    <option value="option8">serum</option>
                    <option value="option9">sunscreen</option>
                    <option value="option10">toner</option>
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
              {wishlist.map((item) => (
                <>
                  {editItemID === item.id ? (
                    <WishlistEditable
                      key={item.id}
                      editWishlistFormData={editWishlistFormData}
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
