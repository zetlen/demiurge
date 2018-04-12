import React from "react";
import { string, number, func } from "prop-types";
import LittleForm from "./lib/LittleForm";

export default class DeliveryMethodChoice extends React.Component {
  static propTypes = {
    id: string,
    label: string,
    price: number,
    onChange: func
  };

  render() {
    const { additionalFields, data } = this.props;
    let littleForm = null;
    if (additionalFields && additionalFields.length > 0) {
      littleForm = (
        <LittleForm
          data={data}
          fields={additionalFields}
          onChange={this.props.onChange}
        />
      );
    }
    return (
      <p>
        <input
          type="radio"
          name="shippingMethod"
          id={this.props.id}
          onChange={this.props.onChange}
        />
        <label htmlFor={this.props.id}>
          {this.props.label} {this.props.price}€
          {littleForm}
        </label>
      </p>
    );
  }
}
