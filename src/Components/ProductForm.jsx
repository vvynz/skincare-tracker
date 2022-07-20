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
  const [products, setProducts] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    // alert(JSON.stringify(data))
    console.log(data);
    setProducts(data);
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

      <form onSubmit={handleSubmit(onSubmit)}>
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
      </form>
    </div>
  );
}