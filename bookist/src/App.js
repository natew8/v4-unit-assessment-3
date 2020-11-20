import { Component } from 'react';
import './App.css';
import Header from './components/Header'
import BookList from './components/BookList'
import Shelf from './components/Shelf'
import SearchBar from './components/SearchBar'
import data from './data';

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: data,
      shelf: []
    }
    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
  }

  addToShelf(newBook) {
    const addBook = [...this.state.shelf, newBook]
    if (addBook.length < 15) {
      this.setState({ shelf: addBook })
    } else {
      alert('Your Shelf is Full!')
    }
  }

  clearShelf() {
    this.setState({ shelf: [] })
  }

  filterBooks = (input) => {
    let filteredBooks = this.state.books
    filteredBooks = filteredBooks.filter((element) => {
      return element.title.includes(input)
    })
    this.setState({
      books: filteredBooks
    })
  }

  clearSearch() {
    this.setState({
      books: data
    })
  }


  render() {
    return (
      <div className="App" >
        <Header />
        <SearchBar
          filterBooks={this.filterBooks}
          clearSearch={this.clearSearch} />
        <div className='hero'>
          <BookList
            addToShelf={this.addToShelf}
            books={this.state.books} />
          <Shelf
            shelf={this.state.shelf}
            clearShelf={this.clearShelf} />
        </div>
      </div>
    );
  }
}

export default App;
