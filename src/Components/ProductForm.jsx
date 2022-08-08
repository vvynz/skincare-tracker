import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

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
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem("items")) || []);
  const [formData, setFormData] = ({
    itemName: "",
    dateOpened: "",
    expiryDate: "",
  });
  // const [itemName, setItemName] = useState("");
  // const [dateOpened, setDateOpened] = useState("");
  // const [expiryDate, setExpiryDate] = useState("");
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

    setSubmitted(true);
    // setItemName("");
    // setDateOpened("");
    // setExpiryDate("");
    // alert(`Form submitted! ${itemName} ${dateOpened} ${expiryDate}`)
    if (items.itemName && items.dateOpened && items.expiryDate) {
      setValid(true);
    }

    // clearForm();
    // save();
  };

  const set = (name) => {
    return ({ target: { value } }) => {
      setItems((prev) => ({ ...prev, [name]: value }));
    };
  };

  // const save = () => {
  //   setSubmitted(true);
  //   if (items.itemName && items.dateOpened && items.expiryDate) {
  //     setValid(true);
  //   }
  //   setItems({
  //     itemName: items.itemName,
  //     dateOpened: items.dateOpened,
  //     expiryDate: items.expiryDate
  //   })
  // }

  // const clearForm = () => {
  //   setSubmitted(false);
  //   setValid(false);
  //   setItems({
  //     itemName: "",
  //     dateOpened: "",
  //     expiryDate: ""
  //   })
  // }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <FormControl className="product-form">
          {submitted && valid ? (
            <Alert status="success">
              <AlertIcon />
              Sucess! Product has been added!
            </Alert>
          ) : null}

          <FormLabel>Product:</FormLabel>
          <Input
            className="form-field"
            value={items.itemName}
            // value={itemName}
            // onChange={(e) => setItemName({ ...itemName, itemName: e.target.value })}
            onChange={set("itemName")}
            placeholder="Product name"
            name="itemName"
          />
          {submitted && !items.itemName ? (
            <small className="err-message">Please enter a product</small>
          ) : null}
          <FormLabel>Date opened:</FormLabel>
          <Input
            value={items.dateOpened.toLocaleDateString}
            // onInput={(e) => setDateOpened({ ...dateOpened, dateOpened: e.target.value })}
            onInput={set("dateOpened")}
            type="date"
            name="dateOpened"
          />
          {submitted && !items.dateOpened ? (
            <small className="err-message">Please enter a date</small>
          ) : null}
          <FormLabel>Expiry date:</FormLabel>
          <Input
            value={items.expiryDate.toLocaleDateString}
            // onInput={(e) => setExpiryDate({ ...expiryDate, expiryDate: e.target.value })}
            onInput={set("expiryDate")}
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
      <InUse items={items} />
    </div>
  );
}
