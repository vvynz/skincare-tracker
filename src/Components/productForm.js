import React, { useState } from "react";

export default function ProductForm() {
  return (
    <div className="form-container">
      <form className="product-form">
        <input
          className="form-field"
          placeholder="Product name"
          name="productName" />
        <label>Date opened:</label>
        <input type="date" />
        <label>Expiry date:</label>
        <input type="date" />
        <button className="add-product-btn">Add</button>
      </form>
    </div>
  );
}