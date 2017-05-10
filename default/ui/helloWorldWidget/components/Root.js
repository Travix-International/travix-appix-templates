import { observe, streamProps } from 'frint-react';
import React from 'react';

const Root = React.createClass({
  addProductToCart() {
    const { shoppingCartService, appId } = this.props;

    // eslint-disable-next-line no-alert,no-undef
    alert(`TODO: Implement the steps in the description, and remove this alert!`);

    shoppingCartService.addItem({
      AppId: appId,
      Quantity: 1,
      ProductId: 'TODO: Fill in ProductID',
      ProductParameters: 'TODO: Fill in your custom product parameters'
    });
  },

  render() {
    // TODO: This style is only here for debugging purposes, feel free to remove it!
    const borderStyle = { border: 'solid 2px red', padding: '16px' };

    return (
      <div style={borderStyle}>
        <div className="checkout-common__content--header">
          <h2>Welcome to Fireball development!</h2>
        </div>
        This is a shell for starting the development of a cross-sell app.<br />
        The following steps are required to add a product to the cart.
        <ol>
          <li>
            Move this widget to another region by changing the target in the <code>app.manifest</code>.
          </li>
          <li>
            Add your provider service URL for the <code>RetrieveProductForShoppingCart</code> endpoint to the app.manifest
          </li>
          <li>
            Call ShoppingCart.addItem() with the proper product id and parameters
          </li>
          <li>
            Remove this description :)
          </li>
        </ol>
        <button className="submit-button" onClick={this.addProductToCart}>Add to cart</button>
      </div>
    );
  }
});

export default observe(function doObserve(app) {
  return streamProps({})
    .set('appName', app.getOption('name'))
    .set('appId', app.getOption('id'))
    .set('shoppingCartService', app.get('shoppingCart'))
    .get$();
})(Root);
