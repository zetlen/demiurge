import gql from "graphql-tag";

const mocks = [
  {
    request: {
      variables: {
        user: 123
      },
      query: gql`
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
      `
    },
    result: {
      data: {
        availableShippingMethods: [
          {
            id: "dhl",
            label: "DHL Ground",
            price: 0,
            additionalFields: []
          },
          {
            id: "horse",
            label: "Horseback",
            price: 1.7,
            additionalFields: []
          },
          {
            id: "shiptostore",
            label: "Ship To Store:",
            price: 0,
            additionalFields: [
              {
                type: "select",
                name: "ship_to",
                source: "stores",
                labelKey: "name",
                valueKey: "id"
              }
            ]
          }
        ],
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
