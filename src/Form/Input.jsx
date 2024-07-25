import React from "react";

const Input = ({ Label, Placeholder, name, value, setValue }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{Label}</label>
      <input
        className=" border-greyBorder  border-2 rounded-lg pt-2 pb-3 pl-4"
        type="text"
        id={name}
        name={name}
        placeholder={Placeholder}
        value={value}
        onChange={setValue}
        required
      />
    </div>
  );
};

export default Input;
