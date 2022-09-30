import React from "react";
import { nanoid } from "nanoid";
import toast from "react-hot-toast";

import InUse from "./InUse";
import InUseEditable from "./InUseEditable";
import useAppData from "../Hooks/useAppData";

import {
  FormControl,
  FormLabel,
  Input,
  Button,
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

export default function ItemForm({
  items,
  setItems,
  formData,
  setFormData,
  editFormData,
  setEditFormData,
  editItemID,
  setEditItemID,
}) {
  const { generateDate, getDaysInMonth } = useAppData();

  const handleSubmit = (e) => {
    //this will reset the form...
    e.preventDefault();

    // create a new obj with the new form values
    const newItem = {
      id: nanoid(),
      brand: formData.brand,
      itemName: formData.itemName,
      dateOpened: formData.dateOpened,
      expiryDate: formData.expiryDate,
      repurchase: formData.repurchase,
    };

    // create a new items array, copy the prev items and add the new item obj
    const newItems = [...items, newItem];
    // set the new items array to state
    setItems(newItems);

    // ONLY ITEMNAME WILL CLEAR
    // setFormData({
    //   itemName: "",
    //   dateOpened: "",
    //   expiryDate: "",
    //   repurchase: false
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
      brand: item.brand,
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
      brand: editFormData.brand,
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

  const toggleRepurchase = (id) => {
    setItems((oldItems) =>
      oldItems.map((item) => {
        return item.id === id
          ? { ...item, repurchase: !item.repurchase }
          : item;
      })
    );
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const expiringItems = () => {
    const today = generateDate();
    const d = Number(today.substring(today.length - 2));
    const m = Number(today.substring(today.length - 5, today.length - 3));
    const y = Number(today.substring(0, 4));
    let daysInCurrentMonth = getDaysInMonth(y, m, 0);
    
    let result = [];

    items.map((item) => {
      const expDay = Number(
        item.expiryDate.substring(item.expiryDate.length - 2)
      );
      const month = Number(
        item.expiryDate.substring(
          item.expiryDate.length - 5,
          item.expiryDate.length - 3
        )
      );
      const year = Number(item.expiryDate.substring(0, 4));

      // if the current month matches the item's expiry month
      let daysRemaining;

      if (y === year && m === month) {
        //calculate the num of items expiring this month
        daysRemaining = expDay - d;
      } else if (y === year && m !== month) {
        // calculate the num of items expiring if their expiry date is within the next month
        let daysLeftInCurrentMon = daysInCurrentMonth - d;
        
        daysRemaining = daysLeftInCurrentMon + expDay;
      }

      return daysRemaining <= 30 ? result.push(item.itemName) : null;
    });

    return result.length === 1
      ? `${result.join(" ")} is expiring soon!`
      : result.length > 1
      ? `${result.join(", ")} are expiring soon!`
      : "No notifications at this time";
  };

  const notify = () => toast.error(expiringItems());

  return (
    <div className="form-container">
      <nav className="side-nav">
        <Button className="add_item_btn" colorScheme="purple" size="sm" onClick={onOpen}>
          Add Item
        </Button>
        <Button onClick={notify} colorScheme="purple" size="sm">
          Notifications
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Item Currently In Use:</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <FormControl className="product-form">
                  <FormLabel>Brand:</FormLabel>
                  <Input
                    className="input-field"
                    value={formData.brand}
                    onChange={setFormChange}
                    placeholder="Brand"
                    name="brand"
                  />

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
                <Th>Brand:</Th>
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
                      toggleRepurchase={() => toggleRepurchase(item.id)}
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
