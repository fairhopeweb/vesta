import React, { useEffect, useState } from 'react';

const Checkbox = ({ name, id, title, defaultChecked = false, onChange = () => { }, checked }) => {
  const [checkedState, setCheckedState] = useState(false);

  useEffect(() => {
    if (!!checked) {
      setCheckedState(checked);
    }

    if (!!defaultChecked) {
      setCheckedState(defaultChecked);
    }
  }, [checked, defaultChecked]);

  const changeCheckbox = event => {
    setCheckedState(event.target.checked);
    onChange(event.target.checked);
  }

  return (
    <div className="form-group">
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          name={name}
          id={id}
          checked={checkedState}
          onChange={changeCheckbox}
          defaultChecked={defaultChecked} />
        <label htmlFor={id}>{title}</label>
      </div>
    </div>
  );
}

export default Checkbox;
