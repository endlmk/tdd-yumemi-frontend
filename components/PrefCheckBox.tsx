import React from "react";

type PrefectureProps = {
  name: string;
  code: number;
  onChange: (code: number) => void;
};

const PrefCheckBox = ({ name, code, onChange }: PrefectureProps) => {
  return (
    <div>
      <label>
        <input name={name} type="checkbox" onChange={(e) => onChange(code)} />
        {name}
      </label>
    </div>
  );
};

export default PrefCheckBox;
