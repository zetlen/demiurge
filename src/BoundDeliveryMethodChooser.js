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

export default graphql(
  gql`
    query shippingInfo($user: Number) {
      availableShippingMethods {
        id
        label
        price
        additionalFields
      }
      stores: stores(nearby: $user) {
        id
        name
      }
    }
  `,
  {
    options: ({ user }) => ({
      variables: {
        user
      }
    })
  }
)(BoundDeliveryMethodChooser);
