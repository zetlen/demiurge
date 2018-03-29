import React from "react";
import { string, number, func } from "prop-types";

export default class DeliveryMethodChoice extends React.Component {
  static propTypes = {
    id: string,
    label: string,
    price: number,
    onChange: func
  };

  render() {
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
        </label>
      </p>
    );
  }
}
