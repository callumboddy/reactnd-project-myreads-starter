import React, { Component } from "react";
import PropTypes from 'prop-types'
import BooksShelf from "./BookShelf";

class BooksList extends Component {

  render() {
    const { books } = this.props
    const current = books.filter(book => book.shelf === 'currentlyReading')
    const wishlist = books.filter(book => book.shelf === 'wantToRead')
    const read = books.filter(book => book.shelf === 'read')

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BooksShelf heading="Currently Reading" books={current} onDidUpdateBookShelf={this.props.onDidUpdateBookShelf}/>
          <BooksShelf heading="Want to Read" books={wishlist} onDidUpdateBookShelf={this.props.onDidUpdateBookShelf}/>
          <BooksShelf heading="Read" books={read} onDidUpdateBookShelf={this.props.onDidUpdateBookShelf}/>
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

BooksList.propTypes = {
  books: PropTypes.array.isrequired
}

export default BooksList;
