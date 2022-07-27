import React, { useState } from "react";
import { useForm } from "react-hook-form";

import InUse from "./InUse";

import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Alert,
  AlertIcon
} from "@chakra-ui/react";

import "../Styles/ProductForm.scss";

export default function ProductForm() {
  const [items, setitems] = useState({
    itemName: "",
    dateOpened: "",
    expiryDate: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  // const { register, handleSubmit, formState: { errors } } = useForm();
  // const onSubmit = (data) => {
  // alert(JSON.stringify(data))
  // console.log(data);
  // console.log(errors)
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // itemName clears but other fields don't 
    // setitems({
    //   itemName: "",
    //   dateOpened: "",
    //   expiryDate: "",
    // });

    // clearForm();
    // save();
  }

  const save = () => {
    setSubmitted(true);
    if (items.itemName && items.dateOpened && items.expiryDate) {
      setValid(true);
    }

    setitems({
      itemName: items.itemName,
      dateOpened: items.dateOpened,
      expiryDate: items.expiryDate
    })
  }

  // const clearForm = () => {
  //   setSubmitted(false);
  //   setValid(false);
  //   setitems({
  //     itemName: "",
  //     dateOpened: "",
  //     expiryDate: ""
  //   })
  // }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <FormControl className="product-form">

          {submitted && valid ?
            <Alert status="success">
              <AlertIcon />
              Sucess! Product has been added!
            </Alert>
            : null}

          <FormLabel>Product:</FormLabel>
          <Input
            className="form-field"
            value={items.itemName}
            onChange={(e) => setitems({ ...items, itemName: e.target.value })}
            placeholder="Product name"
            name="itemName" />
          {submitted && !items.itemName ? <small className="err-message">Please enter a product</small> : null}
          <FormLabel>Date opened:</FormLabel>
          <Input
            value={items.dateOpened.toLocaleDateString}
            onInput={(e) => setitems({ ...items, dateOpened: e.target.value })}
            type="date"
            name="dateOpened" />
          {submitted && !items.dateOpened ? <small className="err-message">Please enter a date</small> : null}
          <FormLabel>Expiry date:</FormLabel>
          <Input
            value={items.expiryDate.toLocaleDateString}
            onInput={(e) => setitems({ ...items, expiryDate: e.target.value })}
            type="date"
            name="expiryDate" />
          {submitted && !items.expiryDate ? <small className="err-message">Please enter a date</small> : null}
          <Button type="submit" className="add-product-btn">Add</Button>
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