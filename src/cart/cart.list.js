import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CartRow } from './cart.row';
export class CartList extends Component {
  getLinkClasses = () =>
    `btn btn-secondary m-1  {this.props.cartItems === 0 ? 'disabled' : ''}`;
  render() {
    return (
      <div className="m-3">
        <h2 className="text-center">Your Cart</h2>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Book</th>
              <th className="text-right">Price</th>
              <th className="text-right">Subtotal</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <CartRow
              cart={this.props.cart}
              cartPrice={this.props.cartPrice}
              updateQuantity={this.props.updateCartQuantity}
              removeFromCart={this.props.removeFromCart}
            />
          </tbody>
        </table>
        <div className="text-center">
          <Link className="btn btn-secondary m-1" to="/">
            Continue Shopping
          </Link>
          <Link className={this.getLinkClasses()} to="/checkout">
            Checkout
          </Link>
        </div>
      </div>
    );
  }
}
