import gql from "graphql-tag";

import data from "./fixture.json";

const mocks = [
  {
    request: {
      variables: {},
      query: gql`
        query {
          availableShippingMethods {
            id
            label
            price
          }
        }
      `
    },
    result: {
      data
    }
  }
];

export default mocks;
