import { event } from "cypress/types/jquery";
import React from "react";

type PrefectureProps = {
  name: string;
  code: number;
  onChange: (code: number, isChecked: boolean) => void;
};

const PrefCheckBox = ({ name, code, onChange }: PrefectureProps) => {
  return (
    <div>
      <label>
        <input
          name={name}
          type="checkbox"
          onChange={(e) => onChange(code, e.target.checked)}
        />
        {name}
      </label>
    </div>
  );
};

export default PrefCheckBox;
