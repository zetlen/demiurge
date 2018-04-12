/* No, nothing is in here. This was never a good idea. */
import React from "react";

export default class ViewModel {
  static InputTypes = {
    select: (data, config) => (
      <select className="browser-default" name={config.name}>
        {data[config.source].map(record => (
          <option key={record[config.valueKey]} value={record[config.valueKey]}>
            {record[config.labelKey]}
          </option>
        ))}
      </select>
    ),
    radio: (data, config) => (
      <span>
        <input type="radio" name={config.name} />
        <label htmlFor={config.id}>{config.label}</label>
      </span>
    ),
    price: (data, config) => ` ${config.price}${config.label}`
  };
  static Traits = [];
  constructor(data) {
    this.data = data;
  }
  renderInput(field) {
    return ViewModel.InputTypes[field.type](this.data, field);
  }
}
