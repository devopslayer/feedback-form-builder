import React from "react";
import { TextField } from "@mui/material";

const SingleLineInput = ({ label, required, errorMessage, onChange }) => (
  <div>
    <label>
      {label} {required && "*"}
    </label>
    <TextField onChange={(e) => onChange(e.target.value)} />
    {required && <span>{errorMessage}</span>}
  </div>
);

export default SingleLineInput;
