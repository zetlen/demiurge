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
  },
  {
    request: {
      variables: {
        user: 123
      },
      query: gql`
        query getStores($user: Number) {
          stores(nearby: $user) {
            id
            name
          }
        }
      `
    },
    result: {
      data: {
        stores: [
          {
            id: "2",
            name: "Hoofddorp"
          },
          {
            id: "3",
            name: "Bug Tussle"
          }
        ]
      }
    }
  }
];

export default mocks;
