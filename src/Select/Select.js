import React from "react";
import PropTypes from "prop-types";

const Select = ({ handleChange, options, value }) => (
  <div className="selectWrapper">
    {options.length > 0 ? (
      <>
        <select onChange={handleChange} defaultValue={value}>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <span className="selectText">per page</span>
      </>
    ) : (
      <div className="placeholder">"No items"</div>
    )}
  </div>
);

Select.propTypes = {
  handleChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.number,
};

Select.defaultProps = {
  handleChange: () => "Test",
  options: [],
  value: 0,
};

export default Select;
