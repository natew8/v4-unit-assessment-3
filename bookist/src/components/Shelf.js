import React from 'react'

function Shelf(props) {
    let mappedTitles = props.shelf.map((element, index) => {
        return (
            <div className='new-book-added' key={index} className='book-shelf'>
                <h2>{element}</h2>
            </div>
        )
    })
    return (
        <div className='your-shelf'>
            <h1>your shelf</h1>
            <button onClick={() => props.clearShelf()} className='clear-shelf-button'>clear shelf</button>
            <div>
                <div className='new-book-added'>{mappedTitles}</div>
            </div>
        </div>
    )
}

export default Shelf