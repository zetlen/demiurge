import React from "react";
import "prismjs";
import "prismjs/themes/prism.css";
import pretty from "pretty";
import PrismCode from "react-prism";

export default class ShowMarkup extends React.Component {
  componentDidMount() {
    [250, 500, 1000].forEach(delay =>
      setTimeout(() => this.forceUpdate(), delay)
    );
  }
  render() {
    const { at } = this.props;
    const result = document.querySelector(at);
    return !result ? null : (
      <pre>
        <PrismCode className="language-html">
          {pretty(result.outerHTML, { ocd: true })}
        </PrismCode>
      </pre>
    );
  }
}
