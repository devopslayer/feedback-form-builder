import React from "react";
import {
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
} from "@mui/material";

const RadioButton = ({ label, options = [], value, onChange }) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup value={value} onChange={onChange}>
        {options.length > 0 ? (
          options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))
        ) : (
          <p>No options available</p>
        )}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
