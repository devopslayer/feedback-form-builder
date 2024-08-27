import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from "../utils/localStorageUtils";
import FormField from "../components/FormField";
import { useNavigate } from "react-router-dom";

const FormBuilder = () => {
  const [formFields, setFormFields] = useState([]);
  const [formTitle, setFormTitle] = useState("");
  const navigate = useNavigate();

  const addField = (fieldType) => {
    const newField = {
      type: fieldType,
      label: "",
      required: false,
      errorMessage: "",
    };
    setFormFields([...formFields, newField]);
  };

  const updateField = (index, updatedField) => {
    const updatedFields = formFields.map((field, i) =>
      i === index ? updatedField : field
    );
    setFormFields(updatedFields);
  };

  const deleteField = (index) => {
    setFormFields(formFields.filter((_, i) => i !== index));
  };

  const saveForm = () => {
    const forms = getFromLocalStorage("feedbackForms") || [];
    const updatedForms = [...forms, { title: formTitle, fields: formFields }];
    saveToLocalStorage("feedbackForms", updatedForms);
    navigate("/");
  };

  return (
    <div>
      <TextField
        label="Form Title"
        value={formTitle}
        onChange={(e) => setFormTitle(e.target.value)}
      />
      <Button onClick={() => addField("StarRating")}>Add Star Rating</Button>
      <Button onClick={() => addField("SmileRating")}>Add Smile Rating</Button>
      <Button onClick={() => addField("TextArea")}>Add Text Area</Button>
      <Button onClick={() => addField("RadioButton")}>Add Radio Button</Button>
      <Button onClick={() => addField("Categories")}>Add Categories</Button>
      <Button onClick={() => addField("NumericalRating")}>
        Add Numerical Rating
      </Button>
      <Button onClick={() => addField("SingleLineInput")}>
        Add Single Line Input
      </Button>

      {formFields.map((field, index) => (
        <FormField
          key={index}
          field={field}
          index={index}
          onUpdate={updateField}
          onDelete={deleteField}
        />
      ))}

      <Button onClick={saveForm}>Save Form</Button>
    </div>
  );
};

export default FormBuilder;
