import React, { useState } from "react";
import { useForm } from "react-hook-form";

import InUse from "./InUse";

import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button
} from "@chakra-ui/react";

import "../Styles/ProductForm.scss";

export default function ProductForm() {
  const [products, setProducts] = useState({
    productName: "",
    dateOpened: "",
    expiryDate: "",
  });
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    // alert(JSON.stringify(data))
    console.log(data);
    console.log(errors)
  };

  const handleProductNameChange = (e) => {
    setProducts({ ...products, productName: e.target.value });
  }

  const handleDateOpenedChange = (e) => {
    setProducts({ ...products, dateOpened: e.target });
    console.log(e);
    console.log(e.target.value);
  }


  return (
    <div className="form-container">
      <FormControl className="product-form">
        <FormLabel>Product:</FormLabel>
        <Input
          className="form-field"
          value={products.productName}
          onChange={handleProductNameChange}
          placeholder="Product name"
          name="productName" />
        <FormLabel>Date opened:</FormLabel>
        <input
          value={products.dateOpened.toLocaleDateString}
          onInput={handleDateOpenedChange}
          type="date"
          name="dateOpened" />
        <FormLabel>Expiry date:</FormLabel>
        <input
          value={products.expiryDate}
          type="date"
          name="expiryDate" />
        <Button className="add-product-btn">Add</Button>
      </FormControl>

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