import { useState, useContext, useEffect } from "react";
import Input from "./input";
import { FormContext } from "../App";
import { useNavigate } from "react-router-dom";
import { findPattern } from "./helper";
import { AddIcon, EditIcon, DeleteIcon } from "./Icons";

const CustomForm = () => {
  const inputFields = useContext(FormContext);
  const navigate = useNavigate();
  const [remainFields, setRemainFields] = useState([]);
  const [isValid, setIsValid] = useState(true);
  // const [value, setValue] = useState("");

  useEffect(() => {
    inputFields.length === 0 || inputFields[0].type === ""
      ? navigate("/")
      : setRemainFields(inputFields);
  });

  const handleChange = (index, e) => {
    //validation
    if (inputFields[index]?.pattern) {
      setIsValid(false);
      let pat = findPattern(inputFields[index]?.pattern);
      const reg = new RegExp(pat);
      reg.test(e.value) && setIsValid(true);
    }
    inputFields[index][e.name] = e.value;
    // if (inputFields[index]?.formatToDisplay) {
    //   let displayFormat = findFormatToDisplay(inputFields[index]?.formatToDisplay, e.value);
    //   inputFields[index][e.name] = e.value.toUpperCase();
    //   setValue(displayFormat);
    // }
  };

  const addField = () => {
    inputFields.push({
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
    });

    navigate("/", { state: {} });
  };

  const editField = index => {
    navigate("/", { state: { index } });
  };

  const removeField = index => {
    inputFields.splice(index, 1);
    setRemainFields([...inputFields]); //re-rendering after deleting
  };

  const submit = e => {
    e.preventDefault();
  };

  return (
    <div className="min-h-[100vh] p-3 border-2 border-cyan-500 bg-[#272e2e]">
      <form onSubmit={submit} className="flex flex-col">
        {inputFields[0]?.type &&
          inputFields?.map((input, index) => {
            return (
              <div
                key={index}
                className="relative flex flex-col border-2 border-white p-4 m-1 rounded-lg w-[70%]"
              >
                <div className="flex">
                  <Input
                    label={input.label}
                    placeholder={input.placeholder}
                    type={input.type}
                    // value={value}
                    description={input.description}
                    isRequired={input.isRequired}
                    isValid={isValid}
                    formatToDisplay={input.formatToDisplay}
                    items={input.items}
                    name={input.name}
                    id={input.id}
                    onChange={e => {
                      handleChange(index, e);
                    }}
                  />

                  <button
                    onClick={submit}
                    className={`focus:outline-none focus:ring focus:ring-blue-700 bg-blue-500 font-bold rounded  ml-4 p-1 h-fit ${
                      input.label ? "mt-8" : ""
                    }`}
                  >
                    Submit
                  </button>
                </div>
                {Boolean(input.add || input.edit || input.remove) && (
                  <div className="flex m-1 absolute top-[6px] right-[0]">
                    {input.add && (
                      <button onClick={addField} className="p-0.5 mr-2">
                        <AddIcon width={17} height={17} fill={"#2fe038"} />
                      </button>
                    )}
                    {input.edit && (
                      <button
                        onClick={() => editField(index)}
                        className="p-0.5 mr-2"
                      >
                        <EditIcon width={17} height={17} fill={"#c41f96"} />
                      </button>
                    )}
                    {input.remove && (
                      <button
                        onClick={() => removeField(index)}
                        className="p-0.5 mr-2"
                      >
                        <DeleteIcon width={17} height={17} fill={"red"} />
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
      </form>
    </div>
  );
};

export default CustomForm;
