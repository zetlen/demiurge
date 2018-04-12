import React from "react";

const inputTypes = {
  select: (data, config) => (
    <select className="browser-default" key={config.name} name={config.name}>
      {data[config.source].map(record => (
        <option key={record[config.valueKey]} value={record[config.valueKey]}>
          {record[config.labelKey]}
        </option>
      ))}
    </select>
  )
};

export default class LittleForm extends React.Component {
  render() {
    return <span>{this.props.fields.map(f => this.renderInput(f))}</span>;
  }
  renderInput(field) {
    return inputTypes[field.type](this.props.data, field);
  }
}
