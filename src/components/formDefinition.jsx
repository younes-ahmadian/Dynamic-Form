import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FormContext } from "../App";

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
            <label htmlFor="fieldType">Field type:</label>
            <select
              name="type"
              id="fieldType"
              onChange={e => handleChange(e)}
              defaultValue={formItems?.type}
              className="border border-slate-600 duration-300 focus:outline-none focus:ring focus:ring-blue-700 rounded p-1 m-2"
            >
              <option value=""></option>
              <option value="number">Number</option>
              <option value="text">Text</option>
              <option value="email">Email</option>
              <option value="date">Date</option>
              <option value="timeSpan">Time Span</option>
              <option value="select">Select</option>
              <option value="radio">Radio</option>
              <option value="checkbox">CheckBox</option>
            </select>
          </div>
          {formItems?.items.length > 0 &&
            Boolean(
              type === "select" || type === "radio" || type === "checkbox"
            ) && (
              <div className=" ml-3 p-1 bg-white flex items-center w-[60%] h-fit rounded">
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
          <div className="border-2 border-black rounded-lg w-fit px-2">
            {" "}
            <label htmlFor="item">
              <small>Please enter options one by one: </small>{" "}
            </label>
            <input
              className="border border-slate-600 duration-300 focus:outline-none focus:ring focus:ring-blue-700 rounded p-1 m-2"
              type="text"
              id="item"
              name="item"
              value={item}
              onChange={e => handleChange(e)}
            />
            <button
              className="focus:outline-none focus:ring focus:ring-blue-700 bg-blue-500 text-[14px] duration-300 hover:bg-blue-600 rounded-lg p-1 m-1 h-fit"
              onClick={handleAddItems}
            >
              Add item
            </button>
            <button
              className={`${
                items.length > 0 ? "bg-red-500 hover:bg-red-600" : "bg-gray-300"
              } focus:outline-none focus:ring focus:ring-red-700 text-[14px] duration-300  rounded-lg p-1 m-1 h-fit`}
              onClick={handleRemoveItems}
              disabled={formItems?.items.length > 0 ? false : true}
            >
              Remove item
            </button>
          </div>
        )}

        <div className="mt-3">
          <label htmlFor="fieldTitle">Field title:</label>
          <input
            className="border border-slate-600 duration-300 focus:outline-none focus:ring focus:ring-blue-700 rounded p-1 m-2"
            type="text"
            id="fieldTitle"
            name="label"
            defaultValue={formItems?.label}
            onChange={e => handleChange(e)}
            // disabled
          />
        </div>

        <div className=" mt-3">
          <label htmlFor="placeholder">Placeholder:</label>
          <input
            className="border border-slate-600 duration-300 focus:outline-none focus:ring focus:ring-blue-700 rounded p-1 m-2"
            type="text"
            id="placeholder"
            name="placeholder"
            defaultValue={formItems?.placeholder}
            onChange={e => handleChange(e)}
            disabled={
              (type === "date" ||
                type === "timeSpan" ||
                type === "select" ||
                type === "radio" ||
                type === "checkbox") &&
              true
            }
          />
        </div>

        <div className=" mt-3 max-w-full h-fit">
          <label htmlFor="description">Description of field:</label>
          <input
            className="border border-slate-600 duration-300 focus:outline-none focus:ring focus:ring-blue-700 rounded p-1 m-2 w-[60%]"
            type="text"
            id="description"
            name="description"
            defaultValue={formItems?.description}
            onChange={e => handleChange(e)}
          />
        </div>

        <div className=" mt-3">
          <label htmlFor="isRequired">Is required:</label>
          <select
            name="isRequired"
            id="isRequired"
            defaultValue={formItems?.isRequired}
            onChange={e => handleChange(e)}
            className="border border-slate-600 duration-300 focus:outline-none focus:ring focus:ring-blue-700 rounded p-1 m-2"
          >
            <option value=""></option>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>

        <div className=" mt-3">
          <label htmlFor="validation">Pattern to validate:</label>
          <select
            name="pattern"
            id="validation"
            onChange={e => handleChange(e)}
            disabled={
              (type === "select" || type === "radio" || type === "checkbox") &&
              true
            }
            className="border border-slate-600 duration-300 focus:outline-none focus:ring focus:ring-blue-700 rounded p-1 m-2"
          >
            <option value=""></option>
            {type === "text" && (
              <option
                value="PasswordStrengthValidation"
                selected={formItems?.pattern === "PasswordStrengthValidation"}
              >
                Password strength validation
              </option>
            )}
            {Boolean(type === "email" || type === "text") && (
              <option value="Email" selected={formItems?.pattern === "Email"}>
                Email
              </option>
            )}
            {Boolean(type === "number" || type === "text") && (
              <option
                value="PhoneNumber"
                selected={formItems?.pattern === "PhoneNumber"}
              >
                Mobile number(Iran)
              </option>
            )}
            {type === "text" && (
              <option
                value="Username"
                selected={formItems?.pattern === "Username"}
              >
                Username
              </option>
            )}
            {type === "text" && (
              <option value="URL" selected={formItems?.pattern === "URL"}>
                URL
              </option>
            )}
            {type === "text" && (
              <option
                value="FilePath"
                selected={formItems?.pattern === "FilePath"}
              >
                File path
              </option>
            )}
          </select>
        </div>

        <div className=" mt-3">
          <label htmlFor="formatToDisplay">Format to display:</label>
          <select
            name="formatToDisplay"
            id="formatToDisplay"
            onChange={e => handleChange(e)}
            disabled={(type === "date" || type === "timeSpan") && true}
            className="border border-slate-600 duration-300 focus:outline-none focus:ring focus:ring-blue-700 rounded p-1 m-2"
          >
            <option value=""></option>
            {/* {(type === "select" || type === "radio" || type === "checkbox") && (
              <option
                value="row"
                selected={formItems?.formatToDisplay === "row"}
              >
                Diplay options in row
              </option>
            )}
            {(type === "select" || type === "radio" || type === "checkbox") && (
              <option
                value="column"
                selected={formItems?.formatToDisplay === "column"}
              >
                Diplay options in column
              </option>
            )} */}
            {Boolean(type === "email" || type === "text") && (
              <option
                value="uppercase"
                selected={formItems?.formatToDisplay === "uppercase"}
              >
                Uppercase
              </option>
            )}
            {Boolean(type === "email" || type === "text") && (
              <option
                value="lowercase"
                selected={formItems?.formatToDisplay === "lowercase"}
              >
                Lowercase
              </option>
            )}
            {/* {(type === "text" || type==="number") && (
              <option
                value="separate3Digits"
                selected={formItems?.formatToDisplay === "separate3Digits"}
              >
                Separate numbers by 3 digits
              </option>
            )} */}
          </select>
        </div>

        <div className="flex  mb-2 mt-4">
          <p>User accessibility on this field:</p>
          <div className="flex flex-col mx-2 p-2 border-2 border-white hover:outline-none hover:ring hover:ring-blue-400 duration-300">
            <div>
              {" "}
              <input
                className="m-1"
                type="checkbox"
                id="add"
                name="add"
                value="add"
                defaultChecked={formItems?.add}
                onChange={e => handleChange(e)}
              />
              <label htmlFor="add">Add a new field</label>
            </div>
            <div>
              {" "}
              <input
                className="m-1"
                type="checkbox"
                id="edit"
                name="edit"
                value="edit"
                defaultChecked={formItems?.edit}
                onChange={e => handleChange(e)}
              />
              <label htmlFor="edit">Edit</label>
            </div>
            <div>
              {" "}
              <input
                className="m-1"
                type="checkbox"
                id="remove"
                name="remove"
                value="remove"
                defaultChecked={formItems?.remove}
                onChange={e => handleChange(e)}
              />
              <label htmlFor="remove">Delete</label>
            </div>
          </div>
        </div>
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
