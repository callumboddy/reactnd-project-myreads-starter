import React, { Component } from "react";
import PropTypes from 'prop-types'
import BooksShelf from "./BookShelf";
import { Link } from 'react-router-dom'

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
          <Link className="open-search" to='/search'>Add a book</Link>
      </div>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.array.isRequired
}

export default BooksList;
