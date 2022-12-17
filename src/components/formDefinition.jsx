import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FormContext } from "../App";
import SelectForm from "./sharedComponents/selectForm";
import CheckBoxForm from "./sharedComponents/checkBoxForm";
import SimpleInput from "./sharedComponents/simpleInput";

const FormDefinition = () => {
  let inputFields = useContext(FormContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [type, setType] = useState("");
  const [items, setItems] = useState("");
  const [item, setItem] = useState("");

  useEffect(() => {
    inputFields.length === 0
      ? navigate(0)
      : //to activating edit button
      formItems?.type
      ? setType(formItems?.type)
      : setType("");
  }, []);

  //get New or Edited formItems
  let formItems =
    inputFields[
      state?.index !== undefined ? state?.index : inputFields.length - 1
    ];

  const handleChange = e => {
    if (e.target.type === "checkbox") {
      e.target.checked
        ? (formItems[e.target.name] = e.target.value)
        : (formItems[e.target.name] = "");
    } else {
      formItems[e.target.name] = e.target.value;
    }
    //To enable to show more data and creating form
    formItems.type ? setType(formItems.type) : setType("");

    //setOptions for "select", "radio" and "checkBox" inputs
    e.target.name === "item" && setItem(formItems.item);
    console.log("formIetms", formItems);
  };

  const handleAddItems = () => {
    let items = [...formItems.items];

    item && !items?.includes(item) && formItems["items"].push(item);
    setItems(formItems["items"]);
    setItem("");
  };
  const handleRemoveItems = () => {
    formItems["items"].pop();
    setItems([...formItems["items"]]);
  };

  return (
    <div className="min-h-[90vh] p-3 border-2 border-cyan-500 bg-[#34bfbb] ">
      <p className="mb-4 text-[20px] font-bold">
        Please enter the properties of your custom field:
      </p>

      <div className="flex flex-col">
        <div className="w-full flex items-center">
          <div className="flex justify-center items-center">
            <SelectForm
              label="Field type:"
              name="type"
              id="fieldType"
              onChange={e => handleChange(e)}
              defaultValue={formItems?.type}
              options={[
                { condition: true, value: " ", title: " " },
                { condition: true, value: "number", title: "Number" },
                { condition: true, value: "text", title: "Text" },
                { condition: true, value: "email", title: "Email" },
                { condition: true, value: "date", title: "Date" },
                { condition: true, value: "timeSpan", title: "Time Span" },
                { condition: true, value: "select", title: "Select" },
                { condition: true, value: "radio", title: "Radio" },
                { condition: true, value: "checkbox", title: "CheckBox" },
              ]}
            />
          </div>
          {formItems?.items.length > 0 &&
            Boolean(
              type === "select" || type === "radio" || type === "checkbox"
            ) && (
              <div className=" ml-3 mt-3 p-1 bg-white flex items-center w-[60%] h-fit rounded">
                <span className="font-bold text-[14px]">Options</span>: [
                {formItems?.items?.map((item, index) => (
                  <span key={index}>{item}, </span>
                ))}
                ]
              </div>
            )}
        </div>
        {Boolean(
          type === "select" || type === "radio" || type === "checkbox"
        ) && (
          <div className="flex border-2 border-black rounded-lg w-fit px-2">
            <SimpleInput
              inputClassName="border border-slate-600 duration-300 focus:outline-none focus:ring focus:ring-blue-700 rounded p-1 m-2"
              label={<small>Please enter options one by one: </small>}
              id="item"
              type="text"
              name="item"
              value={item}
              onChange={e => handleChange(e)}
            />
            <button
              className="focus:outline-none focus:ring focus:ring-blue-700 bg-blue-500 text-[14px] duration-300 hover:bg-blue-600 rounded-lg p-1 m-2"
              onClick={handleAddItems}
            >
              Add
            </button>
            <button
              className={`${
                items.length > 0 ? "bg-red-500 hover:bg-red-600" : "bg-gray-300"
              } focus:outline-none focus:ring focus:ring-red-700 text-[14px] duration-300  rounded-lg p-1 m-2`}
              onClick={handleRemoveItems}
              disabled={formItems?.items.length > 0 ? false : true}
            >
              Delete
            </button>
          </div>
        )}

        <div className="mt-3">
          <SimpleInput
            inputClassName="border border-slate-600 duration-300 focus:outline-none focus:ring focus:ring-blue-700 rounded p-1 m-2"
            label="Field title:"
            id="fieldTitle"
            type="text"
            name="label"
            defaultValue={formItems?.label}
            onChange={e => handleChange(e)}
          />
        </div>

        <div className="mt-3">
          <SimpleInput
            inputClassName="border border-slate-600 duration-300 focus:outline-none focus:ring focus:ring-blue-700 rounded p-1 m-2"
            label="Placeholder:"
            id="placeholder"
            type="text"
            name="placeholder"
            defaultValue={formItems?.placeholder}
            onChange={e => handleChange(e)}
            disabled={
              type === "date" ||
              type === "timeSpan" ||
              type === "select" ||
              type === "radio" ||
              type === "checkbox"
            }
          />
        </div>

        <div className="mt-3 max-w-full h-fit">
          <SimpleInput
            inputClassName="border border-slate-600 duration-300 focus:outline-none focus:ring focus:ring-blue-700 rounded p-1 m-2 w-[70%]"
            label="Description of field:"
            id="description"
            type="text"
            name="description"
            defaultValue={formItems?.description}
            onChange={e => handleChange(e)}
          />
        </div>

        <SelectForm
          label="Is required:"
          name="isRequired"
          id="isRequired"
          onChange={e => handleChange(e)}
          defaultValue={formItems?.isRequired}
          options={[
            { condition: true, value: " ", title: " " },
            { condition: true, value: "false", title: "No" },
            { condition: true, value: "true", title: "Yes" },
          ]}
        />

        <SelectForm
          label="Pattern to validate:"
          name="pattern"
          id="validation"
          onChange={e => handleChange(e)}
          defaultValue={formItems?.type}
          options={[
            { condition: true, value: " ", title: " " },
            {
              condition: type === "text",
              value: "PasswordStrengthValidation",
              title: "Password strength validation",
              selected: formItems?.pattern === "PasswordStrengthValidation",
            },
            {
              condition: Boolean(type === "email" || type === "text"),
              value: "Email",
              title: "Email",
              selected: formItems?.pattern === "Email",
            },
            {
              condition: Boolean(type === "number" || type === "text"),
              value: "PhoneNumber",
              title: " Mobile number(Iran)",
              selected: formItems?.pattern === "PhoneNumber",
            },
            {
              condition: type === "text",
              value: "Username",
              title: "Username",
              selected: formItems?.pattern === "Username",
            },
            {
              condition: type === "text",
              value: "URL",
              title: "URL",
              selected: formItems?.pattern === "URL",
            },
            {
              condition: type === "text",
              value: "FilePath",
              title: "File path",
              selected: formItems?.pattern === "FilePath",
            },
          ]}
          disabled={
            (type === "select" || type === "radio" || type === "checkbox") &&
            true
          }
        />

        <SelectForm
          label="Format to display:"
          name="formatToDisplay"
          id="formatToDisplay"
          onChange={e => handleChange(e)}
          defaultValue={formItems?.type}
          options={[
            { condition: true, value: " ", title: " " },
            {
              condition:
                type === "select" || type === "radio" || type === "checkbox",
              value: "row",
              title: "Diplay options in row",
              selected: formItems?.formatToDisplay === "row",
            },
            {
              condition:
                type === "select" || type === "radio" || type === "checkbox",
              value: "column",
              title: "Diplay options in column",
              selected: formItems?.formatToDisplay === "column",
            },
            {
              condition: Boolean(type === "email" || type === "text"),
              value: "uppercase",
              title: "Uppercase",
              selected: formItems?.formatToDisplay === "uppercase",
            },
            {
              condition: Boolean(type === "email" || type === "text"),
              value: "lowercase",
              title: "Lowercase",
              selected: formItems?.formatToDisplay === "lowercase",
            },
            {
              condition: type === "text" || type === "number",
              value: "separate3Digits",
              title: "Separate numbers by 3 digits",
              selected: formItems?.formatToDisplay === "separate3Digits",
            },
          ]}
          disabled={(type === "date" || type === "timeSpan") && true}
        />

        <CheckBoxForm
          title="User accessibility on this field:"
          checkBoxItems={[
            {
              className: "m-1",
              type: "checkbox",
              value: "add",
              onChange: e => handleChange(e),
              defaultChecked: formItems?.add,
              label: "Add a new field",
            },
            {
              className: "m-1",
              type: "checkbox",
              value: "edit",
              onChange: e => handleChange(e),
              defaultChecked: formItems?.edit,
              label: "Edit",
            },
            {
              className: "m-1",
              type: "checkbox",
              value: "remove",
              onChange: e => handleChange(e),
              defaultChecked: formItems?.remove,
              label: "Delete",
            },
          ]}
        />
      </div>
      <div className="w-full flex justify-center items-center">
        <button
          className={`w-[200px] focus:outline-none focus:ring focus:ring-green-700 duration-300 rounded-lg p-2 mx-auto mt-10 text-[20px] text-white font-bold ${
            type
              ? state?.index !== undefined
                ? "bg-[#780758] hover:bg-[#54083e]"
                : "bg-black hover:bg-gray-800"
              : "bg-gray-300"
          }`}
          onClick={() => {
            navigate("/customForm");
          }}
          disabled={type ? false : true}
        >
          {state?.index !== undefined ? "Edit" : "Create your form"}
        </button>
      </div>
    </div>
  );
};

export default FormDefinition;
