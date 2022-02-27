import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  loadData,
  addCart,
  updateCart,
  deleteCart,
  deleteAll,
} from '../data/action.creator';

import { DataTypes } from '../data/type';
import { Etic } from './etic';
import { CartList } from '../cart/cart.list';
const mapStateToProps = (dataStore) => ({
  ...dataStore,
});

const mapDispatchToProps = {
  loadData,
  addCart,
  updateCart,
  deleteCart,
  deleteAll,
};

const filterBooks = (books = [], category) =>
  !category || category === 'All'
    ? books
    : books.filter((p) => p.category.toLowerCase() === category.toLowerCase());

export const Connector = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class extends Component {
    render() {
      return (
        <Switch>
          <Route
            path="/books/:category?"
            render={(routeProps) => (
              <Etic
                {...this.props}
                {...routeProps}
                books={filterBooks(
                  this.props.books,
                  routeProps.match.params.category
                )}
              />
            )}
          />
          <Route
            path="/cart"
            render={(routeProps) => (
              <CartList {...this.props} {...routeProps} />
            )}
          />
          <Redirect to="/books" />
        </Switch>
      );
    }

    componentDidMount() {
      this.props.loadData(DataTypes.CATEGORIES);
      this.props.loadData(DataTypes.BOOKS);
    }
  }
);
