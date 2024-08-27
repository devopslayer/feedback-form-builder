import React from "react";
import StarRating from "./StarRating";
import SmileRating from "./SmileRating";
import TextArea from "./TextArea";
import RadioButton from "./RadioButton";
import Categories from "./Categories";
import NumericalRating from "./NumericalRating";
import SingleLineInput from "./SingleLineInput";

const FormField = ({ field, index, onUpdate, onDelete }) => {
  const handleChange = (value) => {
    onUpdate(index, { ...field, value });
  };

  return (
    <div
      style={{
        marginBottom: "20px",
        border: "1px solid #ccc",
        padding: "10px",
      }}
    >
      <label>
        {field.label} {field.required && "*"}
      </label>
      {field.type === "StarRating" && (
        <StarRating
          label={field.label}
          required={field.required}
          errorMessage={field.errorMessage}
          onChange={handleChange}
        />
      )}
      {field.type === "SmileRating" && (
        <SmileRating
          label={field.label}
          required={field.required}
          errorMessage={field.errorMessage}
          onChange={handleChange}
        />
      )}
      {field.type === "TextArea" && (
        <TextArea
          label={field.label}
          required={field.required}
          errorMessage={field.errorMessage}
          onChange={handleChange}
        />
      )}
      {field.type === "RadioButton" && (
        <RadioButton
          label={field.label}
          options={field.options}
          required={field.required}
          errorMessage={field.errorMessage}
          onChange={handleChange}
        />
      )}
      {field.type === "Categories" && (
        <Categories
          label={field.label}
          options={field.options}
          required={field.required}
          errorMessage={field.errorMessage}
          onChange={handleChange}
        />
      )}
      {field.type === "NumericalRating" && (
        <NumericalRating
          label={field.label}
          required={field.required}
          errorMessage={field.errorMessage}
          onChange={handleChange}
        />
      )}
      {field.type === "SingleLineInput" && (
        <SingleLineInput
          label={field.label}
          required={field.required}
          errorMessage={field.errorMessage}
          onChange={handleChange}
        />
      )}
      <button onClick={() => onDelete(index)}>Delete Field</button>
    </div>
  );
};

export default FormField;
