import React, { useState } from "react";

import "../Styles/ProductForm.scss";

export default function ProductForm() {
  return (
    <div className="form-container">
      <form className="product-form">
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
      </form>
    </div>
  );
}