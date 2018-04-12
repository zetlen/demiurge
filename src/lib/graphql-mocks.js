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
            fields
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
            fields: [
              {
                type: "radio",
                name: "delivery_method",
                source: "id",
                label: "DHL Ground"
              },
              {
                type: "price",
                label: "€",
                price: 0
              }
            ]
          },
          {
            id: "horse",
            fields: [
              {
                type: "radio",
                label: "Horseback",
                name: "delivery_method",
                source: "id"
              },
              {
                type: "price",
                label: "€",
                price: 1.7
              }
            ]
          },
          {
            id: "shiptostore",
            fields: [
              {
                type: "radio",
                label: "Ship To Store",
                name: "delivery_method",
                source: "id"
              },
              {
                type: "price",
                label: "€",
                price: 0
              },
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
