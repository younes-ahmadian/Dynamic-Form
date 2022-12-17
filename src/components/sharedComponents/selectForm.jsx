import React from "react";

const SelectForm = props => {
  const { label, name, id, onChange, defaultValue, options, disabled } = props;
  return (
    <div className="mt-3">
      <label htmlFor={id}>{label}</label>
      <select
        name={name}
        id={id}
        onChange={e => onChange(e)}
        defaultValue={defaultValue}
        disabled={disabled}
        className="border border-slate-600 duration-300 focus:outline-none focus:ring focus:ring-blue-700 rounded p-1 m-2"
      >
        {options?.map(
          (option, index) =>
            option.condition && (
              <option
                key={index}
                value={option.value}
                selected={option.selected}
              >
                {option.title}
              </option>
            )
        )}
      </select>
    </div>
  );
};

export default SelectForm;
