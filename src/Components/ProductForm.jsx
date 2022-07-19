import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button
} from "@chakra-ui/react";

import "../Styles/ProductForm.scss";

export default function ProductForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    console.log(errors)
  };

  return (
    <div className="form-container">
      {/* <form className="product-form">
        <label>Product:</label>
        <input
          className="form-field"
          placeholder="Product name"
          name="productName" />
        <label>Date opened:</label>
        <input type="date" />
        <label>Expiry date:</label>
        <input type="date" />
        <button className="add-product-btn">Add</button>
      </form> */}

      <form className="product-form" onSubmit={handleSubmit(onSubmit)}>
        <label>Product:</label>
        <input
          className="form-field"
          type="text"
          placeholder="Product name"
          {...register("Product name", { required: true })} />

        <label>Date opened:</label>
        <input
          type="datetime"
          placeholder="yyyy-mm-dd"
          {...register("Date opened", {})} />

        <label>Expiry date:</label>
        <input
          type="datetime"
          placeholder="yyyy-mm-dd"
          {...register("Expiry date", {})} />
        <button type="submit" className="add-product-btn">Add</button>
      </form>
    </div>
  );
}