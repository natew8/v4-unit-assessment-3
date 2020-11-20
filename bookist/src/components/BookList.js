import React from 'react'

function BookList(props) {

    let mappedBooks = props.books.map(function (element, index) {
        return (
            <div key={index} className="book-info">
                <img onClick={() => props.addToShelf(element.title)} key={index} src={element.img} />
                <h3>{element.title} <br></br> By: {element.author}</h3>
            </div>
        )


    })
    return <div className='book-list'> {mappedBooks} </div>
}


export default BookList