import React, { Component } from "react";
import BooksShelf from "./BookShelf";

class BooksList extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BooksShelf heading="Currently Reading" />
          <BooksShelf heading="Want to Read" />
          <BooksShelf heading="Read" />
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button>
        </div>
      </div>
    );
  }
}

export default BooksList;
