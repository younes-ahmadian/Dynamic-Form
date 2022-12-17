import React from "react";

const CheckBoxForm = props => {
  const { title, checkBoxItems } = props;
  return (
    <div className="flex mb-2 mt-4">
      <p>{title}</p>
      <div className="flex flex-col mx-2 p-2 border-2 border-white hover:outline-none hover:ring hover:ring-blue-400 duration-300">
        {checkBoxItems?.map(item => (
          <div>
            {" "}
            <input
              className={item.ClassName}
              type={item.type}
              id={item.value}
              name={item.value}
              value={item.value}
              defaultChecked={item.defaultChecked}
              onChange={item.onChange}
            />
            <label htmlFor={item.value} className="mx-1">
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckBoxForm;
