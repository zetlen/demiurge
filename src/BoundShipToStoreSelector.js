import React from "react";
import ShipToStoreSelector from "./ShipToStoreSelector";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class BoundShipToStoreSelector extends React.Component {
  render() {
    const { data: { stores, loading }, id } = this.props;
    return loading ? null : <ShipToStoreSelector stores={stores} id={id} />;
  }
}

export default graphql(
  gql`
    query getStores($user: Number) {
      stores(nearby: $user) {
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
)(BoundShipToStoreSelector);
