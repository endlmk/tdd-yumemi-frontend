import React from "react";

type Prefecture = {
  name: String;
};

const PrefCheckBox = ({ name }: Prefecture) => {
  return (
    <div>
      <label>
        <input type="checkbox" />
        <span>{name}</span>
      </label>
    </div>
  );
};

export default PrefCheckBox;
