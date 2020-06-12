import React, { Component } from "react";
import PropTypes from "prop-types";

class Book extends Component {

  didUpdateBook = (event) => {
      this.props.onDidUpdateBookShelf({
        book: this.props.book,
        shelf: event.target.value
      })
  } 

  render() {
    const { title, authors, imageLinks } = this.props.book
    const { thumbnail } = imageLinks
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${thumbnail})`,
              }}
            />
            <div className="book-shelf-changer">
              <select defaultValue={this.props.book.shelf} onChange={(event) => this.didUpdateBook(event)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading" >Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors.join(", ")}</div>
        </div>
      </li>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onDidUpdateBookShelf: PropTypes.func.isRequired
}

export default Book;
