import React from "react";
import ReactDOM from "react-dom";
import { MockedProvider as ApolloProvider } from "react-apollo/test-utils";
import BoundDeliveryMethodChooser from "./BoundDeliveryMethodChooser";
import ShowMarkup from "./lib/ShowMarkup";
import mocks from "./lib/graphql-mocks.js";

const chooser = (
  <ApolloProvider mocks={mocks} removeTypename={true}>
    <BoundDeliveryMethodChooser />
  </ApolloProvider>
);

ReactDOM.render(
  <div className="container">
    {chooser}
    <ShowMarkup at=".methods" />
  </div>,
  document.getElementById("root")
);
