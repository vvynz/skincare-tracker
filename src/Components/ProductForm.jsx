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
  const [products, setProducts] = useState({
    productName: "",
    dateOpened: "",
    expiryDate: "",
  });
  const [sumbitted, setSubmitted] = useState(false);
  // const { register, handleSubmit, formState: { errors } } = useForm();
  // const onSubmit = (data) => {
  // alert(JSON.stringify(data))
  // console.log(data);
  // console.log(errors)
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // productName clears but other fields don't 
    setProducts({
      productName: "",
      dateOpened: "",
      expiryDate: "",
    });
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <FormControl className="product-form">

          {sumbitted ?
            <Alert status="success">
              <AlertIcon />
              Sucess! Product has been added!
            </Alert>
            : null}

          <FormLabel>Product:</FormLabel>
          <Input
            className="form-field"
            value={products.productName}
            onChange={(e) => setProducts({ ...products, productName: e.target.value })}
            placeholder="Product name"
            name="productName" />
          <small className="err-message">Please enter a product</small>
          <FormLabel>Date opened:</FormLabel>
          <Input
            value={products.dateOpened.toLocaleDateString}
            onInput={(e) => setProducts({ ...products, dateOpened: e.target.value })}
            type="date"
            name="dateOpened" />
          <small className="err-message">Please enter a date</small>
          <FormLabel>Expiry date:</FormLabel>
          <Input
            value={products.expiryDate.toLocaleDateString}
            onInput={(e) => setProducts({ ...products, expiryDate: e.target.value })}
            type="date"
            name="expiryDate" />
          <small className="err-message">Please enter a date</small>
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
      <InUse products={products} />
    </div>
  );
}