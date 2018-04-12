import React from "react";

const inputTypes = {
  select: (data, config) => (
    <select className="browser-default" name={config.name}>
      {data[config.source].map(record => (
        <option value={record[config.valueKey]}>
          {record[config.labelKey]}
        </option>
      ))}
    </select>
  )
};

export default class LittleForm extends React.Component {
  render() {
    return <div>{this.props.fields.map(f => this.renderInput(f))}</div>;
  }
  renderInput(field) {
    return inputTypes[field.type](this.props.data, field);
  }
}
