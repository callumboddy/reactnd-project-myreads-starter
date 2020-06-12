import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import { debounce, throttle } from "throttle-debounce";

class SearchBooks extends React.Component {

  state = {
    searchResults: [],
    query: "",
  };

  search = (query) => {
    this.setState({ query: query });
    BooksAPI.search(query).then((res) => {
      Array.isArray(res)
        ? this.setState({ searchResults: res })
        : this.setState({ searchResults: [] });
    });
  };

  render() {
    const results = this.state.searchResults;
    console.log(results);
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close search
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.search(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {results.map(book => {
              const owned = this.props.books.filter(b => b.id === book.id)[0] || book
              return <Book
                key={owned.id}
                book={owned}
                shelf={owned.shelf}
                onDidUpdateBookShelf={this.props.onDidUpdateBookShelf}
              />
            })}
          </ol>
        </div>
      </div>
    );
  }
}

SearchBooks.propTypes = {
  onDidSelectBackButton: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
};

export default SearchBooks;
