import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks'
import BooksList from './components/BooksList'
import { Route, Switch } from 'react-router-dom'

class BooksApp extends React.Component {

  state = {
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
      <Switch>
        <Route exact path='/' render={() => 
          <BooksList 
            books={this.state.books} 
            onDidUpdateBookShelf={this.didUpdateBook.bind(this)} />
        } />
        <Route exact path='/search' render= {() =>
          <SearchBooks
            books={this.state.books} 
            onDidUpdateBookShelf={this.didUpdateBook.bind(this)} />
        } />
      </Switch>
      </div>
    )
  }
}

export default BooksApp
