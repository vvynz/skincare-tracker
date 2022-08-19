import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form"; // REMOVE LATER

import InUse from "./InUse";
import InUseEditable from "./InUseEditable";

import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Alert,
  AlertIcon,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import "../Styles/ItemForm.scss";

export default function ProductForm() {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || []
  );
  const [formData, setFormData] = useState({
    itemName: "",
    dateOpened: "",
    expiryDate: "",
    repurchase: false,
  });
  const [editFormData, setEditFormData] = useState({
    itemName: "",
    dateOpened: "",
    expiryDate: "",
    repurchase: false,
  });
  const [editItemID, setEditItemID] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // create a new obj with the new form values
    const newItem = {
      id: nanoid(),
      itemName: formData.itemName,
      dateOpened: formData.dateOpened,
      expiryDate: formData.expiryDate,
      repurchase: formData.repurchase,
    };

    // create a new items array, copy the prev items and add the new item obj
    const newItems = [...items, newItem];
    // set the new items array to state
    setItems(newItems);
    setSubmitted(true);

    //// ONLY ITEMNAME WILL CLEAR
    // setFormData({
    //   itemName: "",
    //   dateOpened: "",
    //   expiryDate: ""
    // })
  };

  const setFormChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    // create a new obj and copy the prev formData
    const newData = { ...formData };
    // update with new form data
    newData[name] = value;

    // setFormChange the newData to state
    setFormData(newData);
  };

  const editItem = (e, item) => {
    e.preventDefault();
    setEditItemID(item.id);

    //create a new obj with the selected item's form values
    const formValues = {
      itemName: item.itemName,
      dateOpened: item.dateOpened,
      expiryDate: item.expiryDate,
      repurchase: item.repurchase,
    };

    setEditFormData(formValues);
  };

  const handleEditFormChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    // create a new obj with the form values being edited, before saving to state
    const updFormData = { ...editFormData };
    updFormData[name] = value;
    setEditFormData(updFormData);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    // create a new obj with the new form values during editing
    const editedItem = {
      id: editItemID,
      itemName: editFormData.itemName,
      dateOpened: editFormData.dateOpened,
      expiryDate: editFormData.expiryDate,
      repurchase: editFormData.repurchase,
    };

    //create a copy of the items array
    const newItems = [...items];

    // Find the index of the item being edited
    const index = items.findIndex((item) => item.id === editItemID);
    // update the item with the update values
    newItems[index] = editedItem;

    //saved the updated item to state
    setItems(newItems);
    setEditItemID(null);
  };

  const deleteItem = (itemID) => {
    // create a new array and copy prev items array
    const newItems = [...items];

    // find the index of the selected item in the items array
    const index = newItems.findIndex((item) => item.id === itemID);
    // remove the selected item from array
    newItems.splice(index, 1);

    //set the newItems array to state
    setItems(newItems);
  };

  const cancel = () => {
    setEditItemID(null);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="form-container">
      <nav className="side-nav">
        <Button className="add_item_btn" colorScheme="purple" onClick={onOpen}>
          Add Item
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Item Currently In Use:</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <FormControl className="product-form">
                  {submitted ? (
                    <Alert className="success_msg" status="success">
                      <AlertIcon />
                      Sucess! Item has been added!
                    </Alert>
                  ) : null}

                  <FormLabel>Item:</FormLabel>
                  <Input
                    className="input-field"
                    value={formData.itemName}
                    required="required"
                    onChange={setFormChange}
                    placeholder="Item name"
                    name="itemName"
                  />

                  <FormLabel>Date opened:</FormLabel>
                  <Input
                    className="input-field"
                    value={formData.dateOpened.toLocaleDateString}
                    required="required"
                    onInput={setFormChange}
                    type="date"
                    name="dateOpened"
                  />

                  <FormLabel>Expiry date:</FormLabel>
                  <Input
                    className="input-field"
                    value={formData.expiryDate.toLocaleDateString}
                    required="required"
                    onInput={setFormChange}
                    type="date"
                    name="expiryDate"
                  />

                  {/* <FormLabel>Repurchase?</FormLabel>
                  <div className="repurchase-container">
                    <input
                      className="input-field"
                      value={formData.repurchase}
                      type="checkbox"
                      name="repurchase"
                    />
                    <label className="repurchase-label">Yes</label>
                  </div> */}

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
        <form onSubmit={handleEditFormSubmit}>
          <Table>
            <TableCaption>Current Items in Use:</TableCaption>
            <Thead>
              <Tr>
                <Th>Item:</Th>
                <Th>Date Opened:</Th>
                <Th>Expiry Date:</Th>
                <Th>Repurchase?</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {items.map((item) => (
                <>
                  {editItemID === item.id ? (
                    <InUseEditable
                      key={item.id}
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      cancel={cancel}
                    />
                  ) : (
                    <InUse
                      key={item.id}
                      item={item}
                      editItem={editItem}
                      deleteItem={deleteItem}
                    />
                  )}
                </>
              ))}
            </Tbody>
          </Table>
        </form>
      </TableContainer>
    </div>
  );
}
