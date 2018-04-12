import React from "react";
export default class ShipToStoreSelector extends React.Component {
  render() {
    return (
      <p className="ship-to-store">
        <input
          type="radio"
          name="shippingMethod"
          id={this.props.id}
          onChange={this.props.onChange}
        />
      <label htmlFor={this.props.id}>
        Ship to store:
        <select>
          {this.props.stores.map(({ id, name }) => (
            <option value={id}>{name}</option>
          ))}
        </select>
      </label>
    );
  }
}
