import React from "react";
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  FormLabel,
} from "@mui/material";

const Categories = ({
  label,
  categories = [],
  selectedCategories = [],
  onChange,
}) => {
  if (!Array.isArray(categories)) {
    console.error("Expected 'categories' to be an array but got:", categories);
    return null;
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <div>
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={selectedCategories.includes(category.value)}
                  onChange={() => onChange(category.value)}
                />
              }
              label={category.label}
            />
          ))
        ) : (
          <p>No categories available</p>
        )}
      </div>
    </FormControl>
  );
};

export default Categories;
