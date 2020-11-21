import React, { Component } from 'react'

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
    }

    handleInput(val) {
        this.setState({ input: val })
    }

    handleClick() {
        this.props.filterBooks(this.state.input)
    }

    handleClear() {
        this.props.clearSearch()
        return this.input.clearSearch()
    }

    render() {
        return (
            <div className='searchBar-container'>
                <input className='search-input' onChange={(e) => this.handleInput(e.target.value.toLowerCase())} type='text'></input>
                <button className='search-buttons' onClick={() => { this.handleClick() }}>search</button>
                <button className='search-buttons' onClick={() => { this.handleClear() }}>clear search</button>
            </div>
        )
    }
}

export default SearchBar