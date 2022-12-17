const Input = props => {
  let {
    label,
    placeholder,
    type,
    description,
    isRequired,
    isValid,
    value,
    formatToDisplay,
    items,
    name,
    id,
    onChange,
  } = props;

  const required = isRequired === "true" ? true : false;

  return (
    <div className="w-fit h-fit flex flex-col max-w-[400px] ml-2 text-white">
      {label && !Boolean(type === "radio" || type === "checkbox") && (
        <label htmlFor={id} className="font-bold">
          {required && <span className="text-red-500">*</span>} {label}:
        </label>
      )}
      {!Boolean(
        type === "timeSpan" ||
          type === "select" ||
          type === "radio" ||
          type === "checkbox"
      ) && (
        <input
          className={`${
            isValid
              ? "border border-slate-600 focus:outline-none focus:ring focus:ring-blue-700"
              : "border-2 border-red-600 focus:outline-none focus:ring focus:ring-red-700"
          } duration-300 focus:outline-none focus:ring focus:ring-blue-700 rounded p-1 text-black`}
          placeholder={placeholder}
          // value={value}
          type={type}
          required={required}
          name={name}
          id={id}
          onChange={e => onChange(e.target)}
        />
      )}
      {type === "timeSpan" && (
        <div>
          From:
          <input
            className={`border border-slate-600 focus:outline-none focus:ring focus:ring-blue-700 duration-300 focus:outline-none focus:ring focus:ring-blue-700 rounded p-1 text-black`}
            type="date"
            required={required}
            name={name}
            id={id}
            onChange={e => onChange(e.target)}
          />{" "}
          to:
          <input
            className={`border border-slate-600 focus:outline-none focus:ring focus:ring-blue-700 duration-300 focus:outline-none focus:ring focus:ring-blue-700 rounded p-1 text-black`}
            type="date"
            required={required}
            name={name}
            id={id}
            onChange={e => onChange(e.target)}
          />
        </div>
      )}
      {type === "select" && (
        <select
          name={name}
          id={id}
          onChange={e => onChange(e)}
          required={required}
          className={` border border-slate-600 focus:outline-none focus:ring focus:ring-blue-700 duration-300 focus:outline-none focus:ring focus:ring-blue-700 rounded p-1 text-black`}
        >
          {items.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      )}
      {(type === "radio" || type === "checkbox") && items.length > 0 && (
        <div className="flex mb-2 mt-4">
          {label && (
            <p className="font-bold mr-2">
              {" "}
              {required && <span className="text-red-500">*</span>} {label}:
            </p>
          )}
          <div
            className={`
           border border-slate-600 focus:outline-none focus:ring focus:ring-blue-700 duration-300 focus:outline-none focus:ring focus:ring-blue-700 rounded p-1 text-black`}
          >
            {items.map((item, index) => {
              return (
                <div key={index}>
                  {" "}
                  <input
                    className="m-1"
                    type={type}
                    id={id}
                    name={name}
                    value={item}
                    onChange={e => onChange(e)}
                  />
                  <label htmlFor={id} className="text-white">{item}</label>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {description && (
        <div className="border border-white flex max-w-full mt-1 px-2 rounded">
          <span className="font-bold text-[13px]">Description: </span>
          <span className="text-[13px] px-2">{description}</span>
        </div>
      )}
    </div>
  );
};

export default Input;
