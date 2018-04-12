import React from "react";
import { arrayOf, oneOf, any, shape, string, number, func } from "prop-types";
import ViewModel from "./lib/ViewModel";

export default class DeliveryMethodChoice extends React.Component {
  static propTypes = {
    id: string,
    fields: arrayOf(
      shape({
        type: oneOf(Object.keys(ViewModel.InputTypes)),
        value: any,
        name: string,
        label: string,
        traits: arrayOf(oneOf(ViewModel.Traits))
      })
    ),
    onChange: func
  };

  constructor(props) {
    super(props);
    this.state = {
      viewModel: new ViewModel(props.data)
    };
  }

  processWithTraits = event => {
    return this.props.fields.reduce(
      (handler, field) =>
        handler.then(
          field.traits.reduce((innerHandler, trait) =>
            innerHandler.then(trait.bind(this, field, event))
          )
        ),
      Promise.resolve()
    );
  };

  render() {
    return (
      <p>
        {this.props.fields.map(field => (
          <span key={field.name}>
            {this.state.viewModel.renderInput({
              ...field,
              onChange: this.processWithTraits
            })}
          </span>
        ))}
      </p>
    );
  }
}
