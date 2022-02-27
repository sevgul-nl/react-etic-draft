import React, { Component } from 'react';
import { Categories } from './categories';
import { Books } from './books';
import { CartSummary } from '../cart/cart.summary';

export class Etic extends Component {
  handleAddCart = (...args) => {
    this.props.addCart(...args);
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col bg-dark text-white">
            <div className="navbar-brand">Book Store</div>
            <CartSummary {...this.props} />{' '}
          </div>
        </div>
        <div className="row">
          <div className="col-3 p-2">
            <Categories baseUrl="/books" categories={this.props.categories} />
          </div>
          <div className="col-9 p-2">
            <Books books={this.props.books} addCart={this.handleAddCart} />
          </div>
        </div>
      </div>
    );
  }
}
