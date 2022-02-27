import React, { Component } from 'react';
export class Books extends Component {
  render() {
    if (this.props.books == null || this.props.books.length === 0) {
      return <h5 className="p-2">No Books</h5>;
    }
    return this.props.books.map((p) => (
      <div className="card m-1 p-1 bg-light" key={p.id}>
        <h4>
          {p.name} - {p.author}
          <span className="badge badge-secondary float-right">
            ${p.price.toFixed(2)}
          </span>
        </h4>
        <div className="card-text bg-white p-1">
          {p.note}
          <button
            className="btn btn-secondary btn-sm float-right"
            onClick={() => this.props.addCart(p)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    ));
  }
}
