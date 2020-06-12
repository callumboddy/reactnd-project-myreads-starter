import React, { Component } from "react";
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.heading}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {this.props.books.map(book => <Book key={book.id} book={book} onDidUpdateBookShelf={this.props.onDidUpdateBookShelf}/>)}
          </ol>
        </div>
      </div>
    );
  }
}

BookShelf.propTypes = {
  heading: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
}

export default BookShelf;
