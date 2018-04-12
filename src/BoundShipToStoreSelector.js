import ShipToStoreSelector from "./ShipToStoreSelector";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class BoundShipToStoreSelector extends Component {
  render() {
    return (
      <ShipToStoreSelector
        stores={this.props.stores}
        id={this.props.id} />
    )
  }
}
  
export default graphql(gql`
  getStores {
    stores(nearby: $user) {
      id
      name
    }
  }
`)(BoundShipToStoreSelector);