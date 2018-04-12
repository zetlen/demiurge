import React, { Component } from "react";
import { bool, arrayOf, shape, string, func } from "prop-types";
import BoundShipToStoreSelector from "./BoundShipToStoreSelector";
import DeliveryMethodChoice from "./DeliveryMethodChoice";
import ShippingIcon from "./lib/ShippingIcon";

export default class DeliveryMethodChooser extends Component {
  static propTypes = {
    loading: bool,
    availableShippingMethods: arrayOf(shape(DeliveryMethodChoice.propTypes)),
    selectedId: string,
    onChange: func
  };

  render() {
    const {
      props: { onChange, loading, availableShippingMethods = [] }
    } = this;
    return loading ? null : (
      <div className="card-panel">
        <h5>
          <span>Choose Delivery Method</span>
          <ShippingIcon />
        </h5>
        <div className="methods">
          {availableShippingMethods.map(
            method =>
              method.id === "shiptostore" ? (
                <BoundShipToStoreSelector
                  user={123}
                  key={method.id}
                  {...method}
                  onChange={onChange}
                />
              ) : (
                <DeliveryMethodChoice
                  key={method.id}
                  {...method}
                  onChange={onChange}
                />
              )
          )}
        </div>
      </div>
    );
  }
}
