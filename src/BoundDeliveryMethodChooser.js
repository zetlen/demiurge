import React from "react";
import DeliveryMethodChooser from "./DeliveryMethodChooser";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class BoundDeliveryMethodChooser extends React.Component {
  render() {
    return (
      <DeliveryMethodChooser
        {...this.props.data}
        onChange={this.props.onChange}
      />
    );
  }
}

export default graphql(gql`
  query {
    availableShippingMethods {
      id
      label
      price
    }
  }
`)(BoundDeliveryMethodChooser);
