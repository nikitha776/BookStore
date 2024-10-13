import React from 'react'
import BookSingleCard from './BookSingleCard';

const BooksCards = ({ books }) => {
  return (
    <div className="m-8 ml-36 flex flex-wrap">
        {books.map((book) => (
          <BookSingleCard key = {book._id} book = {book}/>
        ))}
    </div>
  );
}

export default BooksCards;