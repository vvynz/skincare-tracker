import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form"; // REMOVE LATER

import InUse from "./InUse";

import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

import "../Styles/ProductForm.scss";

export default function ProductForm() {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || []
  );
  const [formData, setFormData] = useState({
    itemName: "",
    dateOpened: "",
    expiryDate: "",
  });
  // const [itemName, setFormChangeItemName] = useState("");
  // const [dateOpened, setFormChangeDateOpened] = useState("");
  // const [expiryDate, setFormChangeExpiryDate] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  // const { register, handleSubmit, formState: { errors } } = useForm();
  // const onSubmit = (data) => {
  // alert(JSON.stringify(data))
  // console.log(data);
  // console.log(errors)
  // };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSubmitted(true);

    // if (items.itemName && items.dateOpened && items.expiryDate) {
    //   setValid(true);
    // }

    // create a new obj with the new form values
    const newItem = {
      id: nanoid(),
      itemName: formData.itemName,
      dateOpened: formData.dateOpened,
      expiryDate: formData.expiryDate,
    };

    // create a new items array, copy the prev items and add the new item obj
    const newItems = [...items, newItem];
    // set the new items array to state
    setItems(newItems);
  };

  const setFormChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    // create a new obj and copy the prev formData
    const newData = { ...formData };
    // update with new form data
    newData[name] = value;
    // console.log(newData);

    // setFormChange the newData to state
    setFormData(newData);
  };
  console.log(items);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <FormControl className="product-form">
          {submitted && valid ? (
            <Alert status="success">
              <AlertIcon />
              Sucess! Item has been added!
            </Alert>
          ) : null}

          <FormLabel>Item:</FormLabel>
          <Input
            className="form-field"
            value={formData.itemName}
            // value={itemName}
            required="required"
            onChange={setFormChange}
            placeholder="Item name"
            name="itemName"
          />
          {submitted && !items.itemName ? (
            <small className="err-message">Please enter a item</small>
          ) : null}
          <FormLabel>Date opened:</FormLabel>
          <Input
            value={formData.dateOpened.toLocaleDateString}
            required="required"
            onInput={setFormChange}
            type="date"
            name="dateOpened"
          />
          {submitted && !items.dateOpened ? (
            <small className="err-message">Please enter a date</small>
          ) : null}
          <FormLabel>Expiry date:</FormLabel>
          <Input
            value={formData.expiryDate.toLocaleDateString}
            required="required"
            onInput={setFormChange}
            type="date"
            name="expiryDate"
          />
          {submitted && !items.expiryDate ? (
            <small className="err-message">Please enter a date</small>
          ) : null}
          <Button type="submit" className="add-product-btn">
            Add
          </Button>
        </FormControl>
      </form>

      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl className="product-form">
          <FormLabel>Product:</FormLabel>
          <Input
            className="form-field"
            type="text"
            placeholder="Product name"
            {...register("Product name", { required: true })} />

          <FormLabel>Date opened:</FormLabel>
          <Input
            type="datetime"
            placeholder="yyyy-mm-dd"
            {...register("Date opened", {})} />

          <FormLabel>Expiry date:</FormLabel>
          <Input
            type="datetime"
            placeholder="yyyy-mm-dd"
            {...register("Expiry date", {})} />
          <Button type="submit" className="add-product-btn">Add</Button>
        </FormControl>
      </form> */}
      {items.map((item) => (
        <InUse key={item.id} items={item} />
      ))}
    </div>
  );
}
