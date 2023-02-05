import { event } from "cypress/types/jquery";
import React from "react";

type PrefectureProps = {
  name: string;
  code: number;
  checked: boolean;
  onChange: (code: number) => void;
};

const PrefCheckBox = ({ name, code, checked, onChange }: PrefectureProps) => {
  return (
    <div>
      <label>
        <input
          name={name}
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            onChange(code);
          }}
        />
        {name}
      </label>
    </div>
  );
};

export default PrefCheckBox;
