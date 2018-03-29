import React from "react";
import ReactDOM from "react-dom";
import DeliveryMethodChooser from "./DeliveryMethodChooser";
import ShowMarkup from "../lib/ShowMarkup";
import fixture from "../lib/fixture.json";

const chooser = <DeliveryMethodChooser {...fixture} />;

ReactDOM.render(
  <div className="container">
    {chooser}
    <ShowMarkup at=".methods" />
  </div>,
  document.getElementById("root")
);
