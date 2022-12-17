import "./App.css";
import CustomForm from "./components/customForm";
import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormDefinition from "./components/formDefinition";

export const FormContext = createContext();

function App() {
  const inputFields = [
    {
      label: "",
      placeholder: "",
      type: "",
      description: "",
      isRequired: "",
      pattern: "",
      formatToDisplay: "",
      add: "",
      edit: "",
      remove: "",
      item: "",
      items: [],
    },
  ];

  return (
    <BrowserRouter>
      <FormContext.Provider value={inputFields}>
        <Routes>
          <Route path="/" element={<FormDefinition />} />
          <Route path="/customForm" element={<CustomForm />} />
        </Routes>
      </FormContext.Provider>
    </BrowserRouter>
  );
}

export default App;
