import React from "react";
import { TextField } from "@mui/material";

const TextArea = ({ label, required, errorMessage, onChange }) => (
  <div>
    <label>
      {label} {required && "*"}
    </label>
    <TextField multiline rows={4} onChange={(e) => onChange(e.target.value)} />
    {required && <span>{errorMessage}</span>}
  </div>
);

export default TextArea;
