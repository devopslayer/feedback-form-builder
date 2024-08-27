import React, { useState } from "react";
import { Button } from "@mui/material";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../utils/localStorageUtils";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [forms, setForms] = useState(
    getFromLocalStorage("feedbackForms") || []
  );

  const handleRemove = (index) => {
    const updatedForms = [...forms];
    const removedFormId = updatedForms[index].id;
    updatedForms.splice(index, 1);
    setForms(updatedForms);
    localStorage.setItem("feedbackForms", JSON.stringify(updatedForms));
    removeFromLocalStorage(`feedback-${removedFormId}`);
  };

  return (
    <div>
      <Button onClick={() => navigate("/form-builder")}>Create New Form</Button>
      <div>
        {forms.map((form, index) => (
          <div key={form.id}>
            {" "}
            <h3>{form.title}</h3>
            <Button onClick={() => navigate(`/feedback/${form.id}`)}>
              View Details
            </Button>
            <Button onClick={() => handleRemove(index)}>Remove Form</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
