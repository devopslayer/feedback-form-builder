import React from "react";
import { TextField } from "@mui/material";

const NumericalRating = ({ label, required, errorMessage, onChange }) => (
  <div>
    <label>
      {label} {required && "*"}
    </label>
    <TextField type="number" onChange={(e) => onChange(e.target.value)} />
    {required && <span>{errorMessage}</span>}
  </div>
);

export default NumericalRating;
