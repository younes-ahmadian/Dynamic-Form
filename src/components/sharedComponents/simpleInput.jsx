import React from "react";

const SimpleInput = props => {
  const {
    label,
    type,
    name,
    id,
    value,
    onChange,
    defaultValue,
    disabled,
    inputClassName,
  } = props;
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        className={`${inputClassName}`}
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={e => onChange(e)}
        defaultValue={defaultValue}
        disabled={disabled}
      ></input>
    </div>
  );
};

export default SimpleInput;
