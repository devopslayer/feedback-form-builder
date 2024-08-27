import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import FormBuilder from "./pages/FormBuilder";
import FeedbackDetail from "./pages/FeedbackDetail";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/form-builder" element={<FormBuilder />} />
        <Route path="/feedback/:id" element={<FeedbackDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
