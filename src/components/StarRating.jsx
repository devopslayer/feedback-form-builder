import React from "react";
import { Rating } from "@mui/material";

const StarRating = ({ label, required, errorMessage, onChange }) => (
  <div>
    <label>
      {label} {required && "*"}
    </label>
    <Rating onChange={(e, newValue) => onChange(newValue)} />
    {required && <span>{errorMessage}</span>}
  </div>
);

export default StarRating;
