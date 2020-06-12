import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks'
import BooksList from './components/BooksList'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => this.setState({books}))
  }

  didUpdateBook({ book, shelf }) {
    BooksAPI.update(book, shelf)
    .then(() => BooksAPI.getAll()
    .then((books) => this.setState({books})))
  }

  didSelectBackButton = () => {
    this.setState({ showSearchPage: false })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage
        ? (<SearchBooks onDidSelectBackButton={this.didSelectBackButton}/>)
        : (<BooksList books={this.state.books} onDidUpdateBookShelf={this.didUpdateBook.bind(this)} />)
        }
      </div>
    )
  }
}

export default BooksApp
